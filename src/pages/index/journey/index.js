import React from 'react'
import { SwapOutlined } from '@ant-design/icons'
import './index.less'
function Journey(props) {
    const { from,to,exchangeFromTo,showCitySelector } = props
	return (
		<div className="journey">
			<div className="station" onClick={()=>{showCitySelector(true)}}>
				<input type="text" readOnly name="from" value={from} />
			</div>
			<div className="switch" onClick={exchangeFromTo}>
            <SwapOutlined style={{ fontSize: '26px', color: '#ccc' }}/>
			</div>
			<div className="station" onClick={()=>{showCitySelector(false)}}>
				<input
					type="text"
					className="station-to"
					readOnly
					name="to"
					value={to}
				/>
			</div>
		</div>
	)
}
export default Journey
