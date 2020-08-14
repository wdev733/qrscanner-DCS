// Describe the list of unsplash users
import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  barcodeList: [],
};

export default function barcodes(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.BARCODE_ADD:
      {
        let barcodeList = [...state.barcodeList];
        const newId = barcodeList.length === 0 ? 1 : barcodeList[barcodeList.length - 1].id + 1;
        return {
          ...state,
          barcodeList: [
            ...barcodeList,
            {
              id: newId,
              link: action.payload.barcode
            }
          ]
        };
      }
      case ACTION_TYPES.BARCODE_DELETE:
        {
          let barcodeList = [...state.barcodeList];
          const index = barcodeList.indexOf(barcode => barcode.id === action.payload.id)
          barcodeList.splice(index, 1);
          return {
            ...state,
            barcodeList: [ ...barcodeList ]
          };
        }
    default:
      return state;
  }
}
