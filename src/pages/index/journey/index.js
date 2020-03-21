import React from 'react'
import { SwapOutlined } from '@ant-design/icons'
import './index.less'
function Journey(props) {
	const { title, onBack } = props
	return (
		<div className="journey">
			<div className="station">
				<input type="text" readOnly name="from" value="北京" />
			</div>
			<div className="switch">
            <SwapOutlined style={{ fontSize: '26px', color: '#ccc' }}/>
			</div>
			<div className="station">
				<input
					type="text"
					className="station-to"
					readOnly
					name="to"
					value="上海"
				/>
			</div>
		</div>
	)
}
export default Journey
