// import React from 'react';
// import {
//   Input,
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   Button,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import { StoreList } from '../data/dummy-data';
// import Colors from '../constants/colors';

// export default MerchantHome = (props) => {

//   const logOut = () => {
//     let storeToken = async (value) => {
//       try {
//         await AsyncStorage.setItem('@token', value)
//       } catch (e) {
//         console.log(e)
//       }
//     }
//     storeToken('nothing');
//     props.navigation.replace({routeName: 'Login'});
//   };
//   return (
//     <View>
//       <Text>
//         Merchant Home
//         <Button title="Log out" onPress={logOut} />
//       </Text>
//     </View>
//   );
// };

// MerchantHome.navigationOptions = (navigationData) => {
//   //   const categoryId = navigationData.navigation.getParam('categoryId');
//   //   const selectedCategory = StoreList.find(cat => cat.id === categoryId);
//   return {
//     headerTitle: 'HOME',
//     headerStyle: {
//       backgroundColor: Colors.primaryColor,
//     },
//     headerTintColor: 'white',
//   };
// };


import React from 'react';
import { View, Text } from 'react-native'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';

import { DrawerContent } from './merchant/drawercontent';
import MerchantFirst from './merchant/merchantfirst';
import MerchantSecond from './merchant/merchantsecond';


const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();




const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator navigationOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Merchant First"
        options={{
          headerTitleStyle: { marginLeft: "21.5%" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="ios-menu" style={{ marginLeft: 10, opacity: 0.8 }} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#98e1d6',
            height: 50,
          },
        }}
        component={MerchantFirst}
      />
      <HomeStack.Screen
        name="Merchant Second"
        options={{
          headerTitleStyle: { marginLeft: "21.5%" },
          headerStyle: {
            backgroundColor: '#FC8019',
          },
        }}
        component={MerchantSecond}
      />
    </HomeStack.Navigator>
  );
};


const MerchantHome = (props) => {

  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ]
  });


  const logOut = () => {
    let storeToken = async (value) => {
      try {
        await AsyncStorage.setItem('@token', value)
      } catch (e) {
        console.log(e)
      }
    }
    storeToken('nothing');
    props.navigation.replace({ routeName: 'Login' });
  };

  const navigateToFirstPage = () => {
    props.navigation.navigate('MerchantHome')
  };

  const navigateToSecondPage = () => {
    props.navigation.navigate('MerchantSecond')
  };

  return(
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Merchant First"
        drawerContentOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => (
          <DrawerContent
            {...props}
            logOut={() => logOut()}
            ak={true}
            navigateToSecondPage={() => navigateToSecondPage()}
            navigateToFirstPage={() => navigateToFirstPage()}
            // navigatetoaddress={() => navigatetoaddress()}
            // navigatetoprivacypolicy={() => navigatetoprivacypolicy()}
            // navigatetodeliveryoptions={() => navigatetodeliveryoptions()}
            // navigatetoyourorders={() => navigatetoyourorders()}
            // navigatetoprofile={() => navigatetoprofile()}
            drawerComp={true}
          />
        )}>
        <Drawer.Screen
          name="Merchant Second"
          options={{
            drawerLabel: 'HOME',
          }}
          component={HomeStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MerchantHome;