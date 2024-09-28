import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') return; // Prevent empty searches
    if (onSearch) onSearch(query);
    setQuery('');
  };

  return (
    <form className='search-bar my-8 text-center px-2 xs:mb-10 md:mb-16' onSubmit={handleSubmit}>
      <input
        type="text"
        name='search'
        className="search-box md:w-2/4 sm:p-4 xs:px-2"
        placeholder='Search News'
        value={query}
        onChange={handleChange}
        aria-label="Search News"
      />
      <button type='submit' className='btn'>Search</button>
    </form>
  );
}

export default Search;
