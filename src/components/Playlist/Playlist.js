import React, { useContext } from 'react';
import Context from '../../Context';

function Playlist() {
  const { displayPlaylist, playlist } = useContext(Context);
  const tracks = playlist.map(song => {
    return <p key={song.id}>{song.title}</p>;
  });

  return (
    <section
      className="playlist"
      style={displayPlaylist ? { display: 'flex' } : { display: 'none' }}
    >
      {tracks}
    </section>
  );
}

export default Playlist;
