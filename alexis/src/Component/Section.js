import React from 'react'
import './styles/Section.css';
import man from './asset/alexis1.PNG'
const Section=()=>{
    return(
        <section className="main-section">
<div className="conteiner">
    <div className="texts">
        <h1 >Hello My Name Is:</h1>
        <h1 className="big"> mbonigaba alexis</h1>
        <p className="texts-p"> profession front-end developer and React Node js developer with 3 years
            of experience and 2 years in the same position
        </p>
        <button className="texts-button">My Work</button>
    </div>
    <div className="image">
<img src={man}alt=""/>

    </div>

</div>
</section>

    )
}
export default Section;
