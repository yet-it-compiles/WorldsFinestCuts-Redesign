/**
 * @module AboutUs.jsx
 *
 * @description
 *
 * @exports AboutUs
 */

import styles from "./about.module.scss";
import logo from "../../assets/owner.svg";

/**
 * @component AboutUs
 *
 * @description
 *
 * @returns {JSX.Element} - An element that resembles
 */
const AboutUs = () => {
    return (
        <main className={styles.about}> 

            <div className={styles.container}>
                <aside><img src={logo} alt="Picture of the owner of World's Finest Cuts"></img></aside>
                <section>
                    <header>
                        <div className={styles.decoration}></div>
                        <h1>
                            <span>About</span> World’s Finest Cuts
                        </h1>
                    </header>
                    
                    <h2>
                        From Pasture to Plate: <br />
                        <span>Premium Selections Delivered</span>
                    </h2>

                    <p>
                        <span>Our mission is simple:</span> to bridge the gap between
                        the farm and your table with fresh, high-quality, and ethically
                        sourced meats and seafood. We champion the flavors of nature,
                        bringing to your kitchen a selection of products that are as
                        pure as they are palatable.
                    
                        <br/><br/>We are connoisseurs of the wholesome, with an array of
                        all-natural, grass-fed beef, free-range chicken, wild-caught
                        seafood, and cage-free pork. Our dedication to sustainability
                        means every dish you create is not just a meal but a step
                        towards a more responsible and flavorful future.
                    
                        <br/><br/>Join us on a culinary journey where quality reigns supreme, and
                        discover why every cut we offer is a cut above.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default AboutUs;
