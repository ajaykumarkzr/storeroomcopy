import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    ImageBackground,
    ScrollView,
    FlatList
  } from 'react-native';
import CardView from 'react-native-cardview';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DeliveryOption = (props) => {
    const deliveryoption = true
    const [delivery, setDelivery] = useState(false);


    const renderItem = (itemData) => {
        return (
            <View style={{display: "flex", flexDirection: "row", width: "100%", padding: 5}}>
                <Text style={{width: "10%", textAlign: "center"}}>{itemData.index+1}</Text>
                <Text style={{width: "50%", textAlign: "center"}}>{itemData.item.itemDetails.title}</Text>
                {itemData.item.total >= 1000 ? <Text style={{width: "22%", textAlign: "center"}}>{itemData.item.total/1000} Kg</Text> : <Text style={{width: "22%", textAlign: "center"}}>{itemData.item.total} g</Text>}
                <Text style={{width: "18%", textAlign: "center"}}>₹ {itemData.item.totalForItem}</Text>
            </View>
        )
    }


    return (
        <View>
            <ScrollView  style={{height: "93%"}}>
            <View>
                <View style={{display: "flex", flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Amount to Pay : </Text>
                    {props.state.grandTotal ? <Text style={{fontWeight: "bold", fontSize: 18}}>₹ {props.state.grandTotal}</Text> : <Text style={{fontWeight: "bold", fontSize: 18}}>0</Text>}
                </View>
                <View style={{paddingTop: 15, alignItems: "center"}}>
                    {deliveryoption ? <CardView
                        cardElevation={.6}
                        cornerRadius={5}
                        style={{
                            width: '94%',
                            height: 80,
                            marginBottom: 5,
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>
                        <View style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            marginBottom: 5,
                            }}>
                            <Icon style={{opacity: 0.9, fontSize: 20, marginTop: 4, marginLeft: 15}} name="ios-cash" />
                            <Text style={{fontWeight: "bold", marginLeft: 5, width: "75%"}}>Cash On Delivery</Text>
                            <View style={{display: "flex", flexDirection: "row", }}>
                                <CheckBox
                                    value={delivery}
                                    onValueChange={() => setDelivery(!delivery)}
                                    tintColors={{true: 'green', false: 'black'}}
                                />
                            </View>
                        </View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={{fontSize: 10, color: "red"}}>
                                Please keep exact change handy to help us serve you better. Delivery charge will be added extra
                            </Text>
                        </View>
                    </CardView> :
                        <View style={{opacity: .8, width: "100%", alignItems: "center"}}>
                            <CardView
                                    cardElevation={.6}
                                    cornerRadius={5}
                                    style={{
                                        width: '94%',
                                        height: 80,
                                        marginBottom: 5,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        opacity: .8
                                    }}>
                                    <View style={{
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: "flex-start",
                                        marginBottom: 5,
                                        opacity: .8
                                        }}>
                                        <Icon style={{fontSize: 20, marginTop: 4, marginLeft: 15, opacity: .8}} name="ios-cash" />
                                        <Text style={{fontWeight: "bold", marginLeft: 5, width: "75%", opacity: .8}}>Cash On Delivery</Text>
                                        {/* <View style={{display: "flex", flexDirection: "row", opacity: .8}}>
                                            <CheckBox
                                                value={false}
                                                // onValueChange={() => setDelivery(delivery)}
                                                tintColors={{true: 'green', false: 'black'}}
                                            />
                                        </View> */}
                                    </View>
                                <View style={{paddingLeft: 15, opacity: .8}}>
                                    <Text style={{fontSize: 10, color: "red", opacity: .8}}>
                                        Please keep exact change handy to help us serve you better. Delivery charge will be added extra
                                    </Text>
                                </View>
                            </CardView>
                        </View>}
                    <CardView
                            cardElevation={.6}
                            cornerRadius={5}
                            style={{
                                width: '94%',
                                height: 80,
                                marginBottom: 5,
                                flexDirection: "column",
                                justifyContent: "center"
                    }}>
                        <View style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: "flex-start",
                                marginBottom: 5,
                        }}>
                            <Icon style={{opacity: 0.9, fontSize: 20, marginTop: 4, marginLeft: 15}} name="ios-cash" />
                            <Text style={{fontWeight: "bold", marginLeft: 5, width: "75%"}}>Take Away</Text>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                                <CheckBox
                                    value={!delivery}
                                    onValueChange={() => setDelivery(!delivery)}
                                    tintColors={{true: 'green', false: 'black'}}
                                />
                            </View>
                        </View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={{fontSize: 10, color: "red"}}>Please pay the bill at shop</Text>
                        </View>
                    </CardView>
                    {delivery ? null :
                        <TextInput multiline={true} style={{borderColor: "black", borderWidth: 0.5, width: "90%"}} placeholder="If you have any instructions type here..." />}
                </View>
                <View style={{width: "100%", alignItems: "center"}}>
                <CardView
                    style={{marginTop: 10, width: "97%"}}
                >
                    <View style={{display: "flex", flexDirection: "row", padding: 5}}>
                        <Text style={{width: "10%", textAlign: "center"}}>No.</Text>
                        <Text style={{width: "50%", textAlign: "center"}}>NAME</Text>
                        <Text style={{width: "22%", textAlign: "center"}}>Quantity</Text>
                        <Text style={{width: "18%", textAlign: "center"}}>Amount</Text>
                    </View>
                <FlatList
                    keyExtractor={(item, index) => item.itemDetails.id}
                    data={props.state.cartItems}
                    renderItem={renderItem}
                    numColumns={1}
                />
                </CardView>
                </View>
            </View>
            </ScrollView>
            <View style={{height: "7%"}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#FC8019",
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={() => {
                        props.navigation.navigate('Order Summary')
                    }}
                >
                    <Text style={{fontWeight: "bold", color: "white", fontSize: 16}}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {state};
  };



export default connect(mapStateToProps, null)(DeliveryOption);
