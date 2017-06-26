import loginAction from '../constants/actions/postLogin'

export default {
    postLogin: (user, password) => ({type: loginAction.POST_LOGIN, user, password}),
    postLoginSuccess: () => ({type: loginAction.POST_LOGIN_SUCCESS}),
    postLoginError: (error) => ({type: loginAction.POST_LOGIN_ERROR, error})
}
