import React, { Component } from "react";
import { connect } from "react-redux";
import QRCodeScan from "../../components/QRCodeScan";
import { addBarcode } from "../../actions";

export class QRCodeScanContainer extends Component {
  render() {
    const { actionBarcodeAdd } = this.props;
    return (
      <QRCodeScan
        navigation={this.props.navigation}
        onScanBarcode={(code) => actionBarcodeAdd(code)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionBarcodeAdd: (...args) => dispatch(addBarcode(...args)),
});

export default connect(null, mapDispatchToProps)(QRCodeScanContainer);
