import React from 'react';
import Search from './Search.jsx';
import ListEntry from './ListEntry.jsx';


const ListView = ( {list} ) => (
  <div>
    {list.map((entry) => (
      <div key={entry._id}>
      <ListEntry entry={entry}/>
      </div>
    ))}
  </div>
);


export default ListView;

