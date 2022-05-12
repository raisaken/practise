import React, { useRef, useState } from "react";

function VideoPausePlay() {
  const [play, setPlay] = useState(false);
  const handleplay = () => {
    const next = !play;
    setPlay(next);
    if(next){
        ref.current.play()
    }else{
        ref.current.pause()

    }
  };
  const ref = useRef();
  return (
    <div>
      <button onClick={handleplay}>{play ? "Pause" : "play"}</button>
      <br />
      <video
        ref={ref}
        width="250"
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoPausePlay;
