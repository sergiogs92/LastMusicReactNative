import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native'

import ArtistDescription from "./ArtistDescription"

export default class ArtistDetail extends Component {

    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#0a6ba1"/>
                <ArtistDescription artist = {params.artist}/>
            </View>
        )
    }
}

ArtistDetail.navigationOptions = ({ navigation }) => ({
    title: `Detail: ${navigation.state.params.artist.name}`
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})