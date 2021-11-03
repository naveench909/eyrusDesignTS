import React from 'react'
import Image from 'next/image'
import profilePhoto from '../../public/profilePhoto.jpg'
import styles from '../../styles/Profile.module.css'

type ProfileProps = {
    className? : string
}
function Profile(props: ProfileProps) {
    return (
        <div className={styles.container}>
            <span>Micah Carroll</span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8125 4H12.6406C12.561 4 12.486 4.03906 12.4391 4.10313L8.00002 10.2219L3.56095 4.10313C3.51408 4.03906 3.43908 4 3.35939 4H2.18751C2.08595 4 2.02658 4.11563 2.08595 4.19844L7.59533 11.7937C7.79533 12.0687 8.2047 12.0687 8.40314 11.7937L13.9125 4.19844C13.9735 4.11563 13.9141 4 13.8125 4Z" fill="#595959"/>
            </svg>
            
            <Image className={styles.photo} src={profilePhoto} height="24px" width="24px" alt="profileImage"/>
            {/* <img src={profilePhoto} className={styles.photo} alt="profileImage" style={{height:"24px" , width:"24px"}}/> */}
        </div>
    )
}

export default Profile
