import React, { useState } from 'react';
import axios from 'axios';

const F3 = ({ handleSetView }) => {
  const [cc, setCc] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [zip, setZip] = useState('');

  const handleClick = () => {
    // send put request with new data and session_id
    axios.put('/responses/F3', {
      cc_number: cc,
      exp_date: expDate,
      cvv: cvv,
      billing_zip: zip
    })
    .then(() => {
      handleSetView('Checkout');
    })
    .catch((err) => {
      console.log(err);
    })

  }

  return (
    <div>
      <h2>Billing</h2>
      <br />
      <label>Credit Card Number:
        <input type="text" onChange={(e) => {setCc(e.target.value)}}></input>
      </label>
      <br />
      <label>Expiration Date:
        <input type="text" onChange={(e) => {setExpDate(e.target.value)}}></input>
      </label>
      <br />
      <label>CVV:
        <input type="text" onChange={(e) => {setCvv(e.target.value)}}></input>
      </label>
      <br />
      <label>Zipcode:
        <input type="text" onChange={(e) => {setZip(e.target.value)}}></input>
      </label>
      <br />
      <button onClick={() => {handleClick()}}>Next</button>
    </div>
  )
};


export default F3;