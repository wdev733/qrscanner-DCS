import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import _ from "lodash";
import styles from "./styles";

const avatarImage = require("../../../assets/avatar.png");

class SideBar extends Component {
  render() {
    let logoutMenu = _.find(this.props.data, { route: "Logout" });
    return (
      <View style={styles.container}>
        <View style={styles.drawerCover}>
          <Image source={avatarImage} style={styles.avatar}/>
          <Text style={styles.organizerName}>DeepScanner</Text>
        </View>
      </View>
    );
  }
}

export default SideBar;
