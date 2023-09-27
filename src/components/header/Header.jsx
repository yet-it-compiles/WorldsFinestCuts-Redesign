/**
 * @module Header
 *  
 * @description This file is responsible for defining the style and structure 
 * of the website header.
 *  
 * @exports Header
 */
import styles from './header.module.scss';

const PAGE_LINKS = [
    {name: "Home", path: "/"},
    {name: "Products", path: "/"},
    {name: "Values", path: "/"},
    {name: "Contact", path: "/"},
]

const ACCOUNT_LINKS = [
    {name: "Login 🎉", path: "/"},
    {name: "Register 🚀", path: "/"},
    {name: "Cart 🛒", path: "/", icon: ""},
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
          <section className={styles.links}>
              <ul>
                  {PAGE_LINKS.map((eachLink, index) => (
                      <li key={index}><p>{eachLink.name}</p></li>
                  ))}
              </ul>
          </section>
  
          <section className={styles.enrollment}>
              <ul>
                  {ACCOUNT_LINKS.map((eachLink, index) => (
                      <li key={index}><p>{eachLink.name}</p></li>
                  ))}
              </ul>
          </section>
    </nav>
  );
  
export default Header;