import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Alert
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

const Login = (props) => {
  const [email, setEmail] = useState('sujisujith.tkr@gmail.com');
  const [password, setPassword] = useState('$$2020');
  const [isMerchant, setMerchant] = useState(false);
  const [isLoaded, setLoaded] = useState(false);


  const storeToken = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      console.log(e)
    }
  }

  const readToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')
      if(token != null) {
        if (token === 'USER') {
          props.navigation.replace({routeName: 'DrawerComponent'});
        } else if (token === 'MERCHANT') {
          props.navigation.replace({routeName: 'MerchantHome'});
        } else {
          setLoaded(true);
        }
      } else setLoaded(true);
    } catch (e) {
      console.log(e)
    }
  }
  readToken();

if(isLoaded){
  return (
    <View>
      <LinearGradient colors={['#840004', '#0f142b']} style={styles.container}>
        {/* <ImageBackground source={img} style={{flex: 1, height: '100%', width: '100%', flex: 1,  justifyContent: "center", alignContent: "center", alignItems: "center"}}> */}
        <View style={{alignItems: "center"}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="User name / Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isMerchant}
              onValueChange={setMerchant}
              style={styles.checkbox}
              tintColors={{true: 'white', false: 'white'}}
            />
            <Text style={styles.merch1}>Login as MERCHANT</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: -10,
            }}>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={async () => {
                const data = {
                  email,
                  password,
                };
                if (!isMerchant) {
                  if (
                    (email === 'sujisujith.tkr@gmail.com' &&
                      password === '$$2020') ||
                    (email === 'ajaykumarkzr@gmail.com' &&
                      password === 'password')
                  ) {
                    await storeToken('USER')
                    props.navigation.replace({routeName: 'DrawerComponent'});
                  } else {
                    Alert.alert("Error", 'email or password is error');
                  }
                } else if (isMerchant) {
                  if (
                    (email === 'sujisujith.tkr@gmail.com' &&
                      password === '$$2020') ||
                    (email === 'ajaykumarkzr@gmail.com' &&
                      password === 'password')
                  ) {
                    await storeToken('MERCHANT')
                    props.navigation.replace({routeName: 'MerchantHome'});
                  }
                }
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableHighlight
              style={styles.buttonContainer1}
              onPress={() => {
                props.navigation.navigate({routeName: 'Reset'});
              }}>
              <Text style={styles.reg}>Forgot your password?</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.registerContainer}>
            <TouchableHighlight
              style={styles.buttonContainer2}
              onPress={() => {
                props.navigation.navigate({routeName: 'Signup'});
              }}>
              <Text style={styles.reg1}>Register as User</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttonContainer2}
              onPress={() => {
                props.navigation.navigate({routeName: 'MerchantRegistration'});
              }}>
              <Text style={styles.reg1}>Register as Merchant</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
} else {
  return(
    <View style={styles.nocontent}><Text>Loading.....</Text></View>
  );
}
  
};


const styles = StyleSheet.create({
  nocontent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  registerContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  merch1: {
    alignSelf: 'center',
    color: 'white',
  },
  division: {},
  container: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    textAlign: 'center',
    width: 280,
    height: 50,
    paddingLeft: 10,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },

  buttonContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 150,
    borderRadius: 30,
  },
  buttonContainer1: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65,
    width: 180,
    borderRadius: 30,
    marginLeft: 10,
    color: 'white',
  },
  buttonContainer2: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: 150,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#00b5ec',
    height: 50,
    marginTop: 25,
  },
  loginText: {
    color: 'white',
  },
  reg: {
    // height: 40,
    alignItems: 'center',
    color: 'white',
  },
  reg1: {
    // height: 40,
    alignItems: 'center',
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default Login;
