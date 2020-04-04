import React, { useCallback, useMemo, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header'
import actions from '../../actions/query'
import Nav from './nav'
import useTimeClear from '../../utils/useTimeClear'
/* import TrainList from './trainList'
import Footer from './footer' */

import {} from 'antd-mobile'
import './index.less'
function Query(props) {
	const dispatch = props.dispatch
	const { setDate, setHighSpeed, setPrevDisabled, setNextDisabled } = actions
	const { from, to } = props.state.index
	const IndexDepartDate = props.state.index.departDate
	const IndexHighSpeed = props.state.index.highSpeed
	const {
		departDate,
		highSpeed,
		isNextDisabled,
		isPrevDisabled
	} = props.state.query
	const onBack = useCallback(() => {
		props.history.goBack()
	}, [])

	const cbs = useMemo(() => {
		return bindActionCreators(
			{
				setDate,
				setHighSpeed,
				setPrevDisabled,
				setNextDisabled
			},
			dispatch
		)
	}, [])

	useEffect(() => {
		cbs.setDate(IndexDepartDate)
		cbs.setHighSpeed(IndexHighSpeed)
	}, [])
	const prevClick = useCallback(() => {
		const now = useTimeClear()
		useTimeClear(departDate) > now
			? cbs.setDate(useTimeClear(departDate) - 86400000)
			: console.log('limt')
	})
	const nextClick = useCallback(() => {
		const now = useTimeClear()
		useTimeClear(departDate) - now < 30 * 86400 * 1000
			? cbs.setDate(useTimeClear(departDate) + 86400000)
			: console.log('limt')
	})
	return (
		<div className="Query">
			<Header title={`${from} ⇀ ${to}`} onBack={onBack} />
			<div className="container">
				<Nav
					date={departDate}
					prevClick={prevClick}
					nextClick={nextClick}
					isPrevDisabled={isPrevDisabled}
                    isNextDisabled={isNextDisabled}
                    setPrevDisabled={cbs.setPrevDisabled}
                    setNextDisabled={cbs.setNextDisabled}
				/>
			</div>
			{/* <TrainList/>
            <Footer/> */}
		</div>
	)
}
const mapStateToProps = state => ({
	state
})
const mapDispatchToProps = dispatch => ({
	dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(Query)
