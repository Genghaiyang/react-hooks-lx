import React, { useCallback, useState } from 'react'
import useDateFormat from '../../../utils/useDateFormat'
import { Calendar } from 'antd-mobile'
import './index.less'
function DepartDate(props) {
    const { departDate,setDate } = props
    /* const dateFormat = (date)=>{
        const weekArray = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
        let time =
			new Date(date).getFullYear().toString() +
			'-' +
			(new Date(date).getMonth() + 1).toString() +
			'-' +
            new Date(date).getDate().toString()
            let week = weekArray[new Date(date).getDay()-1]
            return [time,week]
    } */
	const nowTimeStamp = Date.now()
	const now = new Date(nowTimeStamp)
	//const [dateNum, setDateNum] = useState(dateFormat(now))
    const [CalendarVisible, setCalendarVisible] = useState(false)


    
    

	const handleConfirm = useCallback((startTime, endTime) => {
		
        //setDate(useDateFormat(startTime))
        setDate(startTime.getTime())
        setCalendarVisible(false)
	})

	return (
		<div className="depart-date">
			<div
				className="depart-date-input"
				onClick={() => {
					setCalendarVisible(true)
				}}
			>
				<input type="hidden" name="date" value="2020-03-25" />
				<b>{useDateFormat(departDate)[0]}</b>
				<span>{useDateFormat(departDate)[1]}</span>
			</div>
			

			<Calendar
				visible={CalendarVisible}
				onCancel={() => {
					setCalendarVisible(false)
				}}
				onConfirm={handleConfirm}
				type="one"
				defaultDate={now}
				minDate={new Date(+now - 0)}
				maxDate={new Date(+now + 2592000000)}
			/>
		</div>
	)
}
export default DepartDate
