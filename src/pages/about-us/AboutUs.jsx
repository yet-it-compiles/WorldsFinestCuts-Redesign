/**
 * @module AboutUs.jsx
 *
 * @description A component that provides information about the World's Finest
 * Cuts company, its mission, and its products.
 *
 * @exports AboutUs
 */

import React from "react";
import { Helmet } from "react-helmet";
import styles from "./about.module.scss";
import logo from "../../assets/owner.svg";

/**
 * @component AboutUs
 *
 * @description Displays company information and its commitment to quality.
 *
 * @returns {JSX.Element} - An element that resembles
 */
const AboutUs = () => {
    return (
        <main className={styles.about}>
            <Helmet>
                <title>About Us - World’s Finest Cuts</title>
                <meta
                    name="description"
                    content="Learn about World's Finest Cuts, our mission, and our premium meat selections."
                />
            </Helmet>
            <div className={styles.container}>
                <aside role="complementary">
                    <img
                        src={logo}
                        alt="The owner of World's Finest Cuts smiling"
                        role="img"
                        aria-label="Owner of World's Finest Cuts"
                    />
                </aside>

                <section aria-labelledby="about-header">
                    <header>
                        <div
                            className={styles.decoration}
                            role="presentation"
                        ></div>
                        <h1>
                            <span>About</span> World’s Finest Cuts
                        </h1>
                    </header>

                    <h2>
                        From Pasture to Plate: <br />
                        <span>Premium Selections Delivered</span>
                    </h2>

                    <p>
                        <span>Our mission is simple:</span> to bridge the gap
                        between the farm and your table with fresh,
                        high-quality, and ethically sourced meats and seafood.
                        We champion the flavors of nature, bringing to your
                        kitchen a selection of products that are as pure as they
                        are palatable.
                        <br />
                        <br />
                        We are connoisseurs of the wholesome, with an array of
                        all-natural, grass-fed beef, free-range chicken,
                        wild-caught seafood, and cage-free pork. Our dedication
                        to sustainability means every dish you create is not
                        just a meal but a step towards a more responsible and
                        flavorful future.
                        <br />
                        <br />
                        Join us on a culinary journey where quality reigns
                        supreme, and discover why every cut we offer is a cut
                        above.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default AboutUs;
