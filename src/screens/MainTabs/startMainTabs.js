import {createBottomTabNavigator} from 'react-navigation';

import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';


const MainTabs = createBottomTabNavigator(
    {
        FindPlace: {
            screen: FindPlace,
            navigationOptions: {
                title: "FindPlace"
            },
        },
        SharePlace: {
            screen: SharePlace,
            navigationOptions: {
                title: "SharePlace"
            },
        }
    });

export default MainTabs;