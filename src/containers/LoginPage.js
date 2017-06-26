import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import loginActions from '../actions/postLogin'
import Login from '../components/Login'

export function mapStateToProps (state) {
    return {...state.loginState}
}

export function mapDispatchToProps (dispatch) {
    return bindActionCreators(loginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
