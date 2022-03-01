
import React from 'react'
import './styles/Header.css';
const  Header = ()=>{
    return(
        <div className="header-container">
            <nav>
                <div className="logo">
                <h2>alexis.</h2>
                </div>
                <ul className="ul-item">
                    <li>
                        <a href="#">HOME</a>
                        </li>
                    <li>
                    <a href="#">About</a>
                    </li>

                    <li>
                    <a href="#">Portfolio</a>
                    </li>
                    <li>
                    <a href="#">Brog</a>
                    </li>
                    
                    <li>
                    <a href="#">Contact Us</a>
                    </li>
                    <li>
                    <a href="#">Login</a>
                    </li>
            
                </ul>
            </nav>
            
        </div>
    )
}
export default Header;