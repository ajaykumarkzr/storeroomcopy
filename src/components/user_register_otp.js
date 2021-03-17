import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
  } from 'react-native';
import { Input, Button, Form, Label, Item } from "native-base";

const UserregisterOtp = (props) => {
    return(
        <View>
            <Form>
            <Item
                floatingLabel
                style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
                <Label style={{fontSize: 15, fontWeight: 'bold'}}>
                    Enter Your OTP
                </Label>
                <Input
                onChangeText={(text) => {
                    
                }}
                />
            </Item>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: 20}}>
            <Button name="Submit" style={{width: 90, justifyContent: "center", borderRadius: 20}}
                onPress={() => {
                    props.navigation.replace('DrawerComponent')
                    // props.navigation.reset(NavigationActions.navigate({routeName: 'DrawerComponent'}));
                }}
            ><Text style={{color: "white"}}>SUBMIT</Text></Button>
            </View>
                
            </Form>
        </View>
    )
}

export default UserregisterOtp;