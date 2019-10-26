import React, { useState } from 'react';

const Search = ({searchHandle, resetTable}) => {
   const [value, setValue] = useState('');

   const handleSearch = (e) => {
      const val = e.target.value;
      setValue(val);
      searchHandle(val);
   };

   const handleReset = () => {
      setValue('');
      resetTable();
   };

   return (
      <div className="search">
         <div className="title">Search:</div>
         <input
            value={value}
            type="text"
            onChange={handleSearch}
         />
         <button onClick={handleReset}>Reset</button>
      </div>
   )
};

export default Search;