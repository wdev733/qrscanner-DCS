import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheet, Text, View } from 'react-native';
import SwitchNavigator from "./src/routers/SwitchNavigator";
import configureStore from "./src/stores/configureStore";

export default function Root() {

  return (
    <Provider store={configureStore().store}>
      <PersistGate persistor={configureStore().persistor}>
        <SwitchNavigator/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
