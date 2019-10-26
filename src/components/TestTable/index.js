import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from './Item';
import Search from './Search';
import Statistics from './Statistics';
import {
   resetTable,
   changeStatus,
   tableSearch
} from '../../store/actions/testTableActions';
import './index.scss';

const TestTable = ({table, changeStatus, tableSearch, resetTable}) => {
   return (
      <div className="wrapper">
         <Search
            searchHandle={tableSearch}
            resetTable={resetTable}
         />
         <Statistics list={table} />
         <div className="table">
            {/* table head */}
            <div className="table-item">
               <div className="name">Name</div>
               <div className="role">Role</div>
               <div className="date">Connected on</div>
               <div className="status">Status</div>
            </div>
            {/* table items */}
            {table.map(item => {
               return (<Item
                  key={item.id}
                  status={item.status}
                  item={item}
                  changeStatus={changeStatus}
               />)
            })}
         </div>
      </div>

   )
};

const mapStateToProps = state => ({
   table: state.testTableReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
   resetTable,
   changeStatus,
   tableSearch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
