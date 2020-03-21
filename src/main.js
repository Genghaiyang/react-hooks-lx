import React from 'react'
import ReactDOM from 'react-dom'
/* import {Provider} from 'react-redux'
import store from './store/store'*/
import { AppContainer } from 'react-hot-loader'
import Route  from './router/route' 
import './index.less'
const render = Component =>{
        
    ReactDOM.render(
    // <Provider store={store}>
      <AppContainer>
          <Component/>
      </AppContainer>,
    // </Provider>,
    document.getElementById('app'))

}
render(Route)



if (module.hot) {
    module.hot.accept('./router/route', () => {
        render(Route);
    })
}













