import { useState } from 'react';

const Search = ({ getQuery }) => {
  const [inputexte, setInputexte] = useState('');

  const handleChange = (value) => {
    setInputexte(value);
    getQuery(value);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={inputexte}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
