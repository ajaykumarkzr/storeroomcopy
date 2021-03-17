import React, {Component, useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';

//redux
import { connect } from 'react-redux';
import { ADD_SHOP, STORES_WITH_CATEGORY } from './store/actions/shopdata';

import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Accordion,
  Row,
} from 'native-base';

import Ad1 from './ads/ad1';
import { StoreList } from '../data/dummy-data';
import CardView from 'react-native-cardview';
import { TouchableOpacity } from 'react-native-gesture-handler';

// initial store

const Home = (props) => {
  let addressDetails = [
    {
      title: 'Deliver to Sujith U',
      content: 'Udayabhavanam, thrikkadeeri po, palakkad',
    },
  ];

  if (props.state.selectedAddress) {
    let data = props.state.selectedAddress
    addressDetails = [
      {
        title: 'Deliver to' + ' ' + data.name,
        content: data.houseName + ',' + ' ' + data.area +',' + ' ' + data.town,
      },
    ];
  }
  
  const horizontalImages = [
    {image: require('../images/general/all.jpg'), title:"All", category: 'all'}, 
    {image: require('../images/general/grocery.jpg'), title:"Grocery", category: 'grocery'}, 
    {image: require('../images/general/bakery.jpg'), title: "Bakery", category: 'bakery'}, 
    {image: require('../images/general/restaurant.jpg'), title: "Restaurant" , category: 'restaurant'},
    {image: require('../images/general/fish.png'), title: "Fish & Meat", category: 'fish & meat'},
    {image: require('../images/general/apparels.png'), title: "Apparels", category: 'apparels'},
    {image: require('../images/general/gadgets.png'), title: "Gadgets", category: 'gadgets'},
    {image: require('../images/general/fancy.jpg'), title: "Fancy", category: 'fancy'}
  ]

  const [open, setOpen] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchCondition, setSearchCondition] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [categoryStores, setCategoryStores] = useState("all");


  if (searchCondition) {
    setNotFound(false)
    setSearchCondition(false)
    let searchListCopy = []
    if (searchWord.length !== 0) {
      for (let i=0; i<StoreList.length; i++) {
        let Store = StoreList[i]
        if (Store.title.length >= searchWord.length) {
          if (Store.title.slice(0, searchWord.length) === searchWord) {
            searchListCopy.push(Store)
          }
        }
      }

      if (searchListCopy.length === 0) {
        setNotFound(true)
      }
      setSearchList(searchListCopy)
    } else {
      setSearchList([])
      setNotFound(true)
    }
  }

  let storesWithCategory = {all: StoreList}

  if (!props.state.storesWithCategory) {
    let storesWithCategoryCopy = {all: StoreList}
    for (let i=0; i<StoreList.length; i++) {
      for (let j=0; j<StoreList[i].category.length; j++) {
        if (storesWithCategoryCopy[StoreList[i].category[j]]) {
          storesWithCategoryCopy[StoreList[i].category[j]].push(StoreList[i])
        } else {
          storesWithCategoryCopy[StoreList[i].category[j]] = [StoreList[i]]
        }
      }
    }
    props.setShopsWithCategoryfunc(storesWithCategoryCopy)
  } 

  


  const renderAddressAccordian = (data) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 35,
            backgroundColor: '#98e1d6',
            alignItems: 'flex-start',
            flexDirection: 'row',
            paddingLeft: 8,
          }}
          onPress={() => { setOpen(!open)}}
        >
          <Icon style={{opacity: 0.9, fontSize: 20, marginTop: 4, marginLeft: 5}} name="location" />
          <Text style={{color: 'black', marginTop: 5, width: '81%'}}>
            {data.addressDetails[0].title}
          </Text>
          <View style={{justifyContent: 'flex-end'}}>
            {open ? (
              <Icon style={{opacity: 0.9, fontSize: 20, marginTop: 4}} name="chevron-down" />
            ) : (
              <Icon style={{opacity: 0.9, fontSize: 20, marginTop: 4}} name="chevron-up" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHorizontalItem = (itemData) => {
    return (
      <View>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 10, marginTop: 10, justifyContent: "center", alignItems: "center"}}
          onPress={() => {
            setCategoryStores(itemData.item.category)
          }}
        >
          <Image style={{height: 60, width: 60}} source={itemData.item.image} />
          <Text>{itemData.item.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <CardView
          cardElevation={10}
          cornerRadius={10}
          style={{
            width: '80%',
            height: 125,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableHighlight
            style={{width: "100%", height: 162, position: 'relative'}}
            onPress={() => {
              props.addShop(itemData.item);
              props.navigation.navigate('Category');
            }}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  resizeMode: 'stretch',
                  width: 162,
                  height: 162,
                  borderWidth: 4,
                  borderColor: 'white',
                }}
                source={itemData.item.image}
              />
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  padding: 5,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={
                    (styles.title, {fontWeight: 'bold', textAlign: 'auto'})
                  }>
                  {itemData.item.title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </CardView>
      </View>
    );
  };

  return (
    <View style={{height: "100%"}}>
      {/* <LinearGradient colors={['#0d142b', '#840004']} style={{height: "100%"}}> */}
        <View style={{backgroundColor: 'white', height: 55}}>
          <Container>
            <Header searchBar rounded style={{backgroundColor: '#98e1d6'}}>
              <Item style={{height: 45}}>
                <Icon name="ios-search" />
                <Input placeholder="Search" onChangeText={(text) => {
                  setSearchWord(text)
                  setSearchCondition(true)
                }} />
                <Icon name="arrow-forward" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </Container>
        </View>
        <ScrollView>
          <Accordion
            renderHeader={() => renderAddressAccordian({addressDetails})}
            animation={true}
            dataArray={addressDetails}
            expanded={1}
          />
          <View
            style={{
              height: 300,
              marginTop: -48,
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <CardView
              cardElevation={10}
              style={{height: 200, width: '98%', alignItems: 'center'}}>
              <Ad1 />
            </CardView>
          </View>
          <View style={{height: 100, marginTop: -38}}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={horizontalImages}
                  renderItem={renderHorizontalItem}
                  numColumns={horizontalImages.length}
                />
              </ScrollView>
            </View>
            <View style={{width: "100%", alignItems: "center"}}>
              <Image style={{width: "100%", height: 90}} source={require('../images/storesheet.png')} />
            </View>
          <View>
            {notFound && searchWord.length !== 0 ? 
            <View style={{alignItems: "center"}}>
              <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>NOT FOUND!</Text>
            </View> : 
            <View>
              {searchList.length === 0 ? (
                <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.state.storesWithCategory ? props.state.storesWithCategory[categoryStores] : storesWithCategory[categoryStores]}
                renderItem={renderGridItem}
                numColumns={2}
              />
              ) : (
                <FlatList
                keyExtractor={(item, index) => item.id}
                data={searchList}
                renderItem={renderGridItem}
                numColumns={2}
              />
              )}
            </View>}
            
            <View style={{height: 10}}></View>
          </View>
        </ScrollView>
      {/* </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 20,
    marginBottom: 2,
    height: "100%",
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShop: (value) => dispatch({
        type: ADD_SHOP,
        value: value,
      }),
    setShopsWithCategoryfunc: (value) => dispatch({
      type: STORES_WITH_CATEGORY,
      value: value
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
