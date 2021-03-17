import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { CLEAR_CART, ORDERED } from './store/actions/shopdata';
import { Alert } from 'react-native';

const ConfirmOrder = (props) => {
    return (
        <View style={{backgroundColor: "white", height: "100%"}}>
            <ScrollView style={{height: "92%"}}>
                <View style={{paddingLeft: 15, paddingTop: 15}}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Order Bill Details</Text>
                </View>
                <View style={{paddingLeft: 15, paddingTop: 15, display: "flex", flexDirection: "row", width: "100%", borderBottomWidth: .2, paddingBottom: 6}}>
                    <Text style={{fontSize: 16, width: "75%"}}>Total Amount</Text>
                    <Text style={{justifyContent: "flex-end", fontSize: 16, fontWeight: "bold"}}>₹ {props.state.grandTotal}</Text>
                </View>
                <View style={{paddingLeft: 15, paddingTop: 15, display: "flex", flexDirection: "row", width: "100%", borderBottomWidth: .2, paddingBottom: 6}}>
                    <Text style={{fontSize: 16, width: "75%", color: "red"}}>Extra Charge</Text>
                    <Text style={{justifyContent: "flex-end", fontSize: 16, fontWeight: "bold", color: "red"}}>₹ 0.0</Text>
                </View>
                <View style={{paddingLeft: 15, paddingTop: 15, display: "flex", flexDirection: "row", width: "100%", borderBottomWidth: .8, paddingBottom: 6}}>
                    <Text style={{fontSize: 16, width: "75%", color: "red"}}>Delivery Charge</Text>
                    <Text style={{justifyContent: "flex-end", fontSize: 16, fontWeight: "bold", color: "red"}}>₹ 0.0</Text>
                </View>
                <View style={{paddingLeft: 15, paddingTop: 15, display: "flex", flexDirection: "row", width: "100%", paddingBottom: 6}}>
                    <Text style={{fontSize: 18, width: "75%"}}>Grand Total</Text>
                    <Text style={{justifyContent: "flex-end", fontSize: 18, fontWeight: "bold"}}>₹ {parseInt(props.state.grandTotal)}</Text>
                </View>
            </ScrollView>
            <View style={{
                height: "8%",
                display: "flex",
                flexDirection: "row"
            }}>
                <TouchableOpacity style={{width:"50%", backgroundColor: "#FC8019", alignItems: "center", justifyContent: "center"}} onPress={() => {
                    props.navigation.navigate('Select Delivery Option')
                }}><Text style={{color: "white", fontWeight: "bold"}}>Cancel</Text></TouchableOpacity>
                <TouchableOpacity style={{width:"50%", backgroundColor: "green", alignItems: "center", justifyContent: "center"}} onPress={async () => {
                    if (props.state.cartItems) {
                        let cartItemsCopy = props.state.cartItems;
                        await props.addToOrdered(cartItemsCopy);
                        // await props.clearCart();
                        props.navigation.navigate('STORE ROOM');
                        props.navigation.navigate('Order Track');
                    } else {
                        Alert.alert('Error', 'Your cart is empty')
                    }
                    
                }}><Text style={{color: "white", fontWeight: "bold"}}>Confirm Order</Text></TouchableOpacity>
            </View>
            
        </View>
    )
}

const mapStateToProps = (state) => {
    return {state};
  };
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch({
        type: CLEAR_CART
      }),
      addToOrdered: (value) => dispatch({
          type: ORDERED,
          value, value
      }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);