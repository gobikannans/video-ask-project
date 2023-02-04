import {Component} from "react"
import "./index.css"

class Form extends Component{
    
    render(){
        return(
            <>
            <div className="form">
            <h1 className="heading">Before you go, please leave your contact details so we can get back to you...</h1>
            <form className="form-container">
                <input type="text" placeholder="*Your name" className="input"/>
                <input type="email" placeholder="*Your email" className="input"/>
                <div className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkbox-text">*[Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</span>
                </div>
                <button type="button" className="btn-send">
                Send your answer ⟶
                </button>
            </form>
            </div>
            </>
        )
    }
}

export default Form