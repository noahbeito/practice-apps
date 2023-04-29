import React from 'react';

const Home = ( { handleSetView }) => {

  return (
    <button onClick={() => {handleSetView('F1')}}>Checkout</button>
  )
};

export default Home;
