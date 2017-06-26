import { StackNavigator } from 'react-navigation'
import LoginPage from '../containers/LoginPage'
import ArtistListPage from '../containers/ArtistListPage'
import ArtistDetailPage from '../containers/ArtistDetailPage'

const AppRouteConfigs = {
    Login: {screen: LoginPage},
    ArtistList: {screen: ArtistListPage},
    ArtistDetail: {screen: ArtistDetailPage}
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default AppNavigator