import React from 'react';

const Home = ( { setView }) => {

  const handleClick = () => {
    setView('F1');
  }
  return (
    <button onClick={() => {handleClick()}}>Checkout</button>
  )
};

export default Home;
