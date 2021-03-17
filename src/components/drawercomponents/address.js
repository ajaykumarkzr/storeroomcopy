import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import {
  Button,
  Form,
  Item,
  Label,
  Input,
  Icon,
} from 'native-base';

// import { Input } from 'react-native-elements';

import { connect } from 'react-redux';
import AddressCarousel from '../address/addresscarousel';
import { ADD_ACCOUNT_ADDRESS, EDIT_ADDRESS } from '../store/actions/shopdata';
import { set, add } from 'react-native-reanimated';

// import Constants from 'expo-constants';

const Address = (props) => {


  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [addNew, setAddNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    number: '',
    houseName: '',
    area: '',
    town: '',
    landmark: '',
    pin: ''
  });


  const regExName = (str) => {
    let pattern = /[0-9!@#$%^&*()_+-={}<>~`₹;:'",~]/g;
    let resultName = str.match(pattern);
    if (!resultName) {
      return true
    }
    return false
  }

  const regExNumber = (str) => {
    let pattern = /[a-zA-Z!@#$%^&*(){}<>.;:]/g;
    let resultNumber = str.match(pattern);
    if (!resultNumber) {
      return true
    }
    return false
  }

  const regExPin = (str) => {
    let pattern = /[a-zA-Z!@#$%^&*(){}<>.;:]/g;
    let resultPin = str.match(pattern)
    if (!resultPin) {
      return true
    }
    return false
  }

  if (!addNew && !props.state.accountAddress) {
    setAddNew(true)
  } else if (!addNew && props.state.accountAddress.length === 0) {
    setAddNew(true)
  }

  const clearFormValues = () => {
    setNewAddress({
      name: '',
      number: '',
      houseName: '',
      area: '',
      town: '',
      landmark: '',
      pin: ''
    })
  }

  const editAddress = (value) => {
    // console.log("editAddress", value)
    setNewAddress(value)
    setEditData(value)
    setEdit(true)
    setAddNew(true)
  }

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <ScrollView style={{width: "100%"}}>
      {props.state.accountAddress ? (
        <View style={{width: "100%", alignItems: "center"}}>
          {props.state.accountAddress.length > 0 ?
          <AddressCarousel style={{height: 230}} editAddress={editAddress} /> : null }
        </View>
      ) : null}
      {addNew ?
      <View>
        <View style={{marginLeft: '5%', marginTop: '5%', display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            ADD A NEW ADDRESS
          </Text>
          <TouchableOpacity style={{justifyContent: "center", alignItems: "center", paddingRight: 15}} onPress={() => {
            clearFormValues()
            setAddNew(false)
            
          }}>
            <Icon type="AntDesign" style={{fontSize: 17, marginTop: 7}} name="closecircle" />
          </TouchableOpacity>
        </View>
        {/* <Content> */}
        <Form style={{marginTop: '5%', paddingRight: '4%'}}>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>Full Name</Label>
            <Input
              maxLength={15}
              value={newAddress.name}
              onChangeText={(text) => {
                setNewAddress({...newAddress, name: text})
              }}
            />
          </Item>
          <Item
          floatingLabel
          style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
          <Label style={{fontSize: 15, color: "black"}}>
            Mobile Number
          </Label>
          <Input
            value={newAddress.number}
            maxLength={10}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setNewAddress({...newAddress, number: text})
            }}
          />
        </Item>
          
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>House Name</Label>
            <Input
              value={newAddress.houseName}
              onChangeText={(text) => {
                setNewAddress({...newAddress, houseName: text})
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>
              Area/Street
            </Label>
            <Input
              value={newAddress.area}
              onChangeText={(text) => {
                setNewAddress({...newAddress, area: text})
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>Town/City</Label>
            <Input
              value={newAddress.town}
              onChangeText={(text) => {
                setNewAddress({...newAddress, town: text})
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>Landmark</Label>
            <Input
              value={newAddress.landmark}
              onChangeText={(text) => {
                setNewAddress({...newAddress, landmark: text})
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, color: 'black'}}>Pincode</Label>
            <Input
              value={newAddress.pin}
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={(text) => {
                setNewAddress({...newAddress, pin: text})
              }}
            />
          </Item>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Button
              onPress={() => {
                if (!regExName(newAddress.name) || newAddress.name.length < 3) {
                  Alert.alert('Error', 'Enter Valid Full Name')
                  return
                }
                if (!regExNumber(newAddress.number) || newAddress.number.length < 10) {
                  Alert.alert("Error", "Enter Valid Number")
                  return
                }
                if(!regExPin(newAddress.pin) || newAddress.pin.length < 6) {
                  Alert.alert('Error', "Enter Valid Pin Number")
                  return
                }
                if (newAddress.houseName.length < 4 || newAddress.area.length < 2 || newAddress.town.length < 2 || newAddress.landmark.length < 3) {
                  Alert.alert('Error', "Enter Valid Details")
                  return
                }
                if (edit) {
                  props.editAccountAddress(newAddress, editData.index)
                  setEdit(false)
                  Alert.alert('Success', "EDITED")
                } else {
                  props.addAccountAddress(newAddress);
                  Alert.alert('Success', "Done")
                  setNewAddress({
                    name: '',
                    number: '',
                    houseName: '',
                    area: '',
                    town: '',
                    landmark: '',
                    pin: ''
                  })
                }
                setAddNew(false)
                clearFormValues()
              }}
              style={{
                width: 80,
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: '15%',
              }}
              warning={true}>
              <Text>Save</Text>
            </Button>
          </View>
        </Form> 
        </View> : null}
        {/* </Content> */}
      </ScrollView>
      {!addNew ? <View style={{justifyContent: "flex-end", display: "flex", flexDirection: "row"}}>
          <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}} onPress={() => setAddNew(true)}>
            <Icon style={{fontSize: 60, color: "#FC8019"}} type="EvilIcons" name="plus" />
          </TouchableOpacity>
        </View> : null}
    </View>
  );
};



const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAccountAddress: (value) => dispatch({
        type: ADD_ACCOUNT_ADDRESS,
        value: value,
      }),
      editAccountAddress: (value, index) => dispatch({
        type: EDIT_ADDRESS,
        value: value,
        index
      })
  };
};





export default connect(mapStateToProps, mapDispatchToProps)(Address);
