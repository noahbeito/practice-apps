import React from 'react';
import Search from './Search.jsx';
import ListEntry from './ListEntry.jsx';


const ListView = ( {list, renderList} ) => (
  <div>
    {list.map((entry) => (
      <div key={entry._id}>
      <ListEntry entry={entry} renderList={renderList}/>
      </div>
    ))}
  </div>
);


export default ListView;

