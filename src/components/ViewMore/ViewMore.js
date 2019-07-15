import React, { useContext } from 'react';
import Context from '../../Context';

function ViewMore() {
  const { displayMore } = useContext(Context);

  return (
    <section
      className="view-more"
      style={
        displayMore ? { opacity: 1 } : { opacity: 0, visibility: 'hidden' }
      }
    >
      <div className="track">
        <h1>Self Conscious</h1>
        <h3>kanye west</h3>
        <div className="separator">. . .</div>
      </div>
      <div className="track-controls">
        <button className="track-btn">Add to playlist</button>
        <button className="track-btn">Show album</button>
        <button className="track-btn">Share with friends</button>
      </div>
    </section>
  );
}

export default ViewMore;
