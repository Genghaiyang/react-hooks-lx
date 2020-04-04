import React, { useCallback, useMemo, memo, useEffect } from 'react'
import useDateFormat from '../../../utils/useDateFormat'
import useTimeClear from '../../../utils/useTimeClear'
import './index.less'
function Nav(props) {
	const {
		date,
		prevClick,
		nextClick,
		isNextDisabled,
		isPrevDisabled,
		setPrevDisabled,
		setNextDisabled
	} = props
	const parseDate = useCallback(time => {
		const str = time[0].split('-')
		return str[1] + '月' + str[2] + '日'
	}, [])

	useEffect(() => {
		const now = useTimeClear()
		useTimeClear(date) <= now
			? setPrevDisabled(true)
			: setPrevDisabled(false)
		useTimeClear(date)-now >= 30 * 86400 * 1000
			? setNextDisabled(true)
            : setNextDisabled(false)
	}, [date])

	return (
		<div className="nav-bar">
			<span
				className={isPrevDisabled ? 'prev disable' : 'prev'}
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
				className={isNextDisabled ? 'next disable' : 'next'}
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
