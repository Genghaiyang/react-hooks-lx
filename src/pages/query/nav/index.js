import React, { useCallback, useMemo,memo  } from 'react'
import './index.less'
function Nav(props) {
    const {date} = props
    const parseDate = useCallback((time)=>{
        const str = time[0].split('-')
        return str[1]+'月'+str[2]+'日'
    },[])
	return (
		<div className="nav-bar">
			<span className="prev disable">前一天</span>
            <span className="date">{parseDate(date)} {date[1]}</span>
			<span className="next">后一天</span>
		</div>
	)
}
export default memo(Nav)
