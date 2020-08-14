import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from "../containers/HomeContainer";
import QRCodeScan from "../containers/QRCodeScanContainer";

const stackNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    QRCodeScan: { screen: QRCodeScan },
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(stackNavigator);
