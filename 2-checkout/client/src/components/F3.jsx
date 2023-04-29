import React from 'react';

const F3 = ({ handleSetView }) => {

  // states for input fields

  const handleClick = () => {
    // send put request with new data and session_id
    // then
    handleSetView('Checkout');
  }

  return (
    <div>
      <h2>Billing</h2>
      <br />
      <label>Credit Card Number:
        <input type="text"></input>
      </label>
      <br />
      <label>Expiration Date:
        <input type="text"></input>
      </label>
      <br />
      <label>CVV:
        <input type="text"></input>
      </label>
      <br />
      <label>Zipcode:
        <input type="text"></input>
      </label>
      <br />
      <button onClick={() => {handleClick()}}>Next</button>
    </div>
  )
};


export default F3;