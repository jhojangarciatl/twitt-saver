import React from 'react';
import { TwittCounter } from '../TwittCounter';
import { TwittInput } from '../TwittInput';
import { TwittList } from '../TwittList';
import { TwittItem } from '../TwittItem';

function AppUI({
  totalTwitts,
  searchValue,
  setSearchValue,
  saveTwitt,
  twitts,
}) {
  return (
    <React.Fragment>
      <TwittCounter
        total={totalTwitts}
      />
      <TwittInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        saveTwitt={saveTwitt}
      />

      <TwittList>
        {twitts.map(twitt => (
          <TwittItem
            key={twitt.text}
            text={twitt.text}
          />
        ))}
      </TwittList>
    </React.Fragment>
  );
}

export { AppUI };
