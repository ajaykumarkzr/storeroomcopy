import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './yourorders';
import OrderTrack from '../ordertrack';
import { DrawerContent } from '../drawerContent';
import { Icon } from 'native-base';

const Drawer = createDrawerNavigator();

const AddressStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <AddressStack.Navigator navigationOptions={{ headerShown: false }}>
      <AddressStack.Screen
        name="Your Orders"
        options={{
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: '#8fbc8f',
          },
        }}
        component={Orders}
      />
      <AddressStack.Screen
        name="Track"
        options={{
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: '#8fbc8f',
          },
          headerLeft: null
        }}
        component={OrderTrack}
      />
    </AddressStack.Navigator>
  );
};

const YourOrders = (props) => {

    const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login' }),
        ]
      });
      const logout = () => {
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
  const navigatetoyourorders = () => {
      props.navigation.navigate('YourOrders')
  };
  const navigatetoprofile = () => {
    props.navigation.navigate('ProfileDrawer')
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Your Orders"
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
            navigatetoyourorders={() => navigatetoyourorders()}
            navigatetoprofile={() => navigatetoprofile()}
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

AddressStack.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'HOME',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
  };
};

export default YourOrders;
