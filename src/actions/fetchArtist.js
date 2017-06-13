import artistAction from '../constants/actions/fetchArtist'

export default {
    artist: () => ({type: artistAction.ARTIST}),
    artistSuccess: (results) => ({type: artistAction.ARTIST_SUCCESS, results}),
    artistError: (error) => ({type: artistAction.ARTIST_ERROR, error})
}
