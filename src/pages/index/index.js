import React, { useCallback, useMemo, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header'
import Journey from './journey'
import actions from '../../actions'
import CitySelector from './cityselector'
import DepartDate from './date'
import DateSelector from './dateSelector'
import './index.less'
function App(props) {
	const {
		from,
		to,
		isCitySelectorVisible,
		isDateSelectorVisible,
		cityData,
		isLoadingCityData,
		highSpeed,
		departDate,
		currentSelectingLeftCity
	} = props.state.index
	const dispatch = props.dispatch
	const {
		setFrom,
		setTo,
		setCitySelectorVisible,
		setCityFromLeft,
		setCityData,
		setIsLoadingCityData
	} = actions
	const onBack = useCallback(() => {
		//props.history.goBack()
		console.log(exchangeFromTo)
	}, [])

	const cbs = useMemo(() => {
		return bindActionCreators(
			{
				setFrom,
				setTo,
				setCitySelectorVisible,
				setCityFromLeft,
				setCityData,
				setIsLoadingCityData
			},
			dispatch
		)
	}, [])

	const exchangeFromTo = useCallback(() => {
		cbs.setFrom(to)
		cbs.setTo(from)
	})

	const showCitySelector = useCallback(bool => {
		cbs.setCitySelectorVisible(true)
		cbs.setCityFromLeft(bool)
	})

	const fetchCityData = useCallback(() => {
		const cache = JSON.parse(
			localStorage.getItem('city_data_cache') || '{}'
		)
		//console.log(cbs.setIsLoadingCityData)
		if (Date.now() < cache.expires) {
			cbs.setCityData(cache.data)
			return
		}
		cbs.setIsLoadingCityData(true)
		fetch('/rest/cities?_' + Date.now())
			.then(res => res.json())
			.then(cityData => {
				cbs.setCityData(cityData)
				localStorage.setItem(
					'city_data_cache',
					JSON.stringify({
						expires: Date.now() + 60 * 1000,
						data: cityData
					})
				)
				cbs.setIsLoadingCityData(false)
			})
			.catch(() => {
				cbs.setIsLoadingCityData(false)
				alert('数据加载失败，请刷新重试！')
			})
	})

	const setSelectedCity = useCallback(city => {
        currentSelectingLeftCity ? cbs.setFrom(city) : cbs.setTo(city)
        cbs.setCitySelectorVisible(false)
	})

	return (
		<div className="indexPage">
			<Header title="火车票" onBack={onBack} />
			<div className="formBox">
				<Journey
					from={from}
					to={to}
					exchangeFromTo={exchangeFromTo}
					showCitySelector={showCitySelector}
				/>
				<DepartDate />
				{/* <HighSpeed />
				<Submit /> */}
			</div>
			<CitySelector
				show={isCitySelectorVisible}
				cityData={cityData}
				isLoadingCityData={isLoadingCityData}
				hideCitySelector={() => {
					cbs.setCitySelectorVisible(false)
				}}
                fetchCityData={fetchCityData}
                setSelectedCity={setSelectedCity}
			/>
            {/* <DateSelector /> */}
		</div>
	)
}
const mapStateToProps = state => ({
	state
})
const mapDispatchToProps = dispatch => ({
	dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
