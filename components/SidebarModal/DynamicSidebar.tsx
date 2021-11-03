import React from 'react'
import styles from './DynamicSidebar.module.css'
import { useGlobalContext } from '../context';

function DynamicSidebar() {
    
    const { menuValue , reporting , projectSetting , setSidebarValue} = useGlobalContext();

    let data;
    if(menuValue === "Reporting" ){
        data = reporting;
    }else{
        data = projectSetting;
    }

    const {headerContent} = data[0];
    const {bodyContent} = data[1];
    const {footerContent} = data[2];

    const getInnerText = (e) =>{
        // alert(e.target.innerText);
        setSidebarValue(e.target.innerText);
    }



    return (
        <div className={styles.mainContainer}>
            {headerContent.map((item)=>{
                const {head} = item;
                return(
                    <div className={styles.header} key={item.id}>
                        <div className={styles.title}>{head}</div>
                        <div style={{cursor:'pointer'}} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5625 10.3594H20.8125C20.9156 10.3594 21 10.275 21 10.1719V8.85938C21 8.75625 20.9156 8.67188 20.8125 8.67188H9.5625C9.45937 8.67188 9.375 8.75625 9.375 8.85938V10.1719C9.375 10.275 9.45937 10.3594 9.5625 10.3594ZM9.375 15.1406C9.375 15.2437 9.45937 15.3281 9.5625 15.3281H20.8125C20.9156 15.3281 21 15.2437 21 15.1406V13.8281C21 13.725 20.9156 13.6406 20.8125 13.6406H9.5625C9.45937 13.6406 9.375 13.725 9.375 13.8281V15.1406ZM21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.25C2.625 5.35312 2.70937 5.4375 2.8125 5.4375H21.1875C21.2906 5.4375 21.375 5.35312 21.375 5.25V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.5625H2.8125C2.70937 18.5625 2.625 18.6469 2.625 18.75V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.75C21.375 18.6469 21.2906 18.5625 21.1875 18.5625ZM2.70469 12.1617L6.36797 15.0469C6.50391 15.1547 6.70547 15.0586 6.70547 14.8852V9.11484C6.70547 8.94141 6.50625 8.84531 6.36797 8.95312L2.70469 11.8383C2.68006 11.8574 2.66012 11.882 2.64641 11.91C2.6327 11.938 2.62557 11.9688 2.62557 12C2.62557 12.0312 2.6327 12.062 2.64641 12.09C2.66012 12.118 2.68006 12.1426 2.70469 12.1617Z" fill="#262626"/>
                            </svg>
                        </div>
                    </div>
                )
            })}

            <div className={styles.body}>
                {bodyContent.map((item)=>{
                    const {id , head , icon } = item;
                    return(
                        <div className={styles.item} key={id} onClick={getInnerText}>
                            <img src={icon} />
                            <div className={styles.section}>{head}</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.footer}>
                {footerContent.map((item)=>{
                    return <div className={styles.category} key={item.id}>{item.head}</div>
                })}
            </div>

            
        </div>
    )
}

export default DynamicSidebar
