import { useRef } from "react"
import React,{useState} from "react"
import VideoOne from "./components/videoOne"
import VideoTwo from "./components/videoThree"
import VideoThree from "./components/VideoTwo"

import Form from "./components/Form"
import './App.css'

function App() {
    const [showText,setShowText]=useState(false)
    const [showCampaign,setShowCampaign]=useState(false)
    const [showWebinar,setShowWebinar]=useState(false)
    const [showFormCampaign,setShowFormCampaign]=useState(false)
    const [showFormWebinar,setShowFormWebinar]=useState(false)


    const onClick=()=>setShowText(true);
    const onClickCampaign=()=>setShowCampaign(true);
    const onClickWebinar=()=>setShowWebinar(true);
    const onClickSmallCampaign=()=>setShowFormCampaign(true);
    const onClickSmallWebinar=()=>setShowFormWebinar(true);

    const bgContainerTwo=useRef(null);
    const bgContainerThree=useRef(null);


    const scrollToSection=(elementRef)=>{
        window.scrollTo({
         top:elementRef.current.offsetTop,
         behavior:"smooth"
            })   
        }
    
        window.onbeforeunload=function () {
            window.scrollTo(0, 0);
        }


        return(
            <>
            <div className="bg-container">
            <VideoOne />

            <div className="details-container">
            <div className="btn-first-container">
            <div >
            <button className="btn-style" onClick={()=>scrollToSection(bgContainerTwo)} >
              <span className="icon-style">A</span>
              <span className="text">Campaign structure</span>
              </button>
            </div>
            <div  onClick={onClick}>
            <button className="btn-style" onClick={()=>scrollToSection(bgContainerThree)} > <span className="icon-style">B</span>
              <span className="text">Learn Facebook basics</span></button>
            </div>
            <div>
            <button className="btn-style" onClick={()=>scrollToSection(bgContainerTwo)}> <span className="icon-style">C</span>
              <span className="text">3rd choice</span></button>
            </div>
            </div>
            </div> 
            </div>

        <>{showText?"null":<div ref={bgContainerTwo} className="bg-container-two">
            <VideoTwo />
            
                {showCampaign?<Form/>:<div className="details-two-container">
                <div className="btn-container">
                    <div className="btn-details-large" >
                    <button className="section-btn-style" onClick={onClickCampaign} >
              <span>Download "Campaign Structure Guide"</span>
              </button> 
                    </div>
                </div>
                {showFormCampaign?
                <div className="content">
                    <Form/></div>:
                <div className="btn-container-small" >
                    <div className="btn-details-small" >
                    <button className="section-btn-style" onClick={onClickSmallCampaign} >
                    Download "Campaign Structure Guide"
              </button> 
                    </div>
                </div>}
                </div>}

                
                </div>
            }
            </>
        
            <div ref={bgContainerThree} className="bg-container-two">
                <VideoThree/>
                {showWebinar?<Form/>:<div className="details-two-container">
                <div className="btn-container">
                    <div className="btn-details-large">
                    <button className="section-btn-style" onClick={onClickWebinar}>
              <span>Sign up for free webinar  </span>
              </button> 
                    </div>
                </div>
                {showFormWebinar?
                <div className="content">
                    <Form/></div>:
                <div className="btn-container-small" >
                    <div className="btn-details-small" >
                    <button className="section-btn-style" onClick={onClickSmallWebinar} >
                    Sign up for free webinar
              </button> 
                    </div>
                </div>}
                </div>}
            </div>
            </>
        )
    
}

export default App