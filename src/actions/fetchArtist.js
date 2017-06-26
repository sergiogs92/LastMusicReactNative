import artistAction from '../constants/actions/fetchArtist'

export default {
    fetchArtist: () => ({type: artistAction.FETCH_ARTIST}),
    fetchArtistSuccess: (results) => ({type: artistAction.FETCH_ARTIST_SUCCESS, results}),
    fetchArtistError: (error) => ({type: artistAction.FETCH_ARTIST_ERROR, error}),
    searchArtist: (artist) => ({type: artistAction.SEARCH_ARTIST, artist}),
}
