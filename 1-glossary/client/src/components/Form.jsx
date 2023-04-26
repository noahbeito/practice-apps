import React, { useState } from 'react';

const Form = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = () => {
    // send an axios POST request to our server with word & definition
  }

  return (
  <div>
    <label>
      Word:
      <input type="text" onChange={(e) => setWord(e.target.value)}></input>
    </label>
    <br />
    <label>
      Definition:
      <input type="text" onChange={(e) => setDefinition(e.target.value)}></input>
    </label>
    <button onClick={() => handleSubmit()}>submit</button>
  </div>
  )
}

export default Form;