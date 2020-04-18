import React, { useCallback, useMemo, memo, useEffect } from 'react'
import { ClockCircleOutlined,FilterOutlined,RocketOutlined,TagsOutlined } from '@ant-design/icons'
import './index.less'
function Footer(props) {
	const {} = props

	return (
		<div className="filters-box">
			<p>
				<span><ClockCircleOutlined style={{ fontSize: '20px' }} /></span>
				<span>出发 早→晚</span>
			</p>
			<p>
				<span><RocketOutlined style={{ fontSize: '20px' }} /></span>
				<span>只看高铁动车</span>
			</p>
			<p>
				<span><TagsOutlined style={{ fontSize: '20px' }} /></span>
				<span>只看有票</span>
			</p>
			<p>
				<span><FilterOutlined style={{ fontSize: '20px' }} /></span>
				<span>综合筛选</span>
			</p>
		</div>
	)
}
export default memo(Footer)
