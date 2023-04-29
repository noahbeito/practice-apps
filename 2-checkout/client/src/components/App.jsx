import React, { useState } from 'react';
import Home from './Home.jsx';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';
import Checkout from './Checkout.jsx';

const App = () => {
  const [view, setView] = useState('Home');

  // this current set up will revert back to the home page on a page refresh
  // first thought to persist view state is save it in the DB? send get request upon load
  // in a useEffect? should work. ******* come back to this
  const handleSetView = (view) => {
    setView(view);
  }


  if (view === 'Home') {
    return (
        <Home handleSetView={handleSetView}/>
    )
  }

  if (view === 'F1') {
    return (
      <F1 handleSetView={handleSetView}/>
    )
  }

  if (view === 'F2') {
    return (
      <F2 handleSetView={handleSetView}/>
    )
  }

  if (view === 'F3') {
    return (
      <F3 handleSetView={handleSetView}/>
    )
  }

  if (view === 'Checkout') {
    return (
      <Checkout handleSetView={handleSetView}/>
    )
  }
};

export default App;