import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppPage from './AppPage'

const store = configureStore()

class Router extends Component {
    render () {
        return (
            <Provider store={store}>
                <AppPage />
            </Provider>
        )
    }
}

export default Router
