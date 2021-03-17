import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';

import { useDispatch, connect } from 'react-redux';
import {
  ADD_TO_CART,
  SET_LIST_ITEMS,
  UPDATE_ITEMS_LIST,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from './store/actions/shopdata';

import { ItemList } from '../data/item-dummy';
import CardView from 'react-native-cardview';

const Items = (props) => {
  const dispatch = useDispatch();

  const [arrayOfDropdown2, setArrayOfDropDown2] = useState([]);

  if (arrayOfDropdown2.length < ItemList.length && !props.state.ItemsList) {
    let arrayOfDropdown = [];
    for (let i = 0; i < ItemList.length; i++) {
      arrayOfDropdown.push({
        base: 0,
        total: 0,
        buttonVar: 1,
        totalForItem: 0,
        added: false,
        removed: true,
        itemDetails: ItemList[i],
      });
    }
    setArrayOfDropDown2(arrayOfDropdown);
    props.addListItems(arrayOfDropdown);
  }

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <CardView
          cardElevation={10}
          cornerRadius={10}
          style={{width: '98%', height: 110}}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 80,
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: '13%',
                  height: '75%',
                  borderColor: 'black',
                  marginTop: 25,
                  marginLeft: '1%',
                }}
                source={itemData.item.itemDetails.image}
              />
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '30%',
                }}>
                <View style={{marginLeft: '10%'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 10,
                      textAlign: 'auto',
                    }}>
                    {itemData.item.itemDetails.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      textAlign: 'auto',
                    }}>
                    ₹{itemData.item.itemDetails.price}/Kg
                  </Text>
                </View>
              </View>
              <View style={{width: '28%'}}>
                <Picker
                  selectedValue={0}
                  selectedValue={props.state.ItemsList[itemData.index].base}
                  key={props.state.ItemsList[itemData.index].base}
                  style={{height: 65, width: '100%'}}
                  testID={itemData.item.title}
                  onValueChange={(itemValue, testID) => {
                    let arrayOfDropdown = props.state.ItemsList;
                    arrayOfDropdown[itemData.index].base = itemValue;
                    arrayOfDropdown[itemData.index].buttonVar = 1;
                    arrayOfDropdown[itemData.index].added = false;
                    arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                    arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;
                    props.updateItemsList(arrayOfDropdown[itemData.index]);
                  }}>
                  <Picker.Item label="Qty" value={0} />
                  <Picker.Item label="10 g" value={10} />
                  <Picker.Item label="50 g" value={50} />
                  <Picker.Item label="100 g" value={100} />
                  <Picker.Item label="250 g" value={250} />
                  <Picker.Item label="500 g" value={500} />
                  <Picker.Item label="1 Kg" value={1000} />
                </Picker>
                <Text style={{marginLeft: '10%', fontWeight: 'bold'}}>
                  ₹ {props.state.ItemsList[itemData.index].totalForItem}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  height: 110,
                  width: '10%',
                  marginLeft: '-3%',
                  alignItems: 'center',
                }}>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FC8019',
                      borderRadius: 14,
                      width: 28,
                      height: 28,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      let arrayOfDropdown = props.state.ItemsList;
                      arrayOfDropdown[itemData.index].buttonVar += 1;
                      arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                      arrayOfDropdown[itemData.index].added = false;
                      arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;
                      props.updateItemsList(arrayOfDropdown[itemData.index]);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 17,
                        textAlign: 'center',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  {props.state.ItemsList[itemData.index].total < 1000 ? (
                    <Text style={{fontSize: 12}}>
                      {props.state.ItemsList[itemData.index].total} g
                    </Text>
                  ) : (
                    <Text style={{fontSize: 12}}>
                      {props.state.ItemsList[itemData.index].total / 1000} Kg
                    </Text>
                  )}
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FC8019',
                      borderRadius: 14,
                      width: 28,
                      height: 28,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      let arrayOfDropdown = props.state.ItemsList;
                      if (arrayOfDropdown[itemData.index].buttonVar === 0) {
                        return alert('error');
                      }
                      arrayOfDropdown[itemData.index].buttonVar -= 1;
                      arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                      arrayOfDropdown[itemData.index].added = false;
                      arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;

                      props.updateItemsList(arrayOfDropdown[itemData.index]);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 17,
                        textAlign: 'center',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 110,
                  width: '15%',
                  marginLeft: '4%',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FC8019',
                    width: '100%',
                    height: 27,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}
                  onPress={async () => {
                    if (props.state.ItemsList[itemData.index].total > 0) {
                      let alreadyAdded = false;
                      for (let i = 0; i < props.state.cartItems.length; i++) {
                        if ( props.state.cartItems[i].itemDetails.id === itemData.item.itemDetails.id ) {
                          alreadyAdded = true;
                        }
                      }
                      if (!alreadyAdded) {
                        let arrayOfDropdown = props.state.ItemsList;
                        arrayOfDropdown[itemData.index].added = true;
                        arrayOfDropdown[itemData.index].removed = false;

                        await props.updateItemsList(
                          arrayOfDropdown[itemData.index],
                        );
                        await props.addToCart(arrayOfDropdown[itemData.index]);
                      } else {
                        let arrayOfDropdown = props.state.ItemsList;
                        arrayOfDropdown[itemData.index].added = true;
                        arrayOfDropdown[itemData.index].removed = false;

                        await props.updateItemsList(
                          arrayOfDropdown[itemData.index],
                        );
                        await props.updateCartItem(
                          arrayOfDropdown[itemData.index],
                        );
                      }
                    } else {
                      alert('please select the quantity you needed');
                    }
                  }}>
                  {props.state.ItemsList[itemData.index].added ? (
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Added
                    </Text>
                  ) : (
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Add
                    </Text>
                  )}
                </TouchableOpacity>
                {props.state.ItemsList[itemData.index].removed ? null : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FC8019',
                      marginTop: '10%',
                      width: '100%',
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={async () => {
                      let arrayOfDropdown = props.state.ItemsList;
                      arrayOfDropdown[itemData.index].added = false;
                      arrayOfDropdown[itemData.index].removed = true;
                      arrayOfDropdown[itemData.index].base = 0;
                      arrayOfDropdown[itemData.index].total = 0;
                      arrayOfDropdown[itemData.index].totalForItem = 0;
                      await props.updateItemsList(
                        arrayOfDropdown[itemData.index],
                      );
                      props.removeFromCart(itemData.item);
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </CardView>
      </View>
    );
  };

  if (props.state.ItemsList) {
    return (
      <View>
        <ScrollView>
          <View>
            <FlatList
              keyExtractor={(item, index) => item.itemDetails.id}
              data={props.state.ItemsList}
              renderItem={renderGridItem}
              numColumns={1}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 30,
    height: 90,
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
    addToCart: (value) =>
      dispatch({
        type: ADD_TO_CART,
        value: value,
      }),
    addListItems: (value) =>
      dispatch({
        type: SET_LIST_ITEMS,
        value: value,
      }),
    updateItemsList: (value) =>
      dispatch({
        type: UPDATE_ITEMS_LIST,
        value: value,
      }),
    removeFromCart: (value) =>
      dispatch({
        type: REMOVE_FROM_CART,
        key: value,
      }),
    updateCartItem: (value) =>
      dispatch({
        type: UPDATE_CART_ITEM,
        value: value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
