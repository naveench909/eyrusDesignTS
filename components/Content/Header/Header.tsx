import React from 'react'
import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <button className={styles.todaybtn}>Today</button>
                <button className={styles.newViewbtn}>New View</button>
            </div>

            <div className={styles.second}>
                <button className={styles.exportBtn}>Export</button>
            </div>
        </div>
    )
}

export default Header
