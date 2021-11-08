import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/ui-components/headers';
import CharacterGrid from './components/characters/character-grid';
import axios from 'axios';
import Search from './components/ui-components/search';

const App = () => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setState(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(val) => setQuery(val)} />
      <CharacterGrid isLoading={isLoading} state={state} />
    </div>
  );
};

export default App;
