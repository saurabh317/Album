import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <h2 className={styles.head}>Album</h2>
            </nav>
        </>

    )
}

export default Header