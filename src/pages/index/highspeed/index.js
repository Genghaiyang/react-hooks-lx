import React, { useCallback, useState } from 'react'
import { Switch, List } from 'antd-mobile'
import './index.less'
function HighSpeed(props) {
	const { SwitchBool , setSwitch } = props
	return (
		<div className="high-speed">
			<span>只看高铁/动车</span>
			<div className="switch">
				<Switch
					checked={SwitchBool}
					onChange={() => {setSwitch(!SwitchBool)}}
				/>
			</div>
		</div>
	)
}
export default HighSpeed
