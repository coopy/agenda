import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Application from './components/application'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render((
  <Provider store={store}>
    <Application/>
  </Provider>
), document.getElementById('app'))
