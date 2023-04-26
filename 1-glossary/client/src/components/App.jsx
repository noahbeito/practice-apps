import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Form from './Form.jsx';
import ListView from './ListView.jsx';
import axios from 'axios';

const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // get request to the database
    axios.get('/glossary')
      .then((response) => {
        setList(response.data);
      })
    // upon response, setList with array of data
  }, []);

  const searchHandler = () => {
    // create searchedArray
    // iterate list
      // if current search input matches item in list
        // push to searchedArray
    // setSearch(searchedArray)
  }

  const renderList = (newList) => {
    setList(newList);
  }

  return (
    <div>
      <div>Hello for now</div>
      <Search searchHandler={searchHandler} />
      <Form renderList={renderList}/>
      <ListView list={list} renderList={renderList}/>
    </div>
  )
};


export default App;