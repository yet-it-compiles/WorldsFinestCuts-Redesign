/**
 * @module Footer.jsx
 *  
 * @description 
 *  
 * @since 0.1.0
 *  
 * @exports Footer
 */

import styles from './footer.module.scss';

/**
 * @component Footer
 *
 * @description 
 *
 * @returns {JSX.Element} 
 */
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>News Letter</p>
      <section>
        <h1>World's Finest Cuts</h1>
        <p>"From Pasture to Plate: Premium Selections Delivered"</p>
      </section>

      <section>
        <h1>Contact Us</h1>
        <address>Sage Road, Medford OR, 97501</address>
        <p>1+(541) 921 5917</p>
        <address href="mailto:worldsfinestcuts541@gmail.com">Sage Road, Medford OR, 97501</address>
      </section>

      <section>
        <h1>Working Hours</h1>
        <p>Monday thru Friday</p>
        <time datetime="10:00am - 8:00pm">10:00am - 8:00pm</time>
        <p>Saturday and Sunday</p>
        <time datetime="Closed">Delivery Day!</time>
      </section>
    </div>
  );
};
 
export default Footer;