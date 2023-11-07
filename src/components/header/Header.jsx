/**
 * @module Header
 *  
 * @description This file is responsible for defining the style and structure 
 * of the website header.
 *  
 * @exports Header
 */
import styles from './header.module.scss';
import {TiShoppingCart} from 'react-icons/ti';
import {RiAccountPinCircleLine} from 'react-icons/ri';


const PAGE_LINKS = [
    {name: "About Us", path: "/"},
    {name: "Explore Menu", path: "/"},
    {name: "Contact", path: "/"},
]

const ACCOUNT_LINKS = [
    {name: "Login", path: "/", icon: <RiAccountPinCircleLine/>},
    {name: "Cart", path: "/", icon: <TiShoppingCart/>},
]

/**
 * @component Header
 *
 * @description 
 *
 * @returns {JSX.Element} 
 */
const Header = () => (
    <nav className={styles.navigation}>
          <section className={styles.pages}>
              <ul>
                  {PAGE_LINKS.map((eachLink, index) => (
                      <li key={index}><p>{eachLink.name}</p></li>
                  ))}
              </ul>
          </section>
  
          <section className={styles.actions}>
              <ul>
                  {ACCOUNT_LINKS.map((eachLink, index) => (
                      <li key={index}><p>{eachLink.icon} {eachLink.name}</p></li>
                  ))}
              </ul>
          </section>
    </nav>
  );
  
export default Header;