import React, { Component } from "react";
import { Image, StatusBar, ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles";

const logo = require("../../../assets/logoApp.png");

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Image source={logo} style={styles.logo}/>
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#5ABEEC" />
        </View>
      </View>
    );
  }
}
