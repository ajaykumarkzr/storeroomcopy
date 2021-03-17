import React, {useState} from 'react';
import validator from 'email-validator';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Input, Item, Label, Form, Button} from 'native-base';

const Forgotpassword = (props) => {
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [otp, setOtp] = useState(false);
  const [otpSend, setOtpSend] = useState(false);
  if (passwordUpdated) {
    props.navigation.navigate('Login');
  }

  return (
    <View>
      {submitted ? (
        <Form>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, fontWeight: 'bold'}}>
              Enter new password
            </Label>
            <Input
              onChangeText={(text) => {
                setNewPassword(text);
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
            <Label style={{fontSize: 15, fontWeight: 'bold'}}>
              Confirm password
            </Label>
            <Input
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            />
          </Item>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Button
              onPress={() => {
                if (newPassword.length > 5 && newPassword === confirmPassword) {
                  setPasswordUpdated(true);
                } else {
                  alert('error');
                }
              }}
              style={{
                width: 80,
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: '15%',
              }}
              warning={true}>
              <Text>Submit</Text>
            </Button>
          </View>
        </Form>
      ) : (
        <View>
          {otpSend ? (
            <Form>
              <Item
                floatingLabel
                style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
                <Label style={{fontSize: 15, fontWeight: 'bold'}}>
                  Enter otp
                </Label>
                <Input
                  onChangeText={(onetimepassword) => {
                    setOtp(onetimepassword);
                  }}
                />
              </Item>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Button
                  onPress={() => {
                    if (otp === '12345') {
                      setSubmitted(true);
                    }
                  }}
                  style={{
                    width: 80,
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginTop: '15%',
                  }}
                  warning={true}>
                  <Text>Submit</Text>
                </Button>
              </View>
            </Form>
          ) : (
            <View>
              <Form>
                <Item
                  floatingLabel
                  style={{width: '90%', borderColor: 'black', borderWidth: 1}}>
                  <Label style={{fontSize: 15, fontWeight: 'bold'}}>
                    Enter your mobile number
                  </Label>
                  <Input
                    onChangeText={(text) => {
                      setNumber(text);
                    }}
                  />
                </Item>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Button
                    onPress={() => {
                      let phoneNumber = number;
                      setOtpSend(true);
                    }}
                    style={{
                      width: 80,
                      justifyContent: 'center',
                      borderRadius: 20,
                      marginTop: '15%',
                    }}
                    warning={true}>
                    <Text>Submit</Text>
                  </Button>
                </View>
              </Form>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Forgotpassword;
