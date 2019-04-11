import React from 'react';

export default function Song(props) {
  console.log('££$$: ', props);
  return (
    <div onClick={props.clicked}>
      <h2>{props.author}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
