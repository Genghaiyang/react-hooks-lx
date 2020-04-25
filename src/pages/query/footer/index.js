import React, { useCallback, useMemo, memo, useEffect } from 'react'
import {
	ClockCircleOutlined,
	FilterOutlined,
	RocketOutlined,
	TagsOutlined,
} from '@ant-design/icons'
import './index.less'
function Footer(props) {
	const {
		highSpeed,
		onlyTickets,
		orderType,
		setHighSpeed,
		setOnlyTickets,
        setOrderType,
        isFiltersVisible,
        setFiltersVisible
	} = props

	return (
		<div className="filters-box">
			<p
				onClick={() => {
					setOrderType(orderType===1?2:1)
				}}
			>
				<span>
					<ClockCircleOutlined style={{ fontSize: '20px' }} />
				</span>
				<span>{orderType === 1 ? '出发 早→晚' : '耗时 短→长'}</span>
			</p>
			<p
				onClick={() => {
					setHighSpeed(!highSpeed)
				}}
			>
				<span>
					<RocketOutlined
						style={
							highSpeed
								? { fontSize: '20px', color: '#1ba9ba' }
								: { fontSize: '20px' }
						}
					/>
				</span>
				<span
					style={highSpeed ? { color: '#1ba9ba' } : { color: '#888' }}
				>
					只看高铁动车
				</span>
			</p>
			<p
				onClick={() => {
					setOnlyTickets(!onlyTickets)
				}}
			>
				<span>
					<TagsOutlined
						style={
							onlyTickets
								? { fontSize: '20px', color: '#1ba9ba' }
								: { fontSize: '20px' }
						}
					/>
				</span>
				<span
					style={
						onlyTickets ? { color: '#1ba9ba' } : { color: '#888' }
					}
				>
					只看有票
				</span>
			</p>
			<p onClick={() => {
					setFiltersVisible(!isFiltersVisible)
				}}>
				<span>
					<FilterOutlined style={{ fontSize: '20px' }} />
				</span>
				<span>综合筛选</span>
			</p>
		</div>
	)
}
export default memo(Footer)
