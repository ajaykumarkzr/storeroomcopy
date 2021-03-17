import React from 'react';
import {
  Input,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableHighlight,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {CategoryList} from '../data/category-dummy';
import {useSelector, connect} from 'react-redux';

import Colors from '../constants/colors';
import CardView from 'react-native-cardview';
import { Icon } from 'native-base';

//   export default Items = props => {
const CategoryListPage = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <CardView
          cardElevation={5}
          cornerRadius={10}
          // style={{width: 120, height: 130, alignContent: "center", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: 5}}
          style={{
            width: '98%',
            height: 130,
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom: 5,
          }}>
          {/* <TouchableOpacity onPress={shopSelectionHandler}> */}

          <View>
            <Text
              style={(styles.title, {fontWeight: 'bold', textAlign: 'center'})}>
              {itemData.item.title}
            </Text>
          </View>
          <TouchableHighlight
            style={{width: 90, height: 90}}
            onPress={() => {
              // console.log(itemData.item)
              props.navigation.navigate('Items');
              // dispatch(StoreSelect({shopName: itemData.item.title, id: itemData.item.id}))
              // props.navigation.navigate('Items')
            }}>
            <View style={{alignItems: 'center', alignContent: 'center'}}>
              <Image
                style={{
                  resizeMode: 'stretch',
                  display: 'flex',
                  width: 90,
                  height: 90,
                  borderWidth: 4,
                  borderColor: 'white',
                }}
                source={itemData.item.image}
              />
            </View>
          </TouchableHighlight>
        </CardView>
      </View>
    );
  };

  const img = require('../data/copyright.png');

  return (
    <View>
      <ScrollView>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <View style={{height: 200, alignItems: "center", justifyContent: "center"}}>
          <Image
                style={{
                  resizeMode: 'stretch',
                  width: "100%",
                  height: 190,
                }}
                source={props.state.selectedShop.image}
              />
              <View
                style={{
                  position: 'absolute',
                  padding: 5,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontWeight: 'bold', textAlign: 'auto', color: 'white', fontSize: 20}}>
                  {props.state.selectedShop.title}
                </Text>
              </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
            <View stle={{justifyContent: "center", alignItems: "center"}}>
              <Icon style={{fontSize: 19}} name="location" />
            </View>
            <Text style={{color: 'black', fontFamily: "VarelaRound-Regular", fontSize: 15}}>{props.state.selectedShop.location}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
            <View stle={{justifyContent: "center", alignItems: "center"}}>
              <Icon style={{fontSize: 19}} type='Entypo' name="old-mobile" />
            </View>
            <Text style={{color: 'black', fontFamily: "VarelaRound-Regular", fontSize: 15}}>{props.state.selectedShop.phone}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "flex-start", marginLeft: 4}}>
            <View stle={{justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: 'black', fontFamily: "VarelaRound-Regular", fontSize: 15}}>Category: </Text>
            </View>
            <Text style={{color: 'black', fontFamily: "VarelaRound-Regular", fontSize: 15}}>{props.state.selectedShop.category}</Text>
          </View>
          
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={CategoryList}
          renderItem={renderGridItem}
          numColumns={3}
        />
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{width: 50, marginTop: 30, marginRight: 20}}>
          <TouchableOpacity onPress={() => alert('phone')}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../icons/call.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 25,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps, null)(CategoryListPage);

//   Items.navigationOptions = navigationData => {
//       const categoryId = navigationData.navigation.getParam('categoryId');
//       const selectedCategory = StoreList.find(cat => cat.id === categoryId);
//       return {
//           headerTitle: selectedCategory.title,
//           headerStyle: {
//               backgroundColor: Colors.primaryColor
//           },
//           headerTintColor: 'white'
//       }
//   };
