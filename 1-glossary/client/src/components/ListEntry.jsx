import React from 'react';
import axios from 'axios';

const ListEntry = ({entry, renderList}) => {

  const deleteHandler = (word) => {
    axios.delete('/glossary', {
      data: {
        word: word
      }
    })
      .then(() => {
        return axios.get('/glossary')
      })
      .then((response) => {
        renderList(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return(
    <div>
      <div>{entry.word}</div>
      <div>{entry.definition}</div>
      <button onClick={() => {deleteHandler(entry.word)}}>Delete</button>
    </div>
  )
}



export default ListEntry;