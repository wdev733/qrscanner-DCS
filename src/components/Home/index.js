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
  Text,
  Content,
  List,
  ListItem
} from "native-base";
import { StatusBar, Linking } from "react-native";
import styles from "./styles";

export default class Home extends Component {
  renderContent() {
    const { barcodes, onDeleteBarcode } = this.props;

    if (barcodes.length === 0) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          No codes scanned to show!
        </Text>
      );
    }

    return (
      <List
        dataArray={barcodes}
        renderRow={({ id, link }) => (
          <ListItem button={true} key={id}>
            <Body>
              <Text note onPress={ ()=> Linking.openURL(link) }>{link}</Text>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => {
                  onDeleteBarcode(id);
                }}
              >
                <Icon
                  name="trash"
                  style={{ color: "#f00" }}
                />
              </Button>
            </Right>
          </ListItem>
        )}
      />
    );
  }

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
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>Home</Title>
          </Body>
          <Right style={styles.headerRight}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("QRCodeScan")}
            >
              <Icon name="ios-qr-scanner" style={{ color: "#fff" }} />
            </Button>
          </Right>
        </Header>
        <Content>{this.renderContent()}</Content>
      </Container>
    );
  }
}
