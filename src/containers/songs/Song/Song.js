import React from 'react';

export default function Song(props) {
  return (
    <div>
      <h1>
        {props.author} : {props.song}
      </h1>
      <p>
        Here goes some nice description or even better... an image!!! to the
        notes. Wouldn't that be cool..?
      </p>
    </div>
  );
}
