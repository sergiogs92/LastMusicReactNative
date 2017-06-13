import { combineReducers } from 'redux'
import navReducer from './navigator'
import artistState from './fetchArtist'

const rootReducer = combineReducers({
    artistState,
    nav: navReducer
})

export default rootReducer
