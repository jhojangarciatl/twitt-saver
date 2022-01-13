import React from 'react';
import './TwittInput.css';

function TwittInput({
  searchValue,
  setSearchValue,
  saveTwitt
}) {
  const [inputValue, saveValue] = React.useState('')
  const onSearchValueChange = (event) => {
    saveValue(event.target.value)
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if(event && event.key === 'Enter'){
      return saveTwitt({
        text: event.target.value
      })
    }
  }

  const handleSaveButton = () => {
    saveTwitt({
      text: inputValue
    })
  }

  return (
    <>
      <div className='TwittInputContainer'>
        <input
          className="TwittInput"
          placeholder="My Twitt"
          value={searchValue}
          onChange={onSearchValueChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className='TwittInputButton'
          onClick={handleSaveButton}
        >
          Save Twitt
        </button>
      </div>
    </>
  );
}

export { TwittInput };
