import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

export default class ArtistDescription extends Component {
    render() {
        const {image, name} = this.props.artist
        return (
            <View style={styles.artistBox}>
                <Image style={styles.imageType} source={{uri: image[3]['#text']}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>Music is an art form and cultural activity
                        whose medium is sound organized in time. The common elements of music are
                        pitch (which governs melody and harmony), rhythm (and its associated concepts
                        tempo, meter, and articulation), dynamics (loudness and softness), and the sonic
                        qualities of timbre and texture (which are sometimes termed the "color" of a
                        musical sound). Different styles or types of music may emphasize, de-emphasize
                        or omit some of these elements. Music is performed with a vast range of instruments
                        and vocal techniques ranging from singing to rapping; there are solely instrumental
                        pieces, solely vocal pieces (such as songs without instrumental accompaniment) and
                        pieces that combine singing and instruments.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    artistBox:{
        backgroundColor: 'white',
        flexDirection:'column',
        shadowColor: 'black',
    },
    imageType: {
        width: Dimensions.get('window').width,
        height: 300
    },
    info: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        color: '#0a6ba1',
        marginTop: 10
    },
    description: {
        fontSize: 12,
        color: '#295553',
        margin: 10
    }
})