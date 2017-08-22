// @flow

import React from 'react';

const Webcam = ({channel}: { channel: string }) => (
    <object type="application/x-shockwave-flash" data="/dist/RtmpPlayer.swf"
            width="640" height="360">
      <param name="allowfullscreen" value="true"/>
      <param name="flashvars"
             value={`streamer=rtmp://dog.oko.kim/dog&file=ch${channel}`}/>
    </object>
  );

export default Webcam;
