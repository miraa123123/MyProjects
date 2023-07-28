import React, { useCallback, useState } from "react";
import logo from "../pics/logo.png"
import menu from "../pics/icon-hamburger.svg"
import close from "../pics/icon-close.svg"

export default function Header(){

    const [open, setopen] = useState(false)

    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" /> <h2>Discord</h2>
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link">Download</li>
                    <li className="nav-link">Nitro</li>
                    <li className="nav-link">Discover</li>
                    <li className="nav-link">Safety</li>
                    <li className="nav-link">Support</li>
                    <li className="nav-link">Blog</li>
                    <li className="nav-link">Career</li>
                </ul>
            </nav>

        { open &&   <div class="more">
            <div id="more-container" class="more-container">
            <li className="nav-link">Download</li>
                    <li className="nav-link-mobile">Nitro</li>
                    <li className="nav-link-mobile">Discover</li>
                    <li className="nav-link-mobile">Safety</li>
                    <li className="nav-link-mobile">Support</li>
                    <li className="nav-link-mobile">Blog</li>
                    <li className="nav-link-mobile">Career</li>
            </div>
          </div>
}

            <div className="cart">
                <button className="btn">Open Discord</button>
                <img onClick={() => setopen(!open)} src={open ? close : menu} className="menu" alt="menu" />
            </div>
        </header>
    )
}