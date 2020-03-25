import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { Spin } from 'antd'
import { LeftOutlined, CloseCircleOutlined } from '@ant-design/icons'

import 'antd/dist/antd.less'
import './index.less'
function TopLine(props) {
	const [inputValue, setInputValue] = useState('')
	const [closebtnShow, setClosebtnShow] = useState(false)
	const couterRef = useRef()
	const { hide, setSuggest,setSearchKey } = props

	const handleChange = useCallback(() => {
		setSearchKey(couterRef.current.value)
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

function Suggest(props) {
    const { setSelectedCity,searchKey } = props
    const [searchList,setSearchList] = useState([])
    useEffect(() => {
        fetch('/rest/search?key=' + encodeURIComponent(searchKey))
            .then(res => res.json())
            .then(data => {
                const { result, searchKey: sKey } = data

                if (sKey === searchKey) {
                    setSearchList(result)
                }
            })
        
    }, [searchKey])
	return (
		<div className="city-suggest">
			<ul>				
				{searchList.map(data => {
				return <li key={data.key} onClick={()=>{setSelectedCity(data.display)}}>{data.display}</li>
			})}
			</ul>
		</div>
	)
}

function CityList(props) {
    const { cityData,setSelectedCity } = props
    const toAlpha = useCallback(alpha => {
        document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
    }, []);
	return (
		<div className="city-list">
			<div className="city-cate">
				{cityData.cityList.map(citysection => {
					return (
						<CitySection
							key={citysection.title}
							title={citysection.title}
                            data={citysection.citys}
                            setSelectedCity={setSelectedCity}
						/>
					)
				})}
			</div>
			<div className="city-index">
				{alphabet.map(alpha => {
					return (
						<AlphaIndex
							key={alpha}
                            alpha={alpha}
                            handleClick={toAlpha}
						/>
					)
				})}
			</div>
		</div>
	)
}

function CitySection(props) {
	const { data = [], title ,setSelectedCity } = props
	return (
		<ul>
			<li data-cate={title} key={title}>
				{title}
			</li>
			{data.map(city => {
				return <CityItem key={city.name} cityname={city.name} setSelectedCity={setSelectedCity}/>
			})}
		</ul>
	)
}

function CityItem(props) {
	const { cityname,setSelectedCity } = props
	return <li onClick={()=>{setSelectedCity(cityname)}}>{cityname}</li>
}

function AlphaIndex(props) {
	const { alpha,handleClick } = props
	return <i onClick={()=>{handleClick(alpha)}}>{alpha}</i>
}

const alphabet = Array.from(new Array(26), (ele, index) => {
	return String.fromCharCode(65 + index)
})


function CityListLoading() {
	return (
		<div className="city-list-loading">
			<div className="loading">
				<Spin tip="Loading..." size="large" />
			</div>
		</div>
	)
}

function CitySelector(props) {
	const {
		show,
		hideCitySelector,
		isLoadingCityData,
		cityData,
        fetchCityData,
        setSelectedCity
	} = props
    const [suggestShowHide, setSuggestShowHide] = useState(false)
    const [searchKey, setSearchKey] = useState('')
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
			<TopLine hide={hideCitySelector} setSearchKey={setSearchKey} setSuggest={setSuggestShowHide} />
			{suggestShowHide && <Suggest setSelectedCity={setSelectedCity} searchKey={searchKey} />}
			{isLoadingCityData && <CityListLoading />}
			{cityData && <CityList cityData={cityData} setSelectedCity={setSelectedCity}/>}
		</div>
	)
}
export default CitySelector
