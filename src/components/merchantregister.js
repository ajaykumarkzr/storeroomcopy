import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TextInput,
  image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MerchantReg = (props) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.sc}>
        <Text style={{color: 'white'}}>Merchant</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            underlineColorAndroid="transparent"
            onChangeText={(name) => setUserName(name)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="PhoneNumber"
            underlineColorAndroid="transparent"
            onChangeText={(phone) => setPhoneNumber(phone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email Address"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Pincode"
            underlineColorAndroid="transparent"
            onChangeText={(pin) => setPinCode(pin)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="House number"
            underlineColorAndroid="transparent"
            onChangeText={(housenumber) => setHouseNumber(housenumber)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.button}>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => {
              const data = {
                userName,
                phoneNumber,
                email,
                pinCode,
                houseNumber,
                password,
              };
              props.navigation.navigate({routeName: 'Login'});
            }}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    // borderBottomWidth:-10,
    width: 280,
    height: 50,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    width: 150,
    borderRadius: 30,
    marginLeft: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
    marginLeft: 10,
    height: 50,
    marginTop: 40,
  },
  loginText: {
    color: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sc: {
    marginTop: 50,
  },
});

export default MerchantReg;
