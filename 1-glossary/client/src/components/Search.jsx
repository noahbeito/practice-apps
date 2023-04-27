import react, { useState } from 'react';


const Search = ( {searchHandler} ) => {

  return (
    <div>
      <input type="text" onChange={(e) => {
        searchHandler(e.target.value);
      }}></input>
      <button>Search</button>
    </div>
  )
}


export default Search;