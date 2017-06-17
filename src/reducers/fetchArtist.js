import artistAction from '../constants/actions/fetchArtist'
import {ListView} from "react-native";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
let artistResult = []

function initialState () {
    return {
        artistList: null,
        error: null
    }
}

function fetchArtist (state) {
    return {
        ...state,
        artistList: null,
        error: null
    }
}

function fetchArtistSuccess (state, {results}) {
    artistResult = results
    return {
        ...state,
        artistList: ds.cloneWithRows(artistResult),
        error: null
    }
}

function fetchArtistError (state, {error}) {
    return {
        ...state,
        artistList: null,
        error: error
    }
}


function searchArtist (state, {artist}) {
    let results = artistResult.filter(item => {
        if (item.hasOwnProperty('name') && item.name.includes(artist)) return item
    })

    return {
        ...state,
        artistList: ds.cloneWithRows(results),
        error: null
    }
}

export default function (state = initialState(), action) {
    switch (action.type) {
        case artistAction.FETCH_ARTIST:
            return fetchArtist(state, action)
        case artistAction.FETCH_ARTIST_SUCCESS:
            return fetchArtistSuccess(state, action)
        case artistAction.FETCH_ARTIST_ERROR:
            return fetchArtistError(state, action)
        case artistAction.SEARCH_ARTIST:
            return searchArtist(state, action)
        default:
            return state
    }
}
