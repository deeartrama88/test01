import {
   TABLE_SEARCH,
   TABLE_RESET,
   TABLE_ITEM_CHANGE_STATUS
} from './constants';

export const resetTable = () => {
   return {type: TABLE_RESET};
};

export const changeStatus = (id, value) => {
   return {
      type: TABLE_ITEM_CHANGE_STATUS,
      payload: {
         id,
         value,
      }
   }
};

export const tableSearch = (value) => {
   return {type: TABLE_SEARCH, payload: value};
};
