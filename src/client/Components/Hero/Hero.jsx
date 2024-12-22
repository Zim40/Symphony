import "./hero.css";
import Button from "../button/button";
export default function Hero (props) {
    return (
        <>
         <div id="hero-img">
            <div className="hero-text-container">
            <h1 id="hero-h1">{props.h1}</h1>
            <h2 id="hero-h2">{props.h2}</h2>
                <ul id="hero-nav">
                    <li>{props.geo1}</li>
                    <li>{props.geo2}</li>
                    <li>{props.geo3}</li>
                    <li>{props.geo4}</li>
                </ul>
            </div>
        </div>
        </>
    )
};