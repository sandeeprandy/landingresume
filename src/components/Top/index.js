import "./index.css"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin  , } from 'react-icons/fa'
import { FaHtml5 , FaCss3Alt,FaBootstrap ,FaNodeJs ,FaPython   } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";


function Topcntr ()  { 
    return (
    <div className="topcntr"> 
    <div className="text"> 
    <h1>web resume</h1> 
    <h1>SANDEEP KUMAR DASARI</h1>
    <div  className="skilicons">
    <FaHtml5 size={80} style={{ margin: '10px' }} />
    <FaCss3Alt size={80} style={{ margin: '10px' }} />
    <IoLogoJavascript size={80} style={{ margin: '10px' }} />
    <FaBootstrap size={80} style={{ margin: '10px' }}/>
    <FaNodeJs size={80} style={{ margin: '10px' }} />
    <FaPython size={80} style={{ margin: '10px' }}/>
    <GrReactjs size={80} style={{ margin: '10px' }}/>
    <SiPostgresql   size={80} style={{ margin: '10px' }} />
 
  
</div>

      
    
    
    <div className="icons">      
        <FaTwitter size={50} style={{ margin: '10px' }} />
        <FaFacebook size={50} style={{ margin: '10px' }} />
        <FaInstagram size={50} style={{ margin: '10px' }} />
        <FaLinkedin size={50} style={{ margin: '10px' }} />
       
      

        

    </div> 
    </div>

    </div>
    )

} 

export default Topcntr