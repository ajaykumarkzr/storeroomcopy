import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DrawerContent } from './drawerContent';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';


import Home from './home';
import Notifications from './drawercomponents/notificationdrawer';
import CategoryListPage from './categorylist';
import ItemListPage from './itemlist';
import Cart from './cart';
import ConfirmOrder from './confirmorder';
import DeliveryOption from './deliveryoption';
import OrderTrack from './ordertrack';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator navigationOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="STORE ROOM"
        options={{
          headerTitleStyle: { marginLeft: "21.5%" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="ios-menu" style={{ marginLeft: 10, opacity: 0.8 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Icon name="cart" style={{ marginRight: 15, opacity: 0.8 }} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#98e1d6',
            height: 50,
          },
        }}
        component={Home}
      />
      <HomeStack.Screen
        name="Category"
        options={{
          headerStyle: {
            backgroundColor: '#FC8019',
          },
        }}
        component={CategoryListPage}
      />
      <HomeStack.Screen
        name="Items"
        options={{
          // navigatetodeliveryopitons: () => {props.navigation.navigate(DeliveryOptions)},
          headerStyle: {
            backgroundColor: '#FC8019',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart', { test: 1 });
              }}>
              <Icon name="cart" style={{ marginRight: 15, opacity: 0.8 }} />
            </TouchableOpacity>
          ),
        }}
        component={ItemListPage}
      />
      <HomeStack.Screen
        name="Cart"
        options={{
          headerStyle: {
            backgroundColor: '#FC8019',
          },
        }}
        component={Cart}
      />
      <HomeStack.Screen
        name="Select Delivery Option"
        options={{
          // navigatetodeliveryopitons: () => {props.navigation.navigate(DeliveryOptions)},
          headerStyle: {
            backgroundColor: '#FC8019',
          }
        }}
        component={DeliveryOption}
      />
      <HomeStack.Screen 
        name="Order Summary"
        options={{
          headerStyle: {
            backgroundColor: '#FC8019'
          }
        }}
        component={ConfirmOrder}
      />
      <HomeStack.Screen 
        name="Order Track"
        options={{
          headerStyle: {
            backgroundColor: '#FC8019',
          },
          headerLeft: null
        }}
        component={OrderTrack}
      />
    </HomeStack.Navigator>
  );
};

const DrawerComponent = (props) => {
  //   if (AsyncStorage.getItem("Token") !== "USER") {
  //     props.navigation.navigate({routeName: 'Login'})
  // }

  // props.navigation.reset()

  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ]
  });

  const storeToken = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      console.log(e)
    }
  };

  const logout = () => {
    let storeToken = async (value) => {
      try {
        await AsyncStorage.setItem('@token', value)
      } catch (e) {
        console.log(e)
      }
    }
    storeToken('nothing');
    props.navigation.dispatch(resetAction);
  };
  const navigatetonotifications = () => {
    props.navigation.navigate('Notifications');
  };
  const navigatetohome = () => {
    props.navigation.navigate('DrawerComponent');
  };
  const navigatetoaddress = () => {
    props.navigation.navigate('AddressDrawer');
  };
  const navigatetoprivacypolicy = () => {
    props.navigation.navigate('PrivacyPolicy');
  };
  const navigatetodeliveryoptions = () => {
    props.navigation.navigate('Select Delivery Option')
  };
  const navigatetoyourorders = () => {
    props.navigation.navigate('YourOrders')
  };
  const navigatetoprofile = () => {
    props.navigation.navigate('ProfileDrawer')
  };
  

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="STORE ROOM"
        drawerContentOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => (
          <DrawerContent
            {...props}
            logout={() => logout()}
            navigatetohome={() => navigatetohome()}
            navigatetonotifications={() => navigatetonotifications()}
            navigatetoaddress={() => navigatetoaddress()}
            navigatetoprivacypolicy={() => navigatetoprivacypolicy()}
            navigatetodeliveryoptions={() => navigatetodeliveryoptions()}
            navigatetoyourorders={() => navigatetoyourorders()}
            navigatetoprofile={() => navigatetoprofile()}
            drawerComp={true}
          />
        )}>
        <Drawer.Screen
          name="HOME"
          options={{
            drawerLabel: 'HOME',
          }}
          component={HomeStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

HomeStack.navigationOptions = (navigationData) => {
  //   const categoryId = navigationData.navigation.getParam('categoryId');
  //   const selectedCategory = StoreList.find(cat => cat.id === categoryId);
  return {
    headerTitle: 'HOME',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
  };
};

export default DrawerComponent;
