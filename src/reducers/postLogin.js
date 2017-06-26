import loginAction from '../constants/actions/postLogin'

function initialState () {
    return {
        user: '',
        password: '',
        error: null,
        disabled: false
    }
}

function postLogin (state) {
    return {
        ...state,
        error: null,
        disabled: true
    }
}

function postLoginSuccess (state) {
    return {
        ...state,
        user: '',
        password: '',
        error: null,
        disabled: false
    }
}

function postLoginError (state, {error}) {
    return {
        ...state,
        user: '',
        password: '',
        error: error,
        disabled: false
    }
}

export default function (state = initialState(), action) {
    switch (action.type) {
        case loginAction.POST_LOGIN:
            return postLogin(state, action)
        case loginAction.POST_LOGIN_SUCCESS:
            return postLoginSuccess(state, action)
        case loginAction.POST_LOGIN_ERROR:
            return postLoginError(state, action)
        default:
            return state
    }
}
