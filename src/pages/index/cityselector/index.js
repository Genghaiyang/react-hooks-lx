import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { Spin } from 'antd'
import { LeftOutlined, CloseCircleOutlined } from '@ant-design/icons'

//import 'antd/dist/antd.less'
import './index.less'
function TopLine(props) {
	const [inputValue, setInputValue] = useState('')
	const [closebtnShow, setClosebtnShow] = useState(false)
	const couterRef = useRef()
	const { hide, setSuggest } = props

	const handleChange = useCallback(() => {
		//console.log(couterRef.current.value)
		setInputValue(couterRef.current.value)
		couterRef.current.value != '' ? setSuggest(true) : setSuggest(false)
		couterRef.current.value != ''
			? setClosebtnShow(true)
			: setClosebtnShow(false)
	})
	const handleClose = useCallback(() => {
		setInputValue('')
		setClosebtnShow(false)
		setSuggest(false)
	})
	return (
		<div className="top-line">
			<div className="return-btn" onClick={hide}>
				<LeftOutlined style={{ fontSize: '22px', color: '#fff' }} />
			</div>

			<div className="search-box">
				<input
					type="text"
					ref={couterRef}
					onChange={handleChange}
					value={inputValue}
					placeholder="城市、车站的中文或者拼音"
				/>
				<i
					className={closebtnShow ? 'close-btn' : 'close-btn hidden'}
					onClick={handleClose}
				>
					<CloseCircleOutlined
						style={{ fontSize: '22px', color: '#ccc' }}
					/>
				</i>
			</div>
		</div>
	)
}

function Suggest() {
	return (
		<div className="city-suggest">
			<ul>
				<li>郑州</li>
				<li>郑州</li>
				<li>郑州</li>
			</ul>
		</div>
	)
}

function CityList() {
	return (
		<div className="city-list">
            <Spin tip="Loading..." />
			
		</div>
	)
}

function CitySelector(props) {
	const {
		show,
		hideCitySelector,
		isLoadingCityData,
		cityData,
		fetchCityData
	} = props
	const [suggestShowHide, setSuggestShowHide] = useState(false)
	useEffect(() => {
		if (!show || cityData || isLoadingCityData) {
			return
		}
		fetchCityData()
	}, [show, cityData, isLoadingCityData])

	//console.log(fetchCityData)
	const cssName = useMemo(() => {
		return show ? 'city-select-box' : 'city-select-box hidden'
	}, [show])

	return (
		<div className={cssName}>
			<TopLine hide={hideCitySelector} setSuggest={setSuggestShowHide} />
			{suggestShowHide && <Suggest />}
			<CityList />
		</div>
	)
}
export default CitySelector
