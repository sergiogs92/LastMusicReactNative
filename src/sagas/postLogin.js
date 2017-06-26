import { call, put, takeEvery } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import navigatorActions from '../actions/navigator'
import loginActionTypes from '../constants/actions/postLogin'
import loginActions from '../actions/postLogin'

export function * postLogin (action) {
        try {
            const token = Math.random()
            AsyncStorage.setItem('token', token.toString());
            yield put(loginActions.postLoginSuccess())
            yield put(navigatorActions.navigate('ArtistList'))
        } catch (error) {
            yield put(loginActions.postLoginError(error))
        }
}

export function * watchLogin () {
    yield takeEvery(loginActionTypes.POST_LOGIN, postLogin)
}