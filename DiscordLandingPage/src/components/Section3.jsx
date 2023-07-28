import React from "react";
import last from "../pics/s5.svg"

export default function Section3(){
    return(
        <section className="s">
            <div className="text-div">
                <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
            </div>

            <div className="p-div">
                <p>
                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream <br />their games, or gather up and have a drawing session with screen share.
                </p>
            </div>

            <div className="img-div">
                <img src={last} alt="last" />
            </div>
            
            <br />
            <br /><br /><br /><br /><br />
            
            <h1 className="en">Ready to start your journey?</h1>

            <div className="btn-div2">
                <button className="download2">Download for Windows</button>
            </div>
        </section>
    )
}