import React, { useCallback, useMemo, memo, useEffect, useRef } from 'react'
import { Range, WingBlank } from 'antd-mobile'
import './index.less'

const FilterList = memo((props) => {
	const { name, value } = props
	return <li>{name}</li>
})

function Filter(props) {
	const { ticketType, trainType, depStation, arrStation } = props
	const rangesRef = useRef()
	const rangesTwoRef = useRef()

	const log = (name) => {
		return (value) => {
			console.log(`${name}: ${value}`)
		}
	}
	const parseValue = useCallback((value) => {
		const h = value[0] < 10 ? `0${value[0]}` : `${value[0]}`
		const f = value[1] < 10 ? `0${value[1]}` : `${value[1]}`
		return `${h}:00-${f}:00`
	}, [])
	const handleRange = useCallback((value) => {
		rangesRef.current.value = parseValue(value)
	}, [])

	const handleTwoRange = useCallback((value) => {
		rangesTwoRef.current.value = parseValue(value)
	}, [])

	return (
		<div className="filters-content">
			<p className="title-line">
				<span className="reset disabled">重置</span>
				<span className="ok">确定</span>
			</p>
			<div className="filters-options">
				<p className="name">坐席类型</p>
				<ul>
                    {ticketType.map((item)=>{
                       return <FilterList {...item} key={item.value}/>
                    })}
				</ul>
				<p className="name">车次类型</p>
				<ul>
                    {trainType.map((item)=>{
                       return <FilterList {...item} key={item.value}/>
                    })}
				</ul>
				<p className="name">出发车站</p>
				<ul>
                {depStation.map((item)=>{
                       return <FilterList {...item} key={item.value}/>
                    })}
				</ul>
				<p className="name">到达车站</p>
				<ul>
                {arrStation.map((item)=>{
                       return <FilterList {...item} key={item.value}/>
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
							defaultValue={[0, 24]}
							onChange={handleRange}
							onAfterChange={log('afterChange')}
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
							defaultValue={[0, 24]}
							onChange={handleTwoRange}
							onAfterChange={log('afterChange')}
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
