import { NavigationActions } from 'react-navigation'
import AppNavigator from '../constants/router'
import navigatorAction from '../constants/actions/navigator'

export function initialState () {
    return AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))
}

function navigate (state, {screen}) {
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: screen}),
        state
    )
}

export default function (state = initialState(), action) {
    switch (action.type) {
        case navigatorAction.NAVIGATE:
            return navigate(state, action)
        default:
            const nextState = AppNavigator.router.getStateForAction(action, state)
            return nextState || state
    }
}
