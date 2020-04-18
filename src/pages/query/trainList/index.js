import React, { useCallback, useMemo, memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BorderOutlined } from '@ant-design/icons'
import './index.less'

function ListItem(props) {
	const {
		time,
		dStation,
		priceMsg,
		dTime,
		trainShowDesc,
		aStation,
		aTime,
		trainNumber,
		dayAfter,
	} = props

	return (
		<li>
			<Link className="link" to="/ticket">
				<p className="item-time">
					<span>{dTime}</span>
					<span>
						{aTime}
						<i className="time-after">{dayAfter}</i>
					</span>
				</p>
				<p className="item-stations">
					<span>
						<i className="item-icon">
							<BorderOutlined>始</BorderOutlined>
						</i>
						{dStation}
					</span>
					<span>
						<i className="item-icon">
							<BorderOutlined />
						</i>
						{aStation}
					</span>
				</p>
				<p className="item-train">
					<span>{trainNumber}</span>
					<span>{time}</span>
				</p>
				<p className="item-ticket">
					<span>{priceMsg}</span>
					<span>{trainShowDesc}</span>
				</p>
			</Link>
		</li>
	)
}

function TrainList(props) {
	const { trains } = props

	return (
		<ul className="train-list">
			{trains.map((item) => (
				<ListItem {...item} key={item.trainNumber} />
			))}
		</ul>
	)
}
export default memo(TrainList)
