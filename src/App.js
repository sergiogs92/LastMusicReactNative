import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './constants/router'

class App extends Component {
    render () {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}

export default App