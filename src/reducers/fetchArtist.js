import artistAction from '../constants/actions/fetchArtist'

function initialState () {
    return {
        artist: null,
        error: null
    }
}

function artist (state) {
    return {
        ...state,
        artist: null,
        error: null
    }
}

function artistSuccess (state, {results}) {
    return {
        ...state,
        artist: results,
        error: null
    }
}

function artistError (state, {error}) {
    return {
        ...state,
        artist: null,
        error: error
    }
}

export default function (state = initialState(), action) {
    switch (action.type) {
        case artistAction.ARTIST:
            return artist(state, action)
        case artistAction.ARTIST_SUCCESS:
            return artistSuccess(state, action)
        case artistAction.ARTIST_ERROR:
            return artistError(state, action)
        default:
            return state
    }
}
