/**
 * @file LandingPage.jsx
 *
 * @description This file is responsible for structuring the layout of the
 * landing page
 *
 * @requires react
 * @requires landing.module.scss
 *
 * @exports LandingPage
 */

import React from "react";
import { Helmet } from "react-helmet";
import styles from "./landing.module.scss";
import logo from "../../assets/WFC-Logo.svg";
import Header from "../../components/header/Header";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
            <Helmet>
                <title>World's Finest Cuts - Premium Meat and Seafood</title>
                <meta
                    name="description"
                    content="Discover a world of flavor with World's Finest Cuts. Our premium, sustainably sourced meats and seafood are delivered fresh from our farms to your table."
                />
                <link rel="canonical" href="https://www.worldsfinestcuts.com" />
                <meta
                    property="og:title"
                    content="World's Finest Cuts - Premium Meat and Seafood"
                />
                <meta
                    property="og:description"
                    content="Explore our premium selection of meats and seafood. Sustainably sourced and delivered fresh."
                />
                <meta
                    property="og:image"
                    content="https://www.worldsfinestcuts.com/path-to-image.jpg"
                />
                <meta
                    property="og:url"
                    content="https://www.worldsfinestcuts.com"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Header />
            <main className={styles.landing}>
                <img src={logo} alt="World's Finest Cuts Logo" />

                <section className={styles.socials}>
                    <div className={styles.decoration}></div>
                    <section className={styles.icons}>
                        <a
                            href="https://www.facebook.com/worldsfinestcuts"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com/worldsfinestcuts"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com/worldsfinestcuts"
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                    </section>
                    <div className={styles.decoration}></div>
                </section>

                <section className={styles.content}>
                    <h2>From The Ranch To Your Table</h2>
                    <h1>
                        <span>Elevate Your Culinary Experience</span> <br />{" "}
                        with World's Finest Cuts
                    </h1>
                    <p>
                        Discover a world of flavor with our premium, sustainably
                        sourced <br />
                        meats and seafood, delivered fresh from our farms to
                        your table.
                    </p>

                    <div>
                        <button
                            type="button"
                            className={styles.ctaButton}
                            aria-label="Explore our selection of premium meats and seafood"
                        >
                            Explore Our Selection
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default LandingPage;
