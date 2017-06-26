import { fork } from 'redux-saga/effects'
import * as fetchArtistSaga from './fetchArtist'
import * as postLoginSaga from './postLogin'

export default function * root () {
    yield [
        fork(postLoginSaga.watchLogin),
        fork(fetchArtistSaga.watchArtist)
    ]
}
