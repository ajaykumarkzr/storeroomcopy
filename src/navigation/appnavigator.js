import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


// MERCHANT
import MerchantFirst from '../components/merchant/merchantfirst';
import MerchantSecond from '../components/merchant/merchantsecond';


// USER
import Login from '../components/login';
import Signup from '../components/signup';
import Home from '../components/home';
import Forgotpassword from '../components/forgotpassword';
import CategoryListPage from '../components/categorylist';
import MerchantReg from '../components/merchantregister';
import MerchantHome from '../components/merchanthome';
import DrawerComponent from '../components/drawer';
import ItemListPage from '../components/itemlist';
import Notifications from '../components/drawercomponents/notificationdrawer';
import PrivacyPolicyDrawer from '../components/drawercomponents/privacypolicydrawer';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../constants/colors';
import Addressdrawer from '../components/drawercomponents/addressdrawer';
import Cart from '../components/cart';
import DeliveryOption from '../components/deliveryoption';
import ConfirmOrder from '../components/confirmorder';
import UserregisterOtp from '../components/user_register_otp';
import OrderTrack from '../components/ordertrack';
import YourOrders from '../components/drawercomponents/yourordersdrawer';
import ProfileDrawer from '../components/drawercomponents/profiledrawer';
import { Image, TouchableOpacity } from 'react-native';


const Appnavigator = createStackNavigator({
  // MERCHANT
  MerchantSecond: {
    screen: MerchantSecond,
    navigationOptions: {
      headerLeft: () => null
    }
  },
  MerchantHome: {
    screen: MerchantHome,
    navigationOptions: {
      headerLeft: () => null
    },
    navigationOptions: {
      headerShown: false
    }
  },
  MerchantRegistration: {
    screen: MerchantReg,
    navigationOptions: {
      headerShown: false
    }
  },



  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  


  
  // USER
  UserregisterOtp: {
    screen: UserregisterOtp
  },
  DeliveryOption : {
    screen: DeliveryOption
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false
    }
  },
  YourOrders: {
    screen: YourOrders,
    navigationOptions: {
      headerShown: false
    }
  },
  ConfirmOrder: {
    screen: ConfirmOrder
  },
  OrderTrack: {
    screen: OrderTrack
  },
  ProfileDrawer: {
    screen: ProfileDrawer,
    navigationOptions: {
      headerShown: false
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      // headerLeft: () => null
    },
  },
  Cart: {
    screen: Cart
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerShown: false,
      headerLeft: () => null
    }
  },
  AddressDrawer: {
    screen: Addressdrawer,
    navigationOptions: {
      headerShown: false
    }
  },
  PrivacyPolicy: {
    screen: PrivacyPolicyDrawer,
    navigationOptions: {
      headerShown: false
    }
  },
  DrawerComponent: {
    screen: DrawerComponent,
    navigationOptions: {
      headerShown: false,
      headerTitle: 'Drawer Component',
      headerStyle: {
        backgroundColor : Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  },
  Reset: Forgotpassword,
  Category: CategoryListPage,
  Items: ItemListPage,
  },
  {
    mode: 'modal',
    initialRouteName: AsyncStorage.getItem('Token') === 'MERCHANT' ? 'MerchantHome' : (AsyncStorage.getItem('Token') === 'USER') ? 'Home' : 'Login',
    // initialRouteName: user ? 'Home' : 'MerchantHome'
  }
);


export default createAppContainer(Appnavigator);