import React from 'react'
import styles from './emailSubscription.module.css'

type EmailSubscriptionProps = {
    header : {
        id: string,
        headerContent : {
            id:number,
            head:string
        }[]
    }
    body : {
        id: number,
        bodyContent: {
            id:number,
            icon: string,
            company:string,
            date:string
        }[]    
    }
}

function EmailSubscription(props :EmailSubscriptionProps) {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                Email Subscriptions
                <button>Save</button>
            </div>
            <div className={styles.searchBar}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 14L10 10L14 14ZM11.3333 6.66667C11.3333 7.2795 11.2126 7.88634 10.9781 8.45252C10.7436 9.01871 10.3998 9.53316 9.9665 9.9665C9.53316 10.3998 9.01871 10.7436 8.45252 10.9781C7.88634 11.2126 7.2795 11.3333 6.66667 11.3333C6.05383 11.3333 5.447 11.2126 4.88081 10.9781C4.31462 10.7436 3.80018 10.3998 3.36683 9.9665C2.93349 9.53316 2.58975 9.01871 2.35523 8.45252C2.12071 7.88634 2 7.2795 2 6.66667C2 5.42899 2.49167 4.242 3.36683 3.36683C4.242 2.49167 5.42899 2 6.66667 2C7.90434 2 9.09133 2.49167 9.9665 3.36683C10.8417 4.242 11.3333 5.42899 11.3333 6.66667Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Search a Company</span>
            </div>
            <div className={styles.table}>
                <div className={styles.headerItem}>
                    {props.header.headerContent.map((item)=>{
                        const {id , head} = item;
                        return(
                            <div className={styles.item} key={id}>
                                <div className={styles.head}>{head}</div>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.bodyItem}>
                    {props.body.bodyContent.map((item)=>{
                    const {id , icon , company , date} = item;
                        return(
                            <div className={styles.item} key={id}>
                                <div className={styles.company}>{company}</div>
                                <div className={styles.date}>{date}</div>
                                <img className={styles.icon} src={icon} />
                            </div>
                        )
                    })}
                </div>

                <div className={styles.footer}>
                    <span>11 Results</span>
                    <div className={styles.btnSection}>
                        <button className={styles.previous}>Previous</button>
                        <button className={styles.next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
}

export default EmailSubscription
