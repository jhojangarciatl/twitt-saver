import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  const [twitts, saveTwitts] = useLocalStorage('twitts', []);
  const [searchValue, setSearchValue] = useLocalStorage('input_value');

  const totalTwitts = twitts.length;

  const saveNewTwitt = twitt => {
    const newTwitt = twitts;
    newTwitt.push(twitt);
    saveTwitts(newTwitt);
    setSearchValue('');
  };

  return [
    <AppUI
      totalTwitts={totalTwitts}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      saveTwitt={saveNewTwitt}
      twitts={twitts}
    />,
  ];
}

export default App;
