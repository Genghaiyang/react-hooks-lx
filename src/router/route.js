import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from '../pages/index'
function RouteConfig() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" exact component={App} />
				{/* <Route path="/production" exact component={Production} />
            <Route path="/helpcenter" component={Helpcenter} />
            <Route path="/record" component={Record} /> */}
				<Redirect to="/" />
			</Switch>
		</HashRouter>
	)
}
export default RouteConfig
