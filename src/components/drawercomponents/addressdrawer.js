import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from '../drawerContent';

import Address from './address';

const Drawer = createDrawerNavigator();

const AddressStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <AddressStack.Navigator navigationOptions={{headerShown: false}}>
      <AddressStack.Screen
        name="Address"
        options={{
          headerTitleStyle: {alignSelf: 'center'},
          headerStyle: {
            backgroundColor: '#8fbc8f',
          },
        }}
        component={Address}
      />
    </AddressStack.Navigator>
  );
};

const AddressDrawer = (props) => {

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
        initialRouteName="Address"
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

export default AddressDrawer;
