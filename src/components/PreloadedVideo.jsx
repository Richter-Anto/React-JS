import React, { useRef, useState } from 'react'
import Video from "./jingle-bells-video.mp4";

const PreloadedVideo = () => {
    let [play, setPlay] = useState(true)
    let videoRef = useRef();
    let PlayorPause = () => {
        setPlay(!play)
        play === true ? videoRef.current.play() : videoRef.current.pause()
    }
  return (
      <section>
          <article>
              <div className='playerBlock'>
                  <h2>{ play === true ? "play" : "pause"}</h2>
              </div>
              <video src={Video} ref={videoRef} onClick={PlayorPause}></video>
          </article>
    </section>
  )
}

export default PreloadedVideo