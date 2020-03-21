import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import HeaderBar from '../component/header'
import SettingMenu from '../component/settingMenu'
import MusicPlayer from '../component/footer'
import Recommend from '../pages/recommend'
class RouteConfig extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMenuShow:false
        }
    }
    closeMenu = () =>{
        this.setState({ isMenuShow: false })
    }
    showMenu = () =>{
        this.setState({ isMenuShow: true })
    }
	render() {
		return (
			<HashRouter>
				<Redirect from="/" to="/recommend" exact />
				{/* <Route component={HeaderBar} /> */}
                <HeaderBar showMenu={this.showMenu}/>
				<div id="container">
					<Switch>
						<Route path="/recommend" exact component={Recommend} />
						{/* <Route path="/production" exact component={Production} /> */}
						{/* <Redirect to="/" /> */}
					</Switch>
				</div>
                {/* <Route component={SettingMenu} /> */}
                <SettingMenu show={this.state.isMenuShow} closeMenu={this.closeMenu}/>
                <MusicPlayer/>
			</HashRouter>
		)
	}
}
export default RouteConfig
