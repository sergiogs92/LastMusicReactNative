import React, {Component} from 'react'
import {TouchableHighlight, Text, StyleSheet, View, ScrollView, ActivityIndicator, StatusBar} from 'react-native'
import {TextField} from 'react-native-material-textfield'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: ''
        }
    }

    onPressLogin() {
        if (this.state.user === '' || this.state.password === '') {
            return false
        }
        this.props.postLogin(this.state.user, this.state.password)
    }

    render() {
        const {error, disabled} = this.props
        return (
            <View style={styles.container}>
                {error &&
                <View style={styles.textError}>
                    <Text>{'Error'}</Text>
                </View>
                }
                <StatusBar backgroundColor="#0a6ba1"/>
                <Text style={styles.title}>{'Last Music'}</Text>
                <View style={styles.textInputView}>
                    <TextField
                        label='User'
                        tintColor='rgb(19,41,76)'
                        onChangeText={(user) => this.setState({user})}
                        value={this.state.user}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.textInputView}>
                    <TextField
                        label='Password'
                        tintColor='rgb(19,41,76)'
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                {disabled
                    ? <ActivityIndicator
                        animating
                        style={styles.activityIndicator}
                        size='large'
                    />
                    : <TouchableHighlight testID='btnLogin' underlayColor='#596981'
                                          onPress={this.onPressLogin.bind(this)} style={styles.btnLogin}>
                        <Text style={styles.btnLoginText}>Log in</Text>
                    </TouchableHighlight>
                }
            </View>
        )
    }
}

Login.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#0a6ba1',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        fontSize: 50,
        color: '#fff',
    },
    textError: {
        padding: 5,
        alignSelf: 'stretch',
        backgroundColor: '#FFCC33'
    },
    textInputView: {
        padding: 5,
        width: 300,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1
    },
    btnLogin: {
        marginTop: 30,
        width: 320,
        height: 40,
        borderColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1
    },
    btnLoginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    activityIndicator: {
        marginTop: 15,
        height: 80
    },
    textInfo: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center'
    }
})

export default Login
