import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import './index.less'
function Header(props) {
	const { title, onBack } = props
	return (
		<div className="headerBar">
			<i onClick={onBack}>
				<LeftOutlined />
			</i>

			<span>{title}</span>
		</div>
	)
}
export default Header
