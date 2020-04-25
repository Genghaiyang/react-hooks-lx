import React, { useCallback, useMemo, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header'
import actions from '../../actions/query'
import actionsIndex from '../../actions/index'
import Nav from './nav'
import useTimeClear from '../../utils/useTimeClear'
import TrainList from './trainList'
import Footer from './footer'
import Filter from './filter'
import './index.less'
function Query(props) {
	const dispatch = props.dispatch
	const {
		/* setDate,
		setHighSpeed, */
		setPrevDisabled,
		setNextDisabled,
		setTrainsList,
		setTicketType,
		setTrainType,
		setDepstation,
		setArrstation,
		setFiltersVisible,
		setCheckedTicketTypes,
		setCheckedTrainTypes,
		setCheckedDepartStations,
		setCheckedArriveStations,
		setDepartTimeStart,
		setDepartTimeEnd,
		setArriveTimeStart,
		setArriveTimeEnd,
		setOrderType,
		setOnlyTickets,
	} = actions

	const { setDate, setHighSpeed } = actionsIndex

	const { from, to, departDate, highSpeed } = props.state.index
	/* const IndexDepartDate = props.state.index.departDate
    const IndexHighSpeed = props.state.index.highSpeed */
	const {
		/* departDate,
		highSpeed, */
		isNextDisabled,
		isPrevDisabled,
		trains,
		ticketType,
		trainType,
		depStation,
		arrStation,
		isFiltersVisible,
		orderType,
		onlyTickets,
		departTimeStart,
		departTimeEnd,
		arriveTimeStart,
		arriveTimeEnd,
		checkedTicketTypes,
		checkedTrainTypes,
		checkedDepartStations,
		checkedArriveStations,
	} = props.state.query
	const onBack = useCallback(() => {
		props.history.goBack()
	}, [])

	const cbs = useMemo(() => {
		return bindActionCreators(
			{
				setDate,
				setHighSpeed,
				setPrevDisabled,
				setNextDisabled,
				setTrainsList,
				setTicketType,
				setTrainType,
				setDepstation,
				setArrstation,
				setOrderType,
				setOnlyTickets,
			},
			dispatch
		)
	}, [])

	const filterCbs = useMemo(() => {
		return bindActionCreators(
			{
				setTrainsList,
				setTicketType,
				setTrainType,
				setDepstation,
				setArrstation,
				setFiltersVisible,
				setCheckedTicketTypes,
				setCheckedTrainTypes,
				setCheckedDepartStations,
				setCheckedArriveStations,
				setDepartTimeStart,
				setDepartTimeEnd,
				setArriveTimeStart,
				setArriveTimeEnd,
			},
			dispatch
		)
	}, [])

	/* useEffect(() => {
		cbs.setDate(IndexDepartDate)
		cbs.setHighSpeed(IndexHighSpeed)
	}, []) */

	useEffect(() => {
		fetch('/rest/query')
			.then((response) => response.json())
			.then((result) => {
				const {
					dataMap: {
						directTrainInfo: {
							trains,
							filter: {
								ticketType,
								trainType,
								depStation,
								arrStation,
							},
						},
					},
				} = result

				filterCbs.setTrainsList(trains)
				filterCbs.setTicketType(ticketType)
				filterCbs.setTrainType(trainType)
				filterCbs.setDepstation(depStation)
				filterCbs.setArrstation(arrStation)
			})
	}, [
		departDate,
		highSpeed,
		orderType,
		onlyTickets,
		departTimeStart,
		departTimeEnd,
		arriveTimeStart,
		arriveTimeEnd,
		checkedTicketTypes,
		checkedTrainTypes,
		checkedDepartStations,
		checkedArriveStations,
	])

	const prevClick = useCallback(() => {
		const now = useTimeClear()
		useTimeClear(departDate) > now
			? cbs.setDate(useTimeClear(departDate) - 86400000)
			: console.log('limt')
	}, [departDate])
	const nextClick = useCallback(() => {
		const now = useTimeClear()
		useTimeClear(departDate) - now < 30 * 86400 * 1000
			? cbs.setDate(useTimeClear(departDate) + 86400000)
			: console.log('limt')
	}, [departDate])
	return (
		<div className="Query">
			<Header title={`${from} ⇀ ${to}`} onBack={onBack} />
			<div className="container">
				<Nav
					date={departDate}
					prevClick={prevClick}
					nextClick={nextClick}
					isPrevDisabled={isPrevDisabled}
					isNextDisabled={isNextDisabled}
					setPrevDisabled={cbs.setPrevDisabled}
					setNextDisabled={cbs.setNextDisabled}
				/>
				<TrainList trains={trains} />
			</div>
			{isFiltersVisible && (
				<Filter
					{...filterCbs}
					ticketType={ticketType}
					trainType={trainType}
					depStation={depStation}
					arrStation={arrStation}
					checkedArriveStations={checkedArriveStations}
					departTimeStart={departTimeStart}
					departTimeEnd={departTimeEnd}
					arriveTimeStart={arriveTimeStart}
					arriveTimeEnd={arriveTimeEnd}
					checkedTicketTypes={checkedTicketTypes}
					checkedTrainTypes={checkedTrainTypes}
					checkedDepartStations={checkedDepartStations}
				/>
			)}

			<Footer
				highSpeed={highSpeed}
				setHighSpeed={cbs.setHighSpeed}
				orderType={orderType}
				setOrderType={cbs.setOrderType}
				onlyTickets={onlyTickets}
				setOnlyTickets={cbs.setOnlyTickets}
				isFiltersVisible={isFiltersVisible}
				setFiltersVisible={filterCbs.setFiltersVisible}
			/>
		</div>
	)
}
const mapStateToProps = (state) => ({
	state,
})
const mapDispatchToProps = (dispatch) => ({
	dispatch,
})
export default connect(mapStateToProps, mapDispatchToProps)(Query)
