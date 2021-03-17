import { useLinkProps } from '@react-navigation/native';
import React from 'react';

import { View, Text } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

const MerchantFirst = (props) => {
    return(
        <View style={{alignItems: 'center'}}>
            <ScrollView>
                <View>
                    <Text>
                        Merchant Home = Mearchant First
                    </Text>
                </View>
                <View>
                    <TouchableHighlight
                        style={{width: "50%", height: 40, position: 'relative', backgroundColor: 'black'}}
                        onPress={() => props.navigation.navigate('Merchant Second')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default MerchantFirst;