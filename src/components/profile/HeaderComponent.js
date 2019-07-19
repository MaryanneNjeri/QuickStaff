import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon, Text } from 'native-base';
import _ from 'lodash';
import { secondaryGradientArray } from '../../../constants/utlis/Colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

});

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderComponent extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <View>
        {!_.isEmpty(profile.data)
          ? (
            <View>
              <View style={styles.header}>
                <LinearGradient
                  colors={secondaryGradientArray}
                  style={{ flex: 1 }}
                />
              </View>
              <Image style={styles.avatar} source={{ uri: profile.data.profile_image }} />

              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={{ fontWeight: '200', fontSize: 20 }}>{profile.data.name}</Text>
                  <Text note>{profile.data.role}</Text>
                  <Text />
                  <View style={{ flexDirection: 'row' }}>
                    <Text note>
                      <Icon
                        type="Entypo"
                        name="phone"
                        style={{
                          fontSize: 15,
                          fontWeight: '100',
                          color: '#BDC3C7',
                        }}
                      />
                      {profile.data.phone}
                    </Text>
                    <Text />
                    <Text note>
                      <Icon
                        type="Entypo"
                        name="mail"
                        style={{
                          fontSize: 15,
                          fontWeight: '100',
                          color: '#BDC3C7',
                        }}
                      />
                      {profile.data.email}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )
          : null
  }
      </View>
    );
  }
}
