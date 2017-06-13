import {connect} from 'react-redux'

import App from './App'

export function mapStateToProps (state) {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(App)