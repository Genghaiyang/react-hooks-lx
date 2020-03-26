import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
function Submit() {
	return (
		<div className="Submit-box">
			<Link className='link' to='/query'>
				
					搜索
				
			</Link>
		</div>
	)
}
export default Submit
