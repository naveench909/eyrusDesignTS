import React from 'react'
import styles from './progress.module.css';
import { DatePicker, Space } from 'antd';
import Filter from './Filter';
import SearchBar from './SearchBar';
import TableSetting from './TableSetting';

type ProgressProps = {
    header : {
        id : number,
        headerContent: {
            id : number,
            head: string
        }[]
    },
    body : {
        id : number,
        bodyContent: {
            id : number,
            div: string,
            company: string,
            peopleCnt: number
        }[]
    }
}
function Progress(props: ProgressProps) {

    function onChange(date, dateString) {
       console.log(date, dateString);
    }

    return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.first}>
                <div className={styles.firstText}>
                    Today
                </div>

                <div className={styles.firstNewView}>
                    <div className={styles.newViewChild}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41406 2.96875H10.5859C10.6901 2.96875 10.7422 3.02083 10.7422 3.125V16.875C10.7422 16.9792 10.6901 17.0312 10.5859 17.0312H9.41406C9.3099 17.0312 9.25781 16.9792 9.25781 16.875V3.125C9.25781 3.02083 9.3099 2.96875 9.41406 2.96875Z" fill="#262626"/>
                            <path d="M3.4375 9.25781H16.5625C16.6667 9.25781 16.7188 9.3099 16.7188 9.41406V10.5859C16.7188 10.6901 16.6667 10.7422 16.5625 10.7422H3.4375C3.33333 10.7422 3.28125 10.6901 3.28125 10.5859V9.41406C3.28125 9.3099 3.33333 9.25781 3.4375 9.25781Z" fill="#262626"/>
                        </svg>
                        <span>New View</span>
                    </div>
                </div>
            </div>

            <div className={styles.second}>
                <div className={styles.secondChild}>
                    <span>Export</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.90156 10.3281C7.91326 10.3431 7.92819 10.3551 7.94525 10.3635C7.96231 10.3718 7.98103 10.3761 8 10.3761C8.01897 10.3761 8.03769 10.3718 8.05475 10.3635C8.0718 10.3551 8.08674 10.3431 8.09844 10.3281L9.84844 8.11406C9.9125 8.03281 9.85469 7.9125 9.75 7.9125H8.59219V2.625C8.59219 2.55625 8.53594 2.5 8.46719 2.5H7.52969C7.46094 2.5 7.40469 2.55625 7.40469 2.625V7.91094H6.25C6.14531 7.91094 6.0875 8.03125 6.15156 8.1125L7.90156 10.3281ZM13.7188 9.78125H12.7812C12.7125 9.78125 12.6562 9.8375 12.6562 9.90625V12.3125H3.34375V9.90625C3.34375 9.8375 3.2875 9.78125 3.21875 9.78125H2.28125C2.2125 9.78125 2.15625 9.8375 2.15625 9.90625V13C2.15625 13.2766 2.37969 13.5 2.65625 13.5H13.3438C13.6203 13.5 13.8438 13.2766 13.8438 13V9.90625C13.8438 9.8375 13.7875 9.78125 13.7188 9.78125Z" fill="#1890FF"/>
                    </svg>

                </div>
            </div>
            
        </div>

        <div className={styles.btnSection}>
            <DatePicker onChange={onChange} className={styles.datePicker} />
            <Filter className={styles.filter} />
            <SearchBar />
            <div style={{height:"32px" , width :"356px" , fontSize:"12px", marginLeft: "161px" , borderRadius:"4px" , padding:"5px 0px"}}>Updated at 19:34 EST</div>
            <TableSetting />
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
                    const {id , div, company , peopleCnt} = item;
                        return(
                            <div className={styles.item} key={id}>
                                <div className={styles.div}>{div}</div>
                                <div className={styles.company}>{company}</div>
                                <div className={styles.peopleCnt}> {peopleCnt} </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
    )
}

export default Progress