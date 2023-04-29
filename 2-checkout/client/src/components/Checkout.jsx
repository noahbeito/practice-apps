import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = ({ handleSetView }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cc, setCc] = useState('');
  const [zip, setZip] = useState('');


  const handleClick = () => {
    handleSetView('Home');
  }
  // send get request with session_id
  // upon response render data

useEffect(() => {
  axios.get('/responses')
  .then((response) => {
    console.log('RESPONSE IN CHECKOUT: ', response)
    setName(response.data.name);
    setEmail(response.data.email);
    setAddress(`${response.data.ship_address_line_1} ${response.data.ship_address_line_2} ${response.data.ship_city} ${response.data.ship_state} ${response.data.ship_zip}`);
    setPhoneNumber(response.data.phone_number);
    setCc(response.data.cc_number);
    setZip(response.data.billing_zip);
  })
  .catch((err) => {
    console.log(err);
  })
}, []);

  return (
    <div>
      <h2>Review Purchase Details:</h2>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Ship To: {address}</div>
      <div>Phone Number: {phoneNumber}</div>
      <div>Credit Card: {cc}</div>
      <div>Billing Zip: {zip}</div>
      <button onClick={() => {handleClick()}}>Purchase</button>
    </div>
  )



}

export default Checkout;