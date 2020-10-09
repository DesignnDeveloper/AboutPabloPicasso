import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView, Image} from 'react-native';

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <Image source={require('../assets/one.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/two.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/three.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/four.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/five.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/six.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/seven.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/eight.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/nine.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <Image source={require('../assets/ten.jpg')} 
      style={{width: 350, height: 300, margin: 20}}
      />
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            
          </Text>
        </View>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'red'}}>
        Pablo Picasso. ALL RIGHTS RESERVED.
        </Text>
        <Text style={{fontSize: 14, textAlign: 'center', color: 'red'}}>
        ARTIST COPY RIGHTS 2020-2050
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdPage;
