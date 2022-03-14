import React from "react"
import './styles/About.css';
import man from './asset/alexis.jpg'
const  About=()=>{
    return(

        <section className="section-2">
            
            <h2 className="about-me">About Me</h2>
<div className="container-2">
<div className="image-cont">
            <img src={man}alt=""/>

    </div>
    <div className="text-2">
        <p>Front-End Developer</p>
        <p>React & Node js Developer</p>
        <p>UI& UX Desiger</p>
        <p>worked for ALIGHT,</p>
        <p>3 years of Developer experience</p>
        <p>Good Management, Communication</p>
        
        
    </div>


</div>
  </section>
        

    )
}
export default About;
