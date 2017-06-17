import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Artist extends Component {
    render() {
        const {artist} = this.props

        return (
            <View style={styles.artistBox}>
                <Image style={styles.imageType} source={{uri: artist.image[3]['#text']}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{artist.name}</Text>
                    <View style = {styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-heart-outline" size={30} color="gray" />
                            <Text style={styles.count}>200</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                            <Text style={styles.count}>140</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBox:{
        margin: 5,
        backgroundColor: 'white',
        flexDirection:'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset:{
            height: 1,
            width: -2
        },
        elevation: 2
    },
    imageType: {
        width: 150,
        height: 150,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#0a6ba1'
    },
    row: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 15
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    count: {
        color: 'gray'
    }
});