// @flow

import React from 'react';
import Webcam from '../components/Webcam';

const Webcams = () => (
  <div className="App">
    <p className="App-intro">Kalush Web Cameras online:</p>
    <Webcam channel="1" />
    <Webcam channel="2" />
    <Webcam channel="3" />
    <Webcam channel="4" />
  </div>
);

export default Webcams;
