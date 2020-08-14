import * as ACTION_TYPES from "../constants/action-types";

export const addBarcode = (barcode) => ({
  type: ACTION_TYPES.BARCODE_ADD,
  payload: {
    barcode,
  },
});

export const deleteBarcode = (id) => ({
  type: ACTION_TYPES.BARCODE_DELETE,
  payload: {
    id,
  },
});
