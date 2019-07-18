import React, { useContext } from 'react';
import Context from '../../Context';

function Playlist() {
  const { toggleDisplayPlaylist, displayPlaylist, playlist } = useContext(
    Context
  );
  const tracks = playlist.map(song => {
    return (
      <div className="song" key={song.id}>
        <div className="song-id"> {song.id}. </div>
        <div className="song-title"> {song.title} </div>
        <div className="song-duration"> {song.duration} </div>
      </div>
    );
  });

  return (
    <section
      className="playlist"
      style={
        displayPlaylist
          ? { height: '893px', opacity: '1' }
          : { height: '0', opacity: '0' }
      }
    >
      {tracks}
      <button className="hide" onClick={toggleDisplayPlaylist} />
    </section>
  );
}

export default Playlist;
