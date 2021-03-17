import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import CardView from 'react-native-cardview';

// navigation screen
import DeliveryOption from './deliveryoption';

// redux
import { REMOVE_FROM_CART, EDIT_CART_ITEM, CLEAR_CART } from './store/actions/shopdata';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';

const Cart = (props) => {

  let gtCopy = 0

  if (props.state.grandTotal) {
    let gt = (props.state.grandTotal).toString()
    if (gt.indexOf('.')) {
      let key = gt.indexOf('.')+4
      gtCopy = gt.slice(0, key)
    } else {
      gtCopy = props.state.grandTotal
    }
  }



  const renderGridItem = (itemData) => {
    return (
      <View style={{width: '100%', marginTop: '2%', flexDirection: 'row'}}>
        <CardView
          cardElevation={10}
          cornerRadius={10}
          style={{width: '98%', height: 110, paddingLeft: 15}}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 80,
              }}>
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
                  selectedValue={props.state.cartItems[itemData.index].base}
                  key={props.state.cartItems[itemData.index].base}
                  style={{height: 65, width: '100%'}}
                  testID={itemData.item.title}
                  onValueChange={(itemValue, testID) => {
                    let arrayOfDropdown = props.state.cartItems;
                    arrayOfDropdown[itemData.index].base = itemValue;
                    arrayOfDropdown[itemData.index].buttonVar = 1;
                    arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                    arrayOfDropdown[itemData.index].previousTotalForItem = arrayOfDropdown[itemData.index].totalForItem
                    arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;
                    props.editCartItem(arrayOfDropdown[itemData.index]);
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
                  ₹ {props.state.cartItems[itemData.index].totalForItem}
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
                      let arrayOfDropdown = props.state.cartItems;
                      arrayOfDropdown[itemData.index].buttonVar += 1;
                      arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                      arrayOfDropdown[itemData.index].previousTotalForItem = arrayOfDropdown[itemData.index].totalForItem
                      arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;
                      props.editCartItem(arrayOfDropdown[itemData.index]);
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
                  {props.state.cartItems[itemData.index].total < 1000 ? (
                    <Text style={{fontSize: 12}}>
                      {props.state.cartItems[itemData.index].total} g
                    </Text>
                  ) : (
                    <Text style={{fontSize: 12}}>
                      {props.state.cartItems[itemData.index].total / 1000} Kg
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
                      let arrayOfDropdown = props.state.cartItems;
                      if (arrayOfDropdown[itemData.index].buttonVar === 1) {
                        return props.removeFromCart(itemData.item)
                      }
                      arrayOfDropdown[itemData.index].buttonVar -= 1;
                      arrayOfDropdown[itemData.index].total = arrayOfDropdown[itemData.index].base*arrayOfDropdown[itemData.index].buttonVar;
                      arrayOfDropdown[itemData.index].previousTotalForItem = arrayOfDropdown[itemData.index].totalForItem
                      arrayOfDropdown[itemData.index].totalForItem = (arrayOfDropdown[itemData.index].total*itemData.item.itemDetails.price)/1000;

                      props.editCartItem(arrayOfDropdown[itemData.index]);
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
                {props.state.cartItems[itemData.index].removed ? null : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FC8019',
                      marginTop: '10%',
                      width: '100%',
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginLeft: 40,
                    }}
                    onPress={async () => {
                      props.removeFromCart(itemData.item);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
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

  return (
    <View>
      <View>
        <ScrollView style={{height: "90%"}}>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: '6%',
                  marginTop: '2%',
                }}>
                Delivery address
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  alignContent: 'center',
                  marginTop: '2%',
                }}>
                <CardView
                  cardElevation={10}
                  cornerRadius={10}
                  style={{
                    width: '90%',
                    height: 165,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>address</Text>
                </CardView>
                <View style={{width: '95%', marginTop: 15}}>
                  {props.state.cartItems ? (<View>
                    {props.state.cartItems.length === 0 ? <View style={{alignItems: "center"}}><Text>YOUR CART IS EMPTY</Text></View> :
                    <FlatList
                    keyExtractor={(item, index) => item.itemDetails.id}
                    data={props.state.cartItems}
                    renderItem={renderGridItem}
                    numColumns={1}
                  />}
                    
                    </View>
                  ) : (
                    <View style={{alignItems: "center"}}><Text>YOUR CART IS EMPTY</Text></View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{backgroundColor: '#FC8019', height: "10%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <TouchableOpacity onPress={() => {
            if (props.state.cartItems) {
              props.clearCart()
            } else {
              alert('CART IS EMPTY')
            }
          }
          } style={{
            backgroundColor: 'red',
            height: "100%",
            flexDirection: 'row',
            width: "30%",
            justifyContent: 'space-evenly',
          }}>
            <View style={{justifyContent: "center", alignContent: "center"}}>
              <Text style={{color: "white", justifyContent: "center", alignContent: "center", alignItems: "center", fontWeight: "bold"}}>Clear Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: "40%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {props.state.grandTotal ? (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Total Price ₹ {gtCopy}{' '}
                </Text>
              ) : (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Total price ₹ 0{' '}
                </Text>
              )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FC8019',
              height: "100%",
              width: "30%",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => {
              if (props.state.cartItems) {
                if(props.state.cartItems.length === 0) {
                  alert("your cart is empty")
                } else {
                  props.navigation.navigate('Select Delivery Option');
                }
              } else {
                alert("your cart is empty")
              }
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              PROCEED
            </Text>
          </TouchableOpacity>
          </View>
      </View>

      {/* <SafeAreaView>
                <CardView>
                <Text style={{color: "red", fontWeight: "bold"}}>This is FOOTER</Text>
                </CardView>
                </SafeAreaView> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (value) =>
      dispatch({
        type: REMOVE_FROM_CART,
        key: value,
      }),
      editCartItem: (value) =>
      dispatch({
        type: EDIT_CART_ITEM,
        value: value,
      }),
      clearCart: () =>
      dispatch({
        type: CLEAR_CART
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  view: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
