import { call, put, takeEvery } from 'redux-saga/effects'
import artistActionsTypes from '../constants/actions/fetchArtist'
import artistActions from '../actions/fetchArtist'
import artistService from '../services/fetchArtist'

export function * fetchArtist () {
    try {
        const results = yield call(artistService)
        yield put(artistActions.fetchArtistSuccess(results.topartists.artist))
    } catch (error) {
        yield put(artistActions.fetchArtistError(error))
    }
}

export function * watchArtist () {
    yield takeEvery(artistActionsTypes.FETCH_ARTIST, fetchArtist)
}