import React, { useState } from 'react';
import axios from 'axios';

const F2 = ({ handleSetView }) => {
  // state vars for each input
  const [ship1, setShip1] = useState('');
  const [ship2, setShip2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = () => {

    axios.put('/responses', {
      ship1: ship1,
      ship2: ship2,
      city: city,
      state: state,
      zip: zip,
      phone_number: phoneNumber
    })
    .then(() => {
      handleSetView('F3');
    })
    .catch((err) => {
      console.log(err);
    })

  }
  return (
    <div>
      <h2>Shipping Address:</h2>
      <label>Address Line 1:
        <input type="text" onChange={(e) => {setShip1(e.target.value)}}></input>
      </label>
      <br />
      <label>Address Line 2:
        <input type="text" onChange={(e) => {setShip2(e.target.value)}}></input>
      </label>
      <br />
      <label>City:
        <input type="text" onChange={(e) => {setCity(e.target.value)}}></input>
      </label>
      <br />
      <label>State:
        <input type="text" onChange={(e) => {setState(e.target.value)}}></input>
      </label>
      <br />
      <label>Zipcode:
        <input type="text" onChange={(e) => {setZip(e.target.value)}}></input>
      </label>
      <br />
      <label>Phone Number:
        <input type="text" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
      </label>
      <br />
      <button onClick={() => {handleClick()}}>Next</button>
    </div>
  )
};

export default F2;