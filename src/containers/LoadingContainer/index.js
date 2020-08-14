import React, { Component } from "react";
import Loading from "../../components/Loading";
import { connect } from "react-redux";

class LoadingContainer extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 300);
    // await Font.loadAsync({
    //   'Roboto': require('../../../node_modules/native-base/Fonts/Roboto.ttf'),
    //   'Roboto_medium': require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
    //   ...Ionicons.font,
    // })

    this.props.navigation.navigate("App");
  }
  render() {
    return (
      <Loading navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  
});


export default connect(
  mapStateToProps,
  null
)(LoadingContainer);
