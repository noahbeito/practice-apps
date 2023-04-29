import React from 'react';

const Checkout = ({ handleSetView }) => {

  // send get request with session_id
  // upon response render data

  const handleClick = () => {
    handleSetView('Home');
  }

  return (
    <div>
      <div>Show all input data</div>
      <button onClick={() => {handleClick()}}>Purchase</button>
    </div>
  )

}

export default Checkout;