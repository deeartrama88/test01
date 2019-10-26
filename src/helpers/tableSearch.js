const searchInObj = (val, obj) => {
   let flag = false;
   // set ^ character to match from word start
   const searchVal = `^${val}`;
   Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'string') return;
      if (obj[key].search(searchVal) !== -1) flag = true;
   });
   return flag;
};

const searchWithAnd = (searchValues, obj) => {
   let flag = true;
   searchValues.forEach(val => {
      if (!searchInObj(val, obj)) flag = false;
   });
   return flag;
};

const searchWithOr = (searchValues, obj) => {
   let flag = false;
   searchValues.forEach(val => {
      if (searchInObj(val, obj)) flag = true;
   });
   return flag;
};

const checkValuesInObject = (searchVal, obj, searchType) => {
   if (searchType && searchType === 'and') {
      return searchWithAnd(searchVal, obj);
   }
   return searchWithOr(searchVal, obj);
};

const getSearchValues = (val) => {
   const values = val.split(' ');
   // eslint-disable-next-line no-nested-ternary
   const type = values.includes('and') ? 'and' : values.includes('or') ? 'or' : false;
   const searchVal = type ?
      val.split(type)
         .map(item => { return item.trim()})
         .filter(item => item !== '')
      : [val];
   return {
      searchType: type,
      searchValues: searchVal,
   }
};

const tableSearch = (val, state) => {
   const {searchValues, searchType} = getSearchValues(val.trim());
   return state.filter(item => {
         return checkValuesInObject(searchValues, item, searchType);
      })
};

export default tableSearch;