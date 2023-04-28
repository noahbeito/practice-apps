import React, { useState } from 'react';

const F1 = ( {setView} ) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (input, value) => {
    // can i use one func for all inputs??????? I think so
    // they cant type in all 3 at the same time... or can they
    if (input === 'name') {
      setName(value);
    } else if (input === 'email') {
      setName(value);
    } else if (input === 'password') {
      setName(value);
    }

  }

  const handleClick = () => {
    // handle next button click
    // should send post request to server with form data
    // upon response (then)
    // set state to F2
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
      <button>Next</button>
    </div>

  )
};

export default F1;