import {
   TABLE_ITEM_CHANGE_STATUS,
   TABLE_SEARCH,
   TABLE_RESET,
} from '../actions/constants';
import tableSearch from '../../helpers/tableSearch';

const initState = [
   {
      id: 1,
      name: 'Marry Poppins',
      role: 'Sales',
      connectedOn: '2019.03.12',
      status: 'Hire'
   },
   {
      id: 2,
      name: 'Harry Potter',
      role: 'Manager',
      connectedOn: '2018.04.22',
      status: 'Explored'
   },
   {
      id: 3,
      name: 'Taylor',
      role: 'Artist',
      connectedOn: '2017.01.11',
      status: 'one of Screen'
   },
   {
      id: 4,
      name: 'Sub Zero',
      role: 'Fighter',
      connectedOn: '1844.06.31',
      status: 'Scheduled'
   },
   {
      id: 5,
      name: 'Marry Poppins',
      role: 'Sales',
      connectedOn: '2019.03.12',
      status: 'Hire'
   },
   {
      id: 6,
      name: 'Harry Potter',
      role: 'Manager',
      connectedOn: '2018.04.22',
      status: 'Explored'
   },
   {
      id: 7,
      name: 'Taylor',
      role: 'Artist',
      connectedOn: '2017.01.11',
      status: 'one of Screen'
   },
   {
      id: 8,
      name: 'Sub Zero',
      role: 'Fighter',
      connectedOn: '1844.06.31',
      status: 'Scheduled'
   },
];

const testTableReducer = (state = initState, action) => {
   switch (action.type) {
      case TABLE_ITEM_CHANGE_STATUS:
         return state.map(item => {
            if (item.id === action.payload.id) {
               item.status = action.payload.value;
            }
            return item;
         });

      case TABLE_RESET:
         return initState;

      case TABLE_SEARCH:
         if (!action.payload) {
            return initState;
         }
         return tableSearch(action.payload, initState);

      default:
         return state;
   }
};

export default testTableReducer;
