import React from "react"
import Cover from "../images/Manage-cover-img.png"

export default function MainContent(){
    return(
        <main>
            <section className="presentation">
                <div className="introdaction">
                    <div className="intro-text">
                        <h1>Bring everyone <br /> together to build <br /> better products</h1>
                        <p>
                            Manage makes it simple for software teams <br />
                            to plan day to day tasks while keeping the <br />
                            larger team goals in view
                        </p>
                        <a href="#">
                            <button className="btn2">Get Started</button>
                        </a>
                    </div>
                </div>
                <div className="cover">
                    <img src={Cover} alt="Img" />
                </div>
            </section>
        </main>
    )
}