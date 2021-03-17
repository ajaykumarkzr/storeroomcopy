import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

const Profile = (props) => {
    return (
        <View style={{alignItems: "center"}}>
            <View style={{width: "100%", marginTop: 40, paddingLeft: 20, paddingRight: 20}}>
                <View style={{alignItems: "center"}}>
                    <Icon style={{fontSize: 65}} type='MaterialCommunityIcons' name='account' />
                </View>
                <TextInput
                    style={{height: 50, marginTop: 10}}
                    label="Name"
                    mode='outlined'
                    value="Sujith"
                    disabled={true}
                />
                <TextInput
                    style={{height: 50, marginTop: 10}}
                    label="Phone"
                    mode='outlined'
                    value="8592922233"
                    disabled={true}
                />
                <TextInput
                    style={{height: 50, marginTop: 10}}
                    label="Email"
                    mode='outlined'
                    value="sujithudayan1998@gmail.com"
                    disabled={true}
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps, null)(Profile);