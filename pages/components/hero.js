import React from 'react'
import styles from "@/styles/Home.module.css";



const Hero = () => {
    return (
        <>
            <header className={styles.masthead}>
                <div className="container">
                    <div className={styles.mastheadSubheading}>Welcome To Our Studio!</div>
                    <div className={`${styles.mastheadHeading} text-uppercase`}>It's Nice To Meet You</div>
                    <a className="btn btn-warning btn-xl text-uppercase" href="#services">Tell Me More</a>
                </div>
            </header>
        </>
    )
}

export default Hero