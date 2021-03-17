import {STORE_SELECT} from './shopdata';

export const selectStore = (stor) => {
  {
    type: STORE_SELECT;
    data: stor;
  }
};
