import React from 'react'
import styles from './Sidebar.module.css'
import DynamicSidebar from './DynamicSidebar'
function Sidebar() {
    return (
        <div className={styles.mainContainer}>
            <DynamicSidebar />
        </div>
    )
}

export default Sidebar
