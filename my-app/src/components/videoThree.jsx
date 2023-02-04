import "./index.css"
import videoTwo from "../assets/VideoTwo.mp4"

const VideoThree = ()=>{
    return(
      <div className="video-container">
        <video autoPlay  controls muted  height="100%"   className='video'>
          <source type='video/mp4' src={videoTwo} />
        </video>
      </div>  
    )
  
}

export default VideoThree