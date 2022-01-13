import React from 'react';
import './TwittItem.css';

function TwittItem(props) {
  return (
    <li className="TwittItem">
      <p className={`TwittItem-p ${props.completed && 'TwittItem-p--complete'}`}>
        {props.text}
      </p>
    </li>
  );
}

export { TwittItem };
