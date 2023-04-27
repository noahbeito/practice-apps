import React, { useState } from 'react';
import axios from 'axios';

const ListEntry = ({entry, renderList}) => {
  const [edit, setEdit] = useState(false);
  const [wordEdit, setWordEdit] = useState(entry.word);
  const [definitionEdit, setDefinitionEdit] = useState(entry.definition);

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

  const handleEdit = (id, word, definition) => {
    // axios PUT request
      // honestly the way we have set up the post request that might work too lets try that first

    axios.put('/glossary', {
      _id: id,
      word: word,
      definition: definition
    })
    .then(() => {
      return axios.get('/glossary')
    })
    .then((response) => {
      renderList(response.data);
      setEdit(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  if (!edit) {
    return (
      <div>
        <div>{entry.word}</div>
        <div>{entry.definition}</div>
        <button onClick={() => {deleteHandler(entry.word)}}>Delete</button>
        <button onClick={() => {setEdit(true)}}>Edit</button>
      </div>
    )
  }

  if (edit) {
    return (
      <div>
        <input type="text" onChange={(e) => {setWordEdit(e.target.value)}}defaultValue={entry.word}></input>
        <br />
        <input type="text" onChange={(e) => {setDefinitionEdit(e.target.value)}}defaultValue={entry.definition}></input>
        <button onClick={() => {handleEdit(entry._id, wordEdit, definitionEdit)}}>✔</button>
        <button onClick={() => {setEdit(false)}}>✘</button>
      </div>
    )
  }
}



export default ListEntry;