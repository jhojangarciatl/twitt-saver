import React from 'react';
import './TwittCounter.css';

function TwittCounter({ total }) {
  return (
    <h2 className="TwittCounter">My twitts: {total}</h2>
  );
}

export { TwittCounter };
