import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import { Image } from 'react-native';
const ProductDetail = ({route, navigation}) => {
  // console.log('ProductDetail -> route', route?.params);
  let user =route?.params.user;
   

 

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24}}>ProductDetail</Text>
      
      <Image
                style={styles.picture}
                source={user.img}
            />
    </View>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({});
