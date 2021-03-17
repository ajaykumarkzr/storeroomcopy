import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { StackActions, NavigationActions } from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerContent} from '../drawerContent';

import PrivacyPolicy from './privacypolicy';

const Drawer = createDrawerNavigator();

const PrivacyPolicyStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <PrivacyPolicyStack.Navigator navigationOptions={{headerShown: false}}>
      <PrivacyPolicyStack.Screen
        name="Privacy Policy"
        options={{
          headerTitleStyle: {alignSelf: 'center'},
          headerStyle: {
            backgroundColor: '#8fbc8f',
          },
        }}
        component={PrivacyPolicy}
      />
    </PrivacyPolicyStack.Navigator>
  );
};

const PrivacyPolicyDrawer = (props) => {
  
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
        initialRouteName="Privacy Policy"
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
          name="Privacy Policy"
          options={{
            drawerLabel: 'Privacy Policy',
          }}
          component={HomeStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

PrivacyPolicyStack.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'HOME',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
  };
};

export default PrivacyPolicyDrawer;
