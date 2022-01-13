import React from 'react';
import './TwittList.css'

function TwittList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TwittList };
