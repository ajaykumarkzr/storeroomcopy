import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
// import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import CardView from 'react-native-cardview';
import { Icon } from 'native-base';

const OrderTrack = (props) => {

    console.log(props.route.params)


    const labels = ["Order Placed","Packed","Ready to Deliver"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 14,
        currentStepLabelColor: '#fe7013'
      }

    const [pos, setPos] = useState(0);

    if (!props.route.params) {
        return (
            <View style={{alignItems: "center"}}>
                <View style={{width: "100%"}}>
                    <CardView style={{width: "100%", height: "100%"}}>
                        <View style={{display: "flex", flexDirection: "row", paddingLeft: 18, marginTop: 20}}>
                            <Icon name="ios-cart" style={{fontSize: 35}} />
                            <Text style={{marginLeft: 5, marginTop: 8, fontSize: 16}}>YOUR ORDER HAS BEEN CONFIRMED</Text>
                        </View>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 20}}>
                            <Text style={{fontSize: 15}}>
                                Your Order Number Is :
                            </Text>
                            <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 5}}>
                                978309
                            </Text>
                        </View>
                        <ScrollView style={{height: "50%", width: "100%", marginTop: 80}}>
                            <StepIndicator
                                stepCount={3}
                                // direction="vertical"
                                customStyles={customStyles}
                                currentPosition={pos}
                                labels={labels}
                            />
                        </ScrollView>
                        <TouchableOpacity
                            style={{backgroundColor: "#FC8019", alignItems: "center", justifyContent: "center", height: "8%"}}
                            onPress={() => {props.navigation.navigate('STORE ROOM')}}
                        >
                            <Text style={{color: "white", fontWeight: "bold"}}>DONE</Text>
                        </TouchableOpacity>
                    </CardView>
                </View>
                
            </View>
        )
    } else {
        let items = props.route.params.yourOrder
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
            <View style={{alignItems: "center"}}>
                <View style={{width: "100%"}}>
                    <CardView style={{width: "100%", height: "100%"}}>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 20}}>
                            <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 5}}>
                                978309
                            </Text>
                        </View>
                        <ScrollView style={{height: "50%", width: "100%"}}>
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
                                    keyExtractor={(item, index) => index}
                                    data={items}
                                    renderItem={renderItem}
                                    numColumns={1}
                                />
                                </CardView>
                                </View>
                        </ScrollView>
                        <StepIndicator
                                stepCount={3}
                                // direction="vertical"
                                customStyles={customStyles}
                                currentPosition={pos}
                                labels={labels}
                            />
                    </CardView>
                </View>
                
            </View>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {state};
  };

export default connect(mapStateToProps, null)(OrderTrack);