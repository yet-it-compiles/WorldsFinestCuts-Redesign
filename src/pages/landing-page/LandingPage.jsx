/**
 * @file LandingPage.jsx
 *  
 * @description This file is responsible for structuring the layout of the 
 * landing page
 *  
 * @requires react
 * @requires LandingPage.module.scss
 *  
 * @exports LandingPage
 */

import React from 'react';

import styles from "./landing.module.scss";
import logo from "../../assets/WFC-Logo.svg";
import Header from "../../components/header/Header";


/**
 * @component LandingPage
 *
 * @description Responsible for defining the landing page
 *
 * @returns {JSX.Element} The landing page
 */
const LandingPage = () => {
  return (
    <>
      <Header/>
      <main className={styles.landing}>
      <img src={logo} alt="World's Finest Cuts Logo" />
      
       <section className={styles.socials}>
        <div className={styles.decoration}></div>
          <p>Facebook Icon</p>
          <p>Twitter Icon</p>
          <p>Instagram Icon</p>
          <div className={styles.decoration}></div>
       </section>
      
      <section className={styles.content}>
        <h2>From The Ranch To Your Table</h2>
        <h1><span>Elevate Your Culinary Experience</span> <br/> With World's Finest Cuts</h1>
        <p>Discover a world of flavor with our premium, sustainably sourced <br/>meats and seafood, delivered fresh from our farms to your table.</p>

        <div>
          <button type="submit">Explore Our Selection</button>
        </div>
      </section>

      </main>
    </>
    
  );
};

export default LandingPage;