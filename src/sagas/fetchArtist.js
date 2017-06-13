import { call, put, takeEvery } from 'redux-saga/effects'
import artistActionsTypes from '../constants/actions/fetchArtist'

export function * artist () {
}

export function * watchArtist () {
    yield takeEvery(artistActionsTypes.ARTIST, artist)
}