import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ renderList }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = (word, definition) => {
    axios.post('/glossary', {
      word: word,
      definition: definition
    })
    .then(() => {
      return axios.get('/glossary')
    })
    .then((response) => {
      renderList(response.data);
      // curious as to why calling set word
      // and set definition here doenst work
      // to reset the input fields
    })
    .then(() => {
      setWord('');
      setDefinition('');
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
  <form>
    <label>
      Word:
      <input type="text" onChange={(e) => setWord(e.target.value)}></input>
    </label>
    <br />
    <label>
      Definition:
      <input type="text" onChange={(e) => setDefinition(e.target.value)}></input>
    </label>
    <button onClick={() => handleSubmit(word, definition)}>Submit</button>
  </form>
  )
}

export default Form;