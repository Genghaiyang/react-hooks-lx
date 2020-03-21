import React, { useCallback, useMemo, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/header'
import Journey from './journey';
import './index.less'
function App(props) {
	const onBack = useCallback(() => {
		props.history.goBack()
		console.log(props.history)
	}, [])
	return (
		<div className="indexPage">
			<Header title="火车票" onBack={onBack} />
			<div className="formBox">
				<Journey />
				{/* <DepartDate />
				<HighSpeed />
				<Submit /> */}
			</div>
		</div>
	)
}
export default App
