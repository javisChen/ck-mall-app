import React from 'react';
import Home from "./pages/Home/Home.js";
import ProductDetails from "./pages/ProductDetails/ProductDetails.js";
import Cart from "./pages/Cart/Cart.js";
import Mine from "./pages/Mine/Mine.js";
import Category from "./pages/Category/Category.js";
import Login from "./pages/Login/Login.js";
import Settlement from "./pages/Settlement/Settlement.js";
import AddressIndex from "./pages/Address/AddressIndex/AddressIndex.js";
import AddressEdit from "./pages/Address/AddressEdit/AddressEdit.js";
import OrderIndex from "./pages/Order/OrderIndex/OrderIndex.js";
import OrderDetail from "./pages/Order/OrderDetail/OrderDetail.js";
import Payment from "./pages/Payment/Payment.js";
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from "./components/IconWithBadge";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionSpecs} from 'react-navigation-stack';
import {Image} from "react-native";

const HomeIconWithBadge = (props) => {
  console.log('props', props);
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3}/>;
};


const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    if (focused) {
      return <Image style={{width: 20, height: 20}}
                    source={require('./resources/images/navTab/icon-home-selected.png')}/>
    }
    return <Image style={{width: 20, height: 20}} source={require('./resources/images/navTab/icon-home.png')}/>
  } else if (routeName === 'Cart') {
    if (focused) {
      return <Image style={{width: 20, height: 20}}
                    source={require('./resources/images/navTab/icon-cart-selected.png')}/>
    }
    return <Image style={{width: 20, height: 20}} source={require('./resources/images/navTab/icon-cart.png')}/>
  } else if (routeName === 'Mine') {
    if (focused) {
      return <Image style={{width: 20, height: 20}}
                    source={require('./resources/images/navTab/icon-user-selected.png')}/>
    }
    return <Image style={{width: 20, height: 20}} source={require('./resources/images/navTab/icon-user.png')}/>
  } else if (routeName === 'Category') {
    if (focused) {
      return <Image style={{width: 20, height: 20}}
                    source={require('./resources/images/navTab/icon-category-selected.png')}/>
    }
    return <Image style={{width: 20, height: 20}} source={require('./resources/images/navTab/icon-category.png')}/>
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor}/>;
};

const TabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: ({navigation, screenProps}) => {
          return {
            // headerShown: false,
            title: '首页',
          }
        },
      },
      Category: {
        screen: Category,
        navigationOptions: ({navigation}) => ({
          title: `分类`,
        }),
      },
      Cart: {
        screen: Cart,
        navigationOptions: ({navigation}) => ({
          title: `购物车`,
        }),
      },
      Mine: {
        screen: Mine,
        navigationOptions: ({navigation}) => ({
          title: `我的`,
          mode: 'card',
        }),
      },
    },
    {
      initialRouteName: 'Cart',
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) =>
            getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      },
      transitionConfig: () => ({
        //重新设置页面切换动画
        screenInterpolator: 'solidUp',
      }),

    }
);

const rootStack = createStackNavigator(
    {
      Index: {
        screen: TabNavigator,
        navigationOptions: ({navigation, screenProps}) => ({
          headerShown: false,
        })
      },
      // 商品详情
      ProductDetails: {
        screen: ProductDetails,
      },
      // 登录
      Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
          // transitionSpec: {
          //   open: TransitionSpecs.FadeInFromBottomAndroidSpec,
          //   close: TransitionSpecs.FadeOutToBottomAndroidSpec,
          // },
        }),
      },
      // 结算
      Settlement: {
        screen: Settlement,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      // 地址管理-首页
      AddressIndex: {
        screen: AddressIndex,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      // 地址管理-首页
      AddressEdit: {
        screen: AddressEdit,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      // 订单列表
      OrderIndex: {
        screen: OrderIndex,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      // 订单详情
      OrderDetail: {
        screen: OrderDetail,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      // 支付
      Payment: {
        screen: Payment,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
    },
    {
      initialRouteName: 'OrderIndex',
    }
);

const AppContainer = createAppContainer(rootStack);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer
        />
    );
  }
}