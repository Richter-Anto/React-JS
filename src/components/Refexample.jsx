import React, {useRef, useState} from 'react'

const Refexample = () => {
    let cameraRef = useRef();
    let [state, setState] = useState(true);
    let onCamera = () => {
        setState(!state);
        if (state) {
            window.navigator.mediaDevices.getUserMedia({
                audio: true,
                video: { width: "1200px", height: "800px" },
            })
                .then(stream => {
                    cameraRef.current.srcObject = stream;
                    cameraRef.current.play();
                })
                .catch(err => console.log(err));
        } else {
            console.log(state);
        }
    }
  return (
      <div>
          <video ref={cameraRef}></video>
          <div style={{ display: "flex", flexDirection: "column" }}></div>
          <button onClick={onCamera}>play</button>
    </div>
  )
}

export default Refexample