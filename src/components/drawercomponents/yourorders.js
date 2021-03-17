import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CardView from 'react-native-cardview';
import { Accordion, Icon } from 'native-base';

const Orders = (props) => {

    const renderItem = (itemData) => {
        console.log("1",itemData.item)
        
        return (
            <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", padding: 5}}>
                <TouchableOpacity style={{width: "100%"}} onPress={() => {
                    props.navigation.navigate('Track', {yourOrder: itemData.item})
                }}
                >
                    <CardView
                        cardElevation={10}
                        cornerRadius={10}
                        style={{
                        width: '100%',
                        height: 80,
                        display: "flex",
                        flexDirection: "row",
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Text style={{width: "60%"}}>Order ID: S001O00{itemData.index}</Text>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "20%"}}>
                                <Icon style={{color: 'black', fontSize: 20}} type='Entypo' name='chevron-right' />
                        </View>
                    </CardView>
                </TouchableOpacity>
            </View>
        )
    }
    console.log(props.state.orderList)
    return (
        <View>
            <ScrollView id={1}>
            <FlatList
                    keyExtractor={(item, index) => item.total}
                    data={props.state.orderList}
                    renderItem={renderItem}
                    numColumns={1}
                />
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps, null)(Orders);