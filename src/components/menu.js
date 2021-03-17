import React, {useState} from 'react';
import {
  Input,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

export default (Menu) => {
  const [state, setState] = useState(false);
  const click = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <View>
      <Button title="Menu" style={styles.button} onPress={click} />
      {state ? (
        <View>
          <Text>menu open</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 50,
  },
});
