import React, { useState } from 'react';
import axios from 'axios';

const F1 = ( {handleSetView} ) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (input, value) => {
    // can i use one func for all inputs??????? I think so
    // they cant type in all 3 at the same time... or can they
    if (input === 'name') {
      setName(value);
    } if (input === 'email') {
      setEmail(value);
    } else if (input === 'password') {
      setPassword(value);
    }

  }

  const handleClick = () => {
    // handle next button click
    console.log('NAME: ', name);
    console.log('EMAIL: ', email);
    console.log('PASSWORD: ', password);

    // should send post request to server with form data
    axios.post('/responses', {
      name: name,
      email: email,
      password: password
    })
    .then(() => {
      // upon response (then)
      // set state to F2
      handleSetView('F2');
    })
  }

  return (
    <div>
      <label> Name:
        <input type="text" onChange={(e) => {handleChange('name', e.target.value)}}></input>
      </label>
      <br />
      <label> Email:
        <input type="text" onChange={(e) => {handleChange('email', e.target.value)}}></input>
      </label>
      <br />
      <label> Password:
        <input type="text" onChange={(e) => {handleChange('password', e.target.value)}}></input>
      </label>
      <br />
      <button onClick={() => {handleClick()}}>Next</button>
    </div>

  )
};

export default F1;