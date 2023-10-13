/**
 * @module AboutUs.jsx
 *
 * @description 
 * 
 * @exports AboutUs
 */

import styles from "./about.module.scss";

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
            <section>
                <h1>Who We Are</h1>
                <p>
                    At World’s Finest Cuts, we aim to provide unparalleled
                    access to fresh, high-quality, and ethically raised
                    products. We believe in fostering a connection between the
                    farm and your table, offering meats and seafood that are
                    harvested with profound respect for the environment and all
                    beings we share it with. Our commitment is to enrich your
                    culinary journey with the purest flavors of nature, ensuring
                    every dish is a testament to quality and sustainability. Our
                    specialty lies in delivering a diverse range of products
                    including all-natural, grass-fed, grain-finished beef;
                    free-range chicken; wild-caught seafood; and cage-free pork.
                    We take pride in being the connoisseurs of wholesome and
                    flavorful experiences, offering a myriad of choices that
                    guarantee something extraordinary for every palate. So with
                    that, we welcome you to a world where every cut is a cut
                    above the rest. Welcome to World’s Finest Cuts. Explore,
                    indulge, and prepare to be wowed!
                </p>
            </section>
        </main>
    );
};
export default AboutUs;
