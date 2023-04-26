import React, { useState } from 'react';
import Search from './Search.jsx';
import Form from './Form.jsx';
import ListView from './ListView.jsx';


const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   // get request to the database
  //   // upon response, setList with array of data
  // }, []);

  const searchHandler = () => {
    // create searchedArray
    // iterate list
      // if current search input matches item in list
        // push to searchedArray
    // setSearch(searchedArray)
  }

  return (
    <div>
      <div>Hello for now</div>
      <Search searchHandler={searchHandler} />
      <Form />
      <ListView />
    </div>
  )
};


export default App;