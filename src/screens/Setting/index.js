import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
export default function Profile(){
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                       source={require('../../img/download.jpg')}/>

                <Text style={styles.name}>Họ A Tên Công</Text>
                <Text style={styles.userInfo}>cong@mail.com </Text>
                <Text style={styles.userInfo}>Cong</Text>
            </View>
          </View>

          <View style={styles.body}>

          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
  },
});