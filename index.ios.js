import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Router from './src/Router'

class LastMusic extends Component {
    render () {
        return <Router />
    }
}

AppRegistry.registerComponent('lastMusic', () => LastMusic)

export default LastMusic
