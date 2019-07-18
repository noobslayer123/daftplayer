import React, { useContext } from 'react';
import Context from '../../Context';

function Controls() {
  const { playBtnActive, toggleActive } = useContext(Context);

  return (
    <div className="controls">
      <div className="track">
        <h1>Self Conscious</h1>
        <h3>Kanye West</h3>
      </div>
      <div className="controls-buttons">
        <div className="col-1">
          <button className="shuffle" />
        </div>
        <div className="col-2">
          <button className="previous" />
        </div>
        <div className="col-3">
          <button
            onClick={toggleActive}
            className={playBtnActive ? 'play-active' : 'play-inactive'}
          />
        </div>
        <div className="col-4">
          <button className="next" />
        </div>
        <div className="col-5">
          <button className="repeat" />
        </div>
      </div>
      <div className="duration">
        <span id="current-time">0:01</span>
        <div className="progress-bar">
          <div className="progress" />
          <div className="bar" />
        </div>
        <span id="full-duration">4:20</span>
      </div>
    </div>
  );
}

export default Controls;
