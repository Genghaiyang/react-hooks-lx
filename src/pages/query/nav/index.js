import React, { useCallback, useMemo, memo } from 'react'
import useDateFormat from '../../../utils/useDateFormat'
import './index.less'
function Nav(props) {
	const { date, prevClick, nextClick } = props
	const parseDate = useCallback(time => {
		const str = time[0].split('-')
		return str[1] + '月' + str[2] + '日'
	}, [])
	return (
		<div className="nav-bar">
			<span
				className="prev disable"
				onClick={() => {
					prevClick()
				}}
			>
				前一天
			</span>
			<span className="date">
				{parseDate(useDateFormat(date))} {useDateFormat(date)[1]}
			</span>
			<span
				className="next"
				onClick={() => {
					nextClick()
				}}
			>
				后一天
			</span>
		</div>
	)
}
export default memo(Nav)
