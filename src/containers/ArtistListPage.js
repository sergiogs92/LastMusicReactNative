import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import artistActions from '../actions/fetchArtist'
import ArtistList from '../components/ArtistList'

export function mapStateToProps (state) {
    return {...state.artistState}
}

export function mapDispatchToProps (dispatch) {
    return bindActionCreators(artistActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
