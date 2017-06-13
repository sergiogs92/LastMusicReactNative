import { StackNavigator } from 'react-navigation'
import ArtistListPage from '../containers/ArtistListPage'


const AppRouteConfigs = {
    ArtistList: {screen: ArtistListPage},
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default AppNavigator