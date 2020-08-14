import React, { Component } from "react";
import _ from "lodash";
import {
  Header,
  Left,
  Container,
  Button,
  Body,
  Title,
  Right,
  Icon,
} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

import { RNCamera } from "react-native-camera";

export default class QRCodeScan extends Component {

  isEnableScanCode = true;

  barcodeRecognized = ({ barcodes }) => {
    const { navigation, onScanBarcode } = this.props;
    if (barcodes.length > 0 && this.isEnableScanCode) {
      const barcode = barcodes[0];
      if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(barcode.data)) {
        this.isEnableScanCode = false;
        onScanBarcode(barcode.data);
        navigation.navigate("Home");
      }
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false} />
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
        >
          <Left style={styles.headerLeft}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>Scanner</Title>
          </Body>
          <Right style={styles.headerRight}>
          </Right>
        </Header>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.camera}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        >
        </RNCamera>
      </Container>
    );
  }
}
