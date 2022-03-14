import React from "react"
import './styles/Testimonials.css';
import t1 from './asset/alexis1.PNG'
import t2 from './asset/alexis1.PNG'
import t3 from './asset/alexis1.PNG'

const  Test=()=>{
    return(

        <section className="test1">
            <h2>Testimonials</h2>
            <div className="cart-cont">

                <div className="cart">
                <img src={t1}alt=""/>
            <p>Gaetan</p>
            <h5> profession front-end developer , React Node js developer with 3 years
            of experience and 2 years in the same position</h5>

                </div>
                <div className="cart">
                <img src={t2}alt=""/>
            <p>Patric</p>
            <h5> profession front-end developer , React Node js developer with 3 years
            of experience and 2 years in the same position</h5>

                </div>
                <div className="cart">
                <img src={t3}alt=""/>
            <p>sarah</p>
            <h5> profession front-end developer , React Node js developer with 3 years
            of experience and 2 years in the same position</h5>

                </div>
            </div>

  </section>
        

    )
}
export default Test;