import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../../components/Home";
import { deleteBarcode } from "../../actions";

export class HomeContainer extends Component {

  render() {
    const { barcodes, actionBarcodeDelete } = this.props;

    return (
      <Home
        navigation={this.props.navigation}
        barcodes={barcodes}
        onDeleteBarcode={(id) => {actionBarcodeDelete(id)}}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  barcodes: state.barcodes.barcodeList,
});

const mapDispatchToProps = (dispatch) => ({
  actionBarcodeDelete: (...args) => dispatch(deleteBarcode(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
