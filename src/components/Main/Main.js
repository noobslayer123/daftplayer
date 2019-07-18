import React, { useContext } from 'react';
import PicSlider from './PicSlider';
import Controls from './Controls';
import ViewMore from '../ViewMore/ViewMore';
import Playlist from '../Playlist/Playlist';
import Context from '../../Context';

function Main() {
  const {
    toggleDisplayMore,
    toggleDisplayPlaylist,
    displayPlaylist
  } = useContext(Context);

  return (
    <>
      <section className="main">
        <div className="header">
          <div className="bg-image" />
          <div className="navigation">
            <button className="back" />
            {!displayPlaylist ? (
              <div className="album">
                <h4>ALBUM</h4>
                <h3>Unreleased</h3>
              </div>
            ) : (
              <div />
            )}
            {!displayPlaylist ? (
              <button className="more" onClick={toggleDisplayMore} />
            ) : (
              <div />
            )}
          </div>
          <PicSlider />
        </div>
        <Controls />
        <div className="footer">
          <button className="list-btn" onClick={toggleDisplayPlaylist} />
          <div className="info">
            <h4>Next</h4>
            <h3>
              Livin' In A Movie <span className="duration">4:20</span>
            </h3>
          </div>
        </div>
        <ViewMore />
        <Playlist />
      </section>
    </>
  );
}

export default Main;
