import React, { Component } from 'react';
import './Songs.css';
import { Route } from 'react-router-dom';
import Song from './Song/Song';

export default class Songs extends Component {
  state = {
    songs: [
      {
        id: 1,
        author: 'Johann Sebastian Bach',
        title: 'Invention No. 13 a-Moll',
        description: 'J S Bach was a great musician'
      },
      {
        id: 2,
        author: 'Georg Friedrich Händel',
        title: 'Sarabande d-Moll',
        description: 'G F Händel was a great musician'
      },
      {
        id: 3,
        author: 'Joseph Haydn',
        title: 'Sonate G-Dur',
        description: 'J Haydn was a great musician'
      },
      {
        id: 4,
        author: 'Wolfgang Amadeus Mozart',
        title: 'Sonate C-Dur',
        description: 'W A Mozart was a great musician'
      },
      {
        id: 5,
        author: 'Ludwig van Beethoven',
        title: 'Mondscheinsonate cis-Moll',
        description: 'L v Beethoven was a great musician'
      }
    ]
  };

  songSelectedHandler = id => {
    this.props.history.push(`/songs/${id}`);
  };

  render() {
    let songs = this.state.songs.map(song => {
      return (
        <Song
          key={song.id}
          author={song.author}
          title={song.title}
          description={song.description}
          clicked={() => this.songSelectedHandler(song.id)}
        />
      );
    });
    return (
      <div>
        <h1>Best of Pliano classics</h1>
        <section className='Songs'>{songs}</section>
        <Route path={this.props.match.url + '/:id'} exact component={Song} />
      </div>
    );
  }
}
