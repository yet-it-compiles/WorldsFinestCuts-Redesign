/**
 * @file LandingPage.jsx
 *  
 * @description This file is responsible for 
 *  
 * @requires react
 * @requires LandingPage.module.scss
 *  
 * @exports LandingPage
 */

import React, { useState } from 'react';

import styles from "./landing.module.scss";
import Header from "../../components/header/Header";

/**
 * @component LandingPage
 *
 * @description Responsible for 
 * Accomplished by 
 *
 * @returns {JSX.Element} An element that resembles 
 */
const LandingPage = () => {
  return (
    <>
      <Header/>
      <main className={styles.landing}>
      <section>
        <h1>Elevate Your Culinary Experience <br/> With World's Finest Cuts</h1>
        <h2>Discover a world of flavor with our premium, sustainably sourced <br/>meats and seafood, delivered fresh from our farms to your table.</h2>

        <button type="submit">Explore Our Selection</button>
      </section>
    </main>
    </>
    
  );
};
export default LandingPage;