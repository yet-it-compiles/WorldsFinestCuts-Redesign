/**
 * @module Header
 *
 * @description This file defines the Header component which is responsible for
 * rendering the website's header.
 *
 * @exports Header Functional component that returns the website header
 */

import React from "react";
import styles from "./header.module.scss";
import { PAGE_LINKS, ACCOUNT_LINKS } from "../../data/constants";

/**
 * @component Header
 *
 * @description This component renders the two distinct header sections. First
 * for general page navigation and another for actions such as account login or
 * profile access.
 *
 * @returns {JSX.Element}
 */
const Header = () => (
    <header className={styles.navigation}>
        <nav className={styles.pages}>
            <ul>
                {PAGE_LINKS.map((eachLink) => (
                    <li key={eachLink.name}>
                        <a
                            href={eachLink.href}
                            aria-label={`Navigate to ${eachLink.name}`}
                        >
                            {eachLink.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        <div className={styles.actions}>
            <ul>
                {ACCOUNT_LINKS.map((eachLink) => (
                    <li key={eachLink.name}>
                        <a
                            href={eachLink.href}
                            aria-label={`Navigate to ${eachLink.name} account section`}
                        >
                            {eachLink.icon && (
                                <span aria-hidden="true">{eachLink.icon}</span>
                            )}
                            <span className={styles.linkText}>
                                {eachLink.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </header>
);

export default Header;
