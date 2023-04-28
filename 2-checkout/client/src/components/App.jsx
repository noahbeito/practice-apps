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

  if (view === 'Home') {
    return (
        <Home setView={setView}/>
    )
  }

  if (view === 'F1') {
    return (
      <F1 setView={setView}/>
    )
  }

  if (view === 'F2') {
    return (
      <F2 setView={setView}/>
    )
  }

  if (view === 'F3') {
    return (
      <F3 setView={setView}/>
    )
  }

  if (view === 'Checkout') {
    return (
      <Checkout setView={setView}/>
    )
  }
};

export default App;