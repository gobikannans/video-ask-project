import "./index.css"
import videoTwo from "../assets/VideoTwoo.mp4"

const VideoTwo = ()=>{
    return(
      <div className="video-container">
        <video autoPlay  controls muted height="100%"   className='video'>
          <source type='video/mp4' src={videoTwo} />
        </video>
      </div>  
    )
  
}

export default VideoTwo