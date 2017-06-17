import React, { Component } from 'react'
import {StyleSheet, ActivityIndicator, ListView, TextInput, View, Dimensions} from 'react-native'
import ArtistItem from "./ArtistItem";

class ArtistList extends Component {
    componentWillMount () {
        this.props.fetchArtist()
    }

    onInputChange (value) {
        this.props.searchArtist(value)
    }

    render () {
        const {artistList} = this.props
        if (!artistList) {
            return <ActivityIndicator
                animating
                size='large'
            />
        }

        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Search a top artist'
                    autoCorrect={false}
                    selectionColor={'#0a6ba1'}
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    onChangeText={(value) => {
                        this.onInputChange(value)
                    }}
                />
            <ListView
                dataSource={artistList}
                enableEmptySections={true}
                renderRow={(rowData) => <ArtistItem artist={rowData} />}
            />
            </View>
        )
    }
}

ArtistList.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff'
    },
    textInput: {
        height: 50,
        width: Dimensions.get('window').width - 40,
        backgroundColor: 'transparent',
        borderRadius: 5,
        marginTop: 20,
        marginLeft:20,
        marginRight:20,

        alignItems:'center'
    },
    list: {
        paddingTop: 10
    }
})

export default ArtistList
