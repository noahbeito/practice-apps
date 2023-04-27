import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Form from './Form.jsx';
import ListView from './ListView.jsx';
import axios from 'axios';

const App = () => {
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState(list);
  const [showSearchList, setShowSearchList] = useState(false);

  useEffect(() => {
    axios.get('/glossary')
      .then((response) => {
        setList(response.data);
      })
  }, []);

  const searchHandler = (input) => {
    let searched = [];
    list.forEach((word, index) => {
      let currWord = word.word.toLowerCase();
      input = input.toLowerCase();
      if (currWord.includes(input)) {
        searched.push(word);
      }
    })
    setSearchList(searched);
    setShowSearchList(true);
    if (input === '') {
      setShowSearchList(false);
    }
  }

  const renderList = (newList) => {
    setList(newList);
  }

  const showList = () => {
    if (!showSearchList) {
      return list;
    } else {
      return searchList;
    }
  }

  return (
    <div>
      <h1>Glossary</h1>
      <Search searchHandler={searchHandler} />
      <Form renderList={renderList}/>
      <ListView list={showList()} renderList={renderList}/>
    </div>
  )
};


export default App;