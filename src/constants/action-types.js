export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;

export const BARCODE_ADD = "BARCODE_ADD";
export const BARCODE_DELETE = "BARCODE_DELETE";