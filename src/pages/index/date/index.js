import React, { useCallback, useState } from 'react'
import { DatePicker, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.less'
import './index.less'
function DepartDate(props) {
	//const { } = props
	const nowTimeStamp = Date.now()
	const now = new Date(nowTimeStamp)
	const [dateNum, setDateNum] = useState(now)

	return (
		<div className="depart-date">
			{/* <input type="hidden" name="date" value="2020-03-25" />
			<b>2020-03-25</b>
			<span>周三（今天）</span> */}
			<DatePicker
				mode="date"
				title="Select Date"
				value={dateNum}
				onChange={date => setDateNum(date)}
			>
				<List.Item arrow="horizontal">请选择乘车日期</List.Item>
			</DatePicker>
		</div>
	)
}
export default DepartDate
