import React from "react";
import Logo from "../images/Logo.svg";

export default function Footer(){
    return(
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <img src={Logo} alt="logo" />

                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Communuty</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <div className="to">
                    <input placeholder="Updates in your inbox.." type="text" className="entry" /> <button className="go">Go</button>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )
}