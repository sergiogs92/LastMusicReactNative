import React, { Component } from 'react'
import {Text, View} from 'react-native'

class ArtistList extends Component {

    render () {
        return (
            <View>
                <Text>Artist List</Text>
            </View>
        )
    }
}

ArtistList.navigationOptions = {
    header: null
}

export default ArtistList
