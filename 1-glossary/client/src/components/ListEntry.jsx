import React from 'react';

const ListEntry = ({entry}) => (
  <div>
    <div>{entry.word}</div>
    <div>{entry.definition}</div>
  </div>
)


export default ListEntry;