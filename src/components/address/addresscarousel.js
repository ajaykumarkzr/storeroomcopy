import * as React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import CardView from 'react-native-cardview';
import { Icon } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import { connect } from 'react-redux';
import { SELECT_DELIVERY_ADDRESS, DELETE_ADDRESS } from '../store/actions/shopdata';

const AddressCarousel = (props) => {

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'floralwhite',
        }}>
        <TouchableOpacity style={{alignItems: "center"}}>
          <CardView
            cardElevation={20}
            style={{width: 360, height: "100%", paddingLeft: 10, paddingRight: 10}}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end", paddingTop: "3%"}}>
              <TouchableOpacity style={{marginRight: 10}} onPress={() => {
                let value = {
                  name: item.name,
                  number: item.number,
                  houseName: item.houseName,
                  area: item.area,
                  town: item.town,
                  landmark: item.landmark,
                  pin: item.pin,
                  index: index
                }
                props.editAddress(value);
              }}><Icon style={{fontSize: 20}} type='AntDesign' name='edit' /></TouchableOpacity>
              <TouchableOpacity onPress={() => {
                props.deleteAddress(index)
              }}><Icon style={{fontSize: 20, color: 'red'}} type='AntDesign' name='delete' /></TouchableOpacity>
            </View>  
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Name : </Text>
              <Text>{item.name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Phone : </Text>
              <Text>{item.number}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>House name : </Text>
              <Text>{item.houseName}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Area : </Text>
              <Text>{item.area}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Town : </Text>
              <Text>{item.town}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Landmark : </Text>
              <Text>{item.landmark}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: 100}}>Pin Code : </Text>
              <Text>{item.pin}</Text>
            </View>
            <View style={{
              display: "flex", 
              flexDirection: "row", 
              backgroundColor: '#FC8019', 
              justifyContent: "center", 
              alignContent: "center", 
              alignItems: "center",
              marginTop: 10
            }}>
              <Text style={{fontWeight: "bold"}}>Select this address for delivery</Text>
              <CheckBox 
                value={item.selected}
                onChange={() => props.selectDeliveryAddress({index, item})}
                tintColors={{true: 'green', false: 'black'}}
              />
            </View>
            <View style={{
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "center", 
              alignContent: "center", 
              alignItems: "center",
              marginTop: 2
            }}>
              {props.state.accountAddress.length > 0 && index === 0 ? <Icon style={{fontSize: 15}} type="AntDesign" name="caretright" /> : 
              <View>
                {index === props.state.accountAddress.length-1 ? <Icon style={{fontSize: 15}} type="AntDesign" name="caretleft" /> : 
                <View style={{display: "flex", flexDirection: "row"}}>
                  <Icon style={{fontSize: 15}} type="AntDesign"  name="caretleft" />
                  <Icon style={{fontSize: 15}} type="AntDesign" name="caretright" />
                </View>
                }
              </View>
              }
            </View>
          </CardView>
        </TouchableOpacity>
      </View>
    );
  }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'tinder'}
            // ref={(ref) => (carousel = ref)}
            data={props.state.accountAddress}
            sliderWidth={360}
            itemWidth={360}
            renderItem={_renderItem}
            // onSnapToItem={(index) => setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectDeliveryAddress: (value) => dispatch({
      type: SELECT_DELIVERY_ADDRESS,
      value: value
    }),
    deleteAddress: (value) => dispatch({
      type: DELETE_ADDRESS,
      value: value
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddressCarousel);