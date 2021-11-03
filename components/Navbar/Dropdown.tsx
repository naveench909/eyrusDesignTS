import React from 'react'
import styles from '../../styles/Dropdown.module.css'
function Dropdown() {
    return (
        <div className={styles.container}>
            <form>
                <select className={styles.select}>
                    <option>Washington, D.C.</option>
                    <option>Value 2</option>
                    <option>Value 3</option>
                </select>
            </form>
        </div>
    )
}

export default Dropdown
