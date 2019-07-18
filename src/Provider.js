import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  state = {
    playlist: [
      {
        id: 1,
        artist: 'Kanye West',
        title: "Livin' In A Movie",
        duration: '3:27'
      },
      {
        id: 2,
        artist: 'Kanye West',
        title: 'Dark Fantasy',
        duration: '5:12'
      },
      {
        id: 3,
        artist: 'Kanye West',
        title: 'All of the Lights',
        duration: '2:54'
      },
      {
        id: 4,
        artist: 'Kanye West',
        title: 'So Appalled',
        duration: '3:51'
      },
      {
        id: 5,
        artist: 'Kanye West',
        title: 'Devil in a New Dress',
        duration: '4:51'
      },
      {
        id: 6,
        artist: 'Kanye West',
        title: 'Runaway',
        duration: '3:46'
      },
      {
        id: 7,
        artist: 'Kanye West',
        title: 'Hell of a Life',
        duration: '3:09'
      },
      {
        id: 8,
        artist: 'Kanye West',
        title: 'Blame Game',
        duration: '7:02'
      },
      {
        id: 9,
        artist: 'Kanye West',
        title: 'Lost in the World',
        duration: '3:37'
      },
      {
        id: 10,
        artist: 'Kanye West',
        title: 'Who Will Survive in America',
        duration: '3:11'
      }
    ],

    displayMore: false,
    displayPlaylist: false,
    playBtnActive: false,
    currentSong: 0
  };

  //   componentDidMount() {
  //     this.getTracks();
  //   }

  //   getTracks() {
  //     fetch(
  //       'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=kanyewest&api_key=c9207c7776b4f25665b60b1d97afc20f&format=json'
  //     )
  //       .then(res => res.json())
  //       .then(data => this.setState({ playlist: data.toptracks.track }));
  //   }

  render() {
    const {
      displayMore,
      displayPlaylist,
      playlist,
      currentSong,
      playBtnActive
    } = this.state;
    const toggleDisplayMore = () => {
      this.setState({ displayMore: !displayMore });
    };
    const toggleDisplayPlaylist = () => {
      this.setState({ displayPlaylist: !displayPlaylist });
    };
    const toggleActive = () => {
      this.setState({ playBtnActive: !playBtnActive });
    };

    return (
      <Context.Provider
        value={{
          displayMore,
          displayPlaylist,
          playlist,
          currentSong,
          playBtnActive,
          toggleDisplayMore,
          toggleDisplayPlaylist,
          toggleActive
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
