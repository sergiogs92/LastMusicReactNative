import { fork } from 'redux-saga/effects'
import * as fetchArtistSaga from './fetchArtist'

export default function * root () {
    yield [
        fork(fetchArtistSaga.watchArtist)
    ]
}
