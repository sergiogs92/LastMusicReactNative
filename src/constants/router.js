import { StackNavigator } from 'react-navigation'
import ArtistListPage from '../containers/ArtistListPage'
import ArtistDetailPage from  '../containers/ArtistDetailPage'

const AppRouteConfigs = {
    ArtistList: {screen: ArtistListPage},
    ArtistDetail: {screen: ArtistDetailPage}
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default AppNavigator