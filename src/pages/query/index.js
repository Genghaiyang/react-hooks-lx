import React, { useCallback, useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header'
import actions from '../../actions'
import Nav from './nav'
/* import TrainList from './trainList'
import Footer from './footer' */

import {  } from 'antd-mobile'
import './index.less'
function Query(props) {
    const {from,to,departDate} = props.state.index
    const onBack = useCallback(() => {
		props.history.goBack()
    }, [])
	return (
		<div className="Query">
			<Header title={`${from} ⇀ ${to}`} onBack={onBack} />
            <div className='container'>
            <Nav date={departDate} />
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
