import navigatorAction from '../constants/actions/navigator'

export default {
    navigate: (screen) => ({type: navigatorAction.NAVIGATE, screen})
}
