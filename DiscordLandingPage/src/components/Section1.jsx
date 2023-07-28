import React from "react";

export default function Section1(props){



    return(
        <main>
            <section  className="presentation">
                <div className="cover">
                    <img src={props.src} alt="img" />
                </div>
                <div className="introdaction">
                    <div className="intro-text">
                    <h1>{props.title}</h1>

                    <p>
                    {props.p}
                    </p>
                    </div>
                </div>
            </section>
        </main>
    )
}