import React, {
	useCallback,
	useMemo,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { Range, WingBlank } from 'antd-mobile'
import './index.less'

const FilterList = memo((props) => {
	const { name, value, checkedObject, setCheckedObject } = props
	const bool = useMemo(() => {
		return checkedObject.includes(value)
	}, [checkedObject, value])

	const handleClick = useCallback(() => {
		const newTicket = [...checkedObject]
		newTicket.includes(value)
			? newTicket.splice(
					newTicket.findIndex(
						(defaultValue) => defaultValue === value
					),
					1
			  )
			: newTicket.push(value)

		setCheckedObject(newTicket)
		//console.log(checkedTicketObject)
	}, [checkedObject, value])
	return (
		<li
			onClick={() => {
				handleClick()
			}}
			className={bool ? 'checked' : ''}
		>
			{name}
		</li>
	)
})

function Filter(props) {
	const [checkedTicketObject, setCheckedTicketObject] = useState([])
	const [checkedTrainObject, setCheckedTrainObject] = useState([])
	const [checkedDepStation, setCheckedDepStation] = useState([])
	const [checkedArrStation, setCheckedArrStation] = useState([])

	const [checkedDepartTimeStart, setCheckedDepartTimeStart] = useState(0)
	const [checkedDepartTimeEnd, setCheckedDepartTimeEnd] = useState(24)
	const [checkedArriveTimeStart, setCheckedArriveTimeStart] = useState(0)
	const [checkedArriveTimeEnd, setCheckedArriveTimeEnd] = useState(24)

	const {
		ticketType,
		trainType,
		depStation,
		arrStation,
		arriveTimeEnd,
		arriveTimeStart,
		checkedArriveStations,
		checkedDepartStations,
		checkedTicketTypes,
		checkedTrainTypes,
		departTimeEnd,
		departTimeStart,
		setArriveTimeEnd,
		setArriveTimeStart,
		setCheckedArriveStations,
		setCheckedDepartStations,
		setCheckedTicketTypes,
		setCheckedTrainTypes,
		setDepartTimeEnd,
		setDepartTimeStart,
		setFiltersVisible,
	} = props
	const rangesRef = useRef()
	const rangesTwoRef = useRef()

	useEffect(() => {
		setCheckedTicketObject(checkedTicketTypes)
		setCheckedTrainObject(checkedTrainTypes)
		setCheckedDepStation(checkedDepartStations)
		setCheckedArrStation(checkedArriveStations)
		setCheckedDepartTimeStart(departTimeStart)
		setCheckedDepartTimeEnd(departTimeEnd)
		setCheckedArriveTimeStart(arriveTimeStart)
        setCheckedArriveTimeEnd(arriveTimeEnd)
        
        rangesRef.current.value = parseValue([departTimeStart,departTimeEnd])
        rangesTwoRef.current.value = parseValue([arriveTimeStart,arriveTimeEnd])
	}, [
		/* checkedTicketTypes,
		checkedTrainTypes,
		checkedDepartStations,
		checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd */
	])

	const parseValue = useCallback((value) => {
		const h = value[0] < 10 ? `0${value[0]}` : `${value[0]}`
		const f = value[1] < 10 ? `0${value[1]}` : `${value[1]}`
		return `${h}:00-${f}:00`
	}, [])
	const handleRange = useCallback((value) => {
		rangesRef.current.value = parseValue(value)
		setCheckedDepartTimeStart(value[0])
		setCheckedDepartTimeEnd(value[1])
	}, [])

	/* const handleAfterRange = useCallback((value) => {
        setCheckedDepartTimeStart(value[0])
        setCheckedDepartTimeEnd(value[1])
	}, []) */

	const handleTwoRange = useCallback((value) => {
		rangesTwoRef.current.value = parseValue(value)
		setCheckedArriveTimeStart(value[0])
		setCheckedArriveTimeEnd(value[1])
	}, [])

	/* const handleAfterTwoRange = useCallback((value) => {
		setCheckedArriveTimeStart(value[0])
        setCheckedArriveTimeEnd(value[1])
    }, []) */

	const handleReset = useCallback(() => {
		setCheckedTicketObject([])
		setCheckedTrainObject([])
		setCheckedDepStation([])
		setCheckedArrStation([])
		setCheckedDepartTimeStart(0)
		setCheckedDepartTimeEnd(24)
		setCheckedArriveTimeStart(0)
		setCheckedArriveTimeEnd(24)

		rangesRef.current.value = '00:00-24:00'
		rangesTwoRef.current.value = '00:00-24:00'
	}, [])

	const handleOkBtn = useCallback(() => {
		setArriveTimeEnd(checkedArriveTimeEnd)
		setArriveTimeStart(checkedArriveTimeStart)
		setCheckedArriveStations(checkedArrStation)
		setCheckedDepartStations(checkedDepStation)
		setCheckedTicketTypes(checkedTicketObject)
		setCheckedTrainTypes(checkedTrainObject)
		setDepartTimeEnd(checkedDepartTimeEnd)
		setDepartTimeStart(checkedDepartTimeStart)

		setFiltersVisible(false)
	}, [
		checkedArriveTimeEnd,
		checkedArriveTimeStart,
		checkedArrStation,
		checkedDepStation,
        checkedTicketObject,
        checkedTrainObject,
        checkedDepartTimeEnd,
        checkedDepartTimeStart
	])

	return (
		<div className="filters-content">
			<p className="title-line">
				<span className="reset disabled" onClick={handleReset}>
					重置
				</span>
				<span className="ok" onClick={handleOkBtn}>
					确定
				</span>
			</p>
			<div className="filters-options">
				<p className="name">坐席类型</p>
				<ul>
					{ticketType.map((item) => {
						return (
							<FilterList
								{...item}
								key={item.value}
								checkedObject={checkedTicketObject}
								setCheckedObject={setCheckedTicketObject}
							/>
						)
					})}
				</ul>
				<p className="name">车次类型</p>
				<ul>
					{trainType.map((item) => {
						return (
							<FilterList
								{...item}
								key={item.value}
								checkedObject={checkedTrainObject}
								setCheckedObject={setCheckedTrainObject}
							/>
						)
					})}
				</ul>
				<p className="name">出发车站</p>
				<ul>
					{depStation.map((item) => {
						return (
							<FilterList
								{...item}
								key={item.value}
								checkedObject={checkedDepStation}
								setCheckedObject={setCheckedDepStation}
							/>
						)
					})}
				</ul>
				<p className="name">到达车站</p>
				<ul>
					{arrStation.map((item) => {
						return (
							<FilterList
								{...item}
								key={item.value}
								checkedObject={checkedArrStation}
								setCheckedObject={setCheckedArrStation}
							/>
						)
					})}
				</ul>
				<p className="name times">
					出发时间
					<input
						readOnly
						ref={rangesRef}
						defaultValue="00:00-24:00"
					/>
				</p>
				<div className="range">
					<WingBlank size="lg">
						<Range
							style={{ marginLeft: 30, marginRight: 30 }}
							min={0}
							max={24}
							value={[
								checkedDepartTimeStart,
								checkedDepartTimeEnd,
							]}
							defaultValue={[0, 24]}
							onChange={handleRange}
							/* onAfterChange={handleAfterRange} */
							trackStyle={[
								{ backgroundColor: '#3cc' },
								{ backgroundColor: '#3cc' },
							]}
							handleStyle={[
								{
									backgroundColor: '#3cc',
									border: '2px solid #3cc',
								},
								{
									backgroundColor: '#3cc',
									border: '2px solid #3cc',
								},
							]}
						/>
					</WingBlank>
				</div>
				<p className="name times">
					到达时间
					<input
						readOnly
						ref={rangesTwoRef}
						defaultValue="00:00-24:00"
					/>
				</p>
				<div className="range">
					<WingBlank size="lg">
						<Range
							style={{ marginLeft: 30, marginRight: 30 }}
							min={0}
							max={24}
							value={[
								checkedArriveTimeStart,
								checkedArriveTimeEnd,
							]}
							defaultValue={[0, 24]}
							onChange={handleTwoRange}
							/* onAfterChange={handleAfterTwoRange} */
							trackStyle={[
								{ backgroundColor: '#3cc' },
								{ backgroundColor: '#3cc' },
							]}
							handleStyle={[
								{
									backgroundColor: '#3cc',
									border: '2px solid #3cc',
								},
								{
									backgroundColor: '#3cc',
									border: '2px solid #3cc',
								},
							]}
						/>
					</WingBlank>
				</div>
			</div>
		</div>
	)
}
export default memo(Filter)
