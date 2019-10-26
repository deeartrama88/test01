import React from 'react';

const Item = ({item, status, changeStatus}) => {
   const statusChangeHandler = (e) => {
      changeStatus(item.id, e.target.value);
   };
   return (
      <div className="table-item">
         <div className="name">{item.name}</div>
         <div className="role">{item.role}</div>
         <div className="date">{item.connectedOn}</div>
         <div className="status">
            <select defaultValue={status} onChange={statusChangeHandler}>
               <option value="Scheduled">Scheduled</option>
               <option value="one of Screen">one of Screen</option>
               <option value="Explored">Explored</option>
               <option value="Hire">Hire</option>
            </select>
         </div>
      </div>
   );
};

export default React.memo(Item);