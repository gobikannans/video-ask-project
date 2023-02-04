import "./index.css"
import videoOne from "../assets/VideoOne.mp4"

const VideoOne = ()=>{
    return(
      <div className="video-container">
        <div className="overlay">
        </div>
        <div className="video-content">
          <h1 className="video-text">Welcome</h1>
        </div>
        <video  autoPlay  controls muted   className='video' >
          <source type='video/mp4' src={videoOne} />
        </video>
       
      </div>  
    )
  
}

export default VideoOne