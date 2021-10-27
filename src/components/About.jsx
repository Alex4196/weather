import React from "react";
import styles from "./About.module.css";
import image from "./link.png"

export default function About() {
    return (
        <>  
            <div className={styles.bgimage}></div>
            <div className={styles.text}>
                <p  className={styles.parrafo} >Hi, my name is Alex Goumaz, I am a student at "Hola soy Henry"   <br />
                training me to become a web full stack devoloper so I create <br />
                     my first react-redux app, I expect you to enjoy. </p>
            </div>
            <div className={styles.linkedin}>
                <a  href="http://www.linkedin.com/in/alex-goumaz-bb2077117" >
                <img className={styles.img} src={image} />
                </a>
            </div>
        </>
    );
}