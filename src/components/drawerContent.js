import React from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {Content, Header, Body, Icon} from 'native-base';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const img = require('../data/copyright.png');

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <Header style={{backgroundColor: '#98e1d6', height: 110, width: "100%"}}>
        <Body style={{height: "100%", width: "100%"}}>
          <DrawerItem 
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigatetoprofile();
            }}
            label={() => (
              <View style={{height: "100%", width: "100%"}}>
                <View  style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <View>
                    <Icon style={{fontSize: 45}} type='MaterialCommunityIcons' name='account' />
                  </View>
                  <View style={{width: "70%"}}>
                    <Text style={{fontFamily: 'VarelaRound-Regular', marginLeft: 6}}>Sujith</Text>
                    <Text style={{fontFamily: 'VarelaRound-Regular', marginLeft: 6}}>+918592922233</Text>
                  </View>
                  <View style={{width: "15%"}}>
                    <Icon style={{fontSize: 20}} type='Entypo' name='chevron-right' />
                  </View>
                </View>
                
              </View>
            )}
          />
          {/* <Image
            style={{width: 280.5, height: 70, marginLeft: -11}}
            source={require('../images/logo1.jpg')}
            onPress={() => {
              props.navigation.navigatetoprofile();
            }}
          /> */}
        </Body>
      </Header>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 23}} name='home' />
          )}
          label={() => (
            <View>
              <Text
                style={{fontFamily: 'VarelaRound-Regular', marginLeft: -20}}>
                HOME
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigatetohome();
            if (props.drawerComp){
              props.navigation.navigate('STORE ROOM');
            }
            
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 23}} type='AntDesign' name='notification' />
          )}
          label={() => (
            <View>
              <Text
                style={{fontFamily: 'VarelaRound-Regular', marginLeft: -20}}>
                NOTIFICATIONS
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigatetonotifications();
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 23}} type='FontAwesome' name='address-card' />
          )}
          label={() => (
            <View>
              <Text
                style={{fontFamily: 'VarelaRound-Regular', marginLeft: -20}}>
                ADDRESS
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigatetoaddress();
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 23}} type='AntDesign' name='shoppingcart' />
          )}
          label={() => (
            <View>
              <Text
                style={{fontFamily: 'VarelaRound-Regular', marginLeft: -20}}>
                YOUR ORDERS
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigatetoyourorders();
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 21}} type='AntDesign' name='warning' />
          )}
          label={() => (
            <View>
              <Text
                style={{fontFamily: 'VarelaRound-Regular', marginLeft: -20}}>
                PRIVACY POLICY
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigatetoprivacypolicy();
          }}
        />
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          icon={() => {}}
          label={() => (
            <View>
              <Text
                style={{fontWeight: 'bold', marginLeft: '52%', fontSize: 7}}>
                SAV_Solutions.org
              </Text>
            </View>
          )}
        />
        <DrawerItem
          icon={() => (
            <Icon style={{fontSize: 23}} type='MaterialCommunityIcons' name='logout' />
          )}
          label={() => (
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: -20}}>LOG OUT</Text>
            </View>
          )}
          onPress={() => {
            props.logout();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
