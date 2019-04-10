import React, { Component } from 'react';
import './Songs.css';

export default class Songs extends Component {
  state = {
    songs: [
      {
        id: 1,
        author: 'Johann Sebastian Back',
        title: 'Invention No. 13 a-Moll'
      },
      { id: 2, author: 'Georg Friedrich Händel', title: 'Sarabande d-Moll' },
      { id: 3, author: 'Joseph Haydn', title: 'Sonate G-Dur' },
      { id: 4, author: 'Wolfgang Amadeus Mozart', title: 'Sonate C-Dur' },
      {
        id: 5,
        author: 'Ludwig van Beethoven',
        title: 'Mondscheinsonate cis-Moll'
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Best of Pliano classics</h1>
        <section className='Songs'>
          {this.state.songs.map(song => {
            return (
              <article className='Song' key={song.id}>
                {song.author} : {song.title}
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}
