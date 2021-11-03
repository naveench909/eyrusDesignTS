import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import styles from './Dropdown.module.css'
import { useGlobalContext } from '../context';

function Dropdown() {

    const { showModal , onClose , updateMenuValue , isBrowser , setIsBrowser} = useGlobalContext();
    
    const handleClose = (e:any) => {
        e.preventDefault();
        onClose();
    }

    const getCurrentValue = (e:any) =>{
        updateMenuValue(e.target.innerText);
    }

    
    useEffect(()=>{
        setIsBrowser(true);
    })

    const modalContent = showModal ? (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.body}>
                    {
                        <React.Fragment>
                            <div className={styles.btnContainer} >
                                <div className={styles.svg}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                        <g filter="url(#filter0_d_238:2129)">
                                        <path d="M11 20L13 18M13 18L20 11L27 18M13 18V28C13 28.2652 13.1054 28.5196 13.2929 28.7071C13.4804 28.8946 13.7348 29 14 29H17M27 18L29 20M27 18V28C27 28.2652 26.8946 28.5196 26.7071 28.7071C26.5196 28.8946 26.2652 29 26 29H23M17 29C17.2652 29 17.5196 28.8946 17.7071 28.7071C17.8946 28.5196 18 28.2652 18 28V24C18 23.7348 18.1054 23.4804 18.2929 23.2929C18.4804 23.1054 18.7348 23 19 23H21C21.2652 23 21.5196 23.1054 21.7071 23.2929C21.8946 23.4804 22 23.7348 22 24V28C22 28.2652 22.1054 28.5196 22.2929 28.7071C22.4804 28.8946 22.7348 29 23 29M17 29H23" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                        <defs>
                                        <filter id="filter0_d_238:2129" x="4" y="8" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238:2129"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238:2129" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>
                                </div>

                                <button className={styles.btn} >
                                    <div className={styles.title} onClick={getCurrentValue}>Overview</div>
                                    <span>Track Progress with dashboards</span>
                                </button>
                            </div>
                            
                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M15 24C14.015 24.0011 13.0643 23.6387 12.3299 22.9823C11.5955 22.3259 11.1291 21.4216 11.0201 20.4427C10.9111 19.4637 11.1671 18.479 11.7391 17.6771C12.3112 16.8752 13.1589 16.3126 14.12 16.097C13.8419 14.8001 14.0904 13.4458 14.8109 12.3321C15.5313 11.2185 16.6646 10.4366 17.9615 10.1585C19.2584 9.88042 20.6127 10.1289 21.7264 10.8493C22.84 11.5698 23.6219 12.7031 23.9 14H24C25.24 13.9988 26.4361 14.4583 27.3563 15.2894C28.2765 16.1205 28.8551 17.2638 28.9797 18.4975C29.1043 19.7312 28.7661 20.9671 28.0307 21.9655C27.2953 22.9638 26.2152 23.6533 25 23.9M23 21L20 18M20 18L17 21M20 18V30" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg>
                                </div>
                                
                                <button className={styles.btn} >
                                    <div className={styles.title} onClick={getCurrentValue}>Field Reporting</div>
                                    <span>Submit or review daily logs & walkthroughs</span>
                                </button>
                            </div>

                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_246:2143)">
                                    <path d="M2 6C2 3.79086 3.79086 2 6 2H38C40.2091 2 42 3.79086 42 6V38C42 40.2091 40.2091 42 38 42H6C3.79086 42 2 40.2091 2 38V6Z" fill="#1D39C4"/>
                                    <path d="M26 18V26V18ZM22 21V26V21ZM18 24V26V24ZM16 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V16C30 15.4696 29.7893 14.9609 29.4142 14.5858C29.0391 14.2107 28.5304 14 28 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V28C14 28.5304 14.2107 29.0391 14.5858 29.4142C14.9609 29.7893 15.4696 30 16 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_246:2143" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_246:2143"/>
                                    <feOffset/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.184314 0 0 0 0 0.329412 0 0 0 0 0.921569 0 0 0 0.15 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_246:2143"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_246:2143" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                                </div>
                                

                                
                                <button className={styles.btn} >
                                    <div className={styles.title} onClick={getCurrentValue}>Reporting</div>
                                    <span>Track Progress with dashboards</span>
                                </button>
                            </div>
                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M25.657 24.657L21.414 28.9C21.2284 29.0858 21.0081 29.2331 20.7656 29.3336C20.523 29.4342 20.2631 29.4859 20.0005 29.4859C19.738 29.4859 19.478 29.4342 19.2354 29.3336C18.9929 29.2331 18.7726 29.0858 18.587 28.9L14.343 24.657C13.2242 23.5382 12.4623 22.1127 12.1537 20.5609C11.845 19.009 12.0035 17.4005 12.609 15.9387C13.2145 14.477 14.2399 13.2276 15.5555 12.3485C16.8711 11.4695 18.4178 11.0003 20 11.0003C21.5822 11.0003 23.1289 11.4695 24.4445 12.3485C25.7601 13.2276 26.7855 14.477 27.391 15.9387C27.9965 17.4005 28.155 19.009 27.8463 20.5609C27.5377 22.1127 26.7758 23.5382 25.657 24.657V24.657Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M23 19C23 19.7956 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7956 22 20 22C19.2044 22 18.4413 21.6839 17.8787 21.1213C17.3161 20.5587 17 19.7956 17 19C17 18.2044 17.3161 17.4413 17.8787 16.8787C18.4413 16.3161 19.2044 16 20 16C20.7956 16 21.5587 16.3161 22.1213 16.8787C22.6839 17.4413 23 18.2044 23 19V19Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg></div>
                                

                                <button className={styles.btn} >
                                    <div className={styles.title} onClick={getCurrentValue}>Zones</div>
                                    <span>Birds eye view of worker movement</span>
                                </button>
                            </div>
                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M15 20L18 17L19.5 18.5L21 20L25 16M16 29L20 25L24 29M11 12H29M12 12H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H13C12.7348 25 12.4804 24.8946 12.2929 24.7071C12.1054 24.5196 12 24.2652 12 24V12Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg>
                                </div>
                                

                                <button className={styles.btn}>
                                    <div className={styles.title} onClick={getCurrentValue}>Forecast</div>
                                    <span>insights inti manhours and task completion</span>
                                </button>
                            </div>
                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M20 12.354C20.5374 11.7447 21.2477 11.3135 22.0362 11.1178C22.8247 10.9221 23.6542 10.9711 24.4142 11.2584C25.1741 11.5457 25.8286 12.0576 26.2905 12.726C26.7524 13.3943 26.9998 14.1875 26.9998 15C26.9998 15.8125 26.7524 16.6057 26.2905 17.274C25.8286 17.9424 25.1741 18.4543 24.4142 18.7416C23.6542 19.0289 22.8247 19.0779 22.0362 18.8822C21.2477 18.6865 20.5374 18.2553 20 17.646M23 29H11V28C11 26.4087 11.6321 24.8826 12.7574 23.7574C13.8826 22.6321 15.4087 22 17 22C18.5913 22 20.1174 22.6321 21.2426 23.7574C22.3679 24.8826 23 26.4087 23 28V29ZM23 29H29V28C29.0001 26.9467 28.723 25.9119 28.1965 24.9997C27.6699 24.0875 26.9125 23.3299 26.0004 22.8032C25.0882 22.2765 24.0535 21.9992 23.0002 21.9992C21.9469 21.9991 20.9122 22.2764 20 22.803M21 15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19C15.9391 19 14.9217 18.5786 14.1716 17.8284C13.4214 17.0783 13 16.0609 13 15C13 13.9391 13.4214 12.9217 14.1716 12.1716C14.9217 11.4214 15.9391 11 17 11C18.0609 11 19.0783 11.4214 19.8284 12.1716C20.5786 12.9217 21 13.9391 21 15Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg>
                                </div>
                                

                                <button className={styles.btn}>
                                    <div className={styles.title} onClick={getCurrentValue}>People</div>
                                    <span>Manage people nd their role</span>
                                </button>
                            </div>
                            <div className={styles.btnContainer}>
                                {/* <Image src={AppMenu} width="40px" height="40px"/> */}
                                <div className={styles.svg}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M18 29H22M27 29V13C27 12.4696 26.7893 11.9609 26.4142 11.5858C26.0391 11.2107 25.5304 11 25 11H15C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V29H27ZM27 29H29H27ZM27 29H22H27ZM13 29H11H13ZM13 29H18H13ZM17 15H18H17ZM17 19H18H17ZM22 15H23H22ZM22 19H23H22ZM18 29V24C18 23.7348 18.1054 23.4804 18.2929 23.2929C18.4804 23.1054 18.7348 23 19 23H21C21.2652 23 21.5196 23.1054 21.7071 23.2929C21.8946 23.4804 22 23.7348 22 24V29H18Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg>
                                </div>
                                

                                <button className={styles.btn}>
                                    <div className={styles.title} onClick={getCurrentValue}>Companies</div>
                                    <span>Manage and order new hardware</span>
                                </button>
                            </div>
                            <div className={styles.btnContainer}>
                                <div className={styles.svg}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F5F5F5"/>
                                    <path d="M17.75 25L17 28L16 29H24L23 28L22.25 25H17.75ZM11 21H29H11ZM13 25H27C27.5304 25 28.0391 24.7893 28.4142 24.4142C28.7893 24.0391 29 23.5304 29 23V13C29 12.4696 28.7893 11.9609 28.4142 11.5858C28.0391 11.2107 27.5304 11 27 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V23C11 23.5304 11.2107 24.0391 11.5858 24.4142C11.9609 24.7893 12.4696 25 13 25Z" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#D9D9D9"/>
                                </svg>
                                </div>
                                

                                <button className={styles.btn}>
                                    <div className={styles.title} onClick={getCurrentValue}>Hadware</div>
                                    <span>Track Progress with dashboards</span>
                                </button>
                            </div>
                            <div className={styles.settingBtnContainer} >
                                
                                <div className={styles.secondCntr}>
                                <div className={styles.settingSvg}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.325 4.31703C10.751 2.56103 13.249 2.56103 13.675 4.31703C13.7389 4.58083 13.8642 4.82581 14.0407 5.03203C14.2172 5.23825 14.4399 5.39988 14.6907 5.50377C14.9414 5.60767 15.2132 5.65088 15.4838 5.6299C15.7544 5.60892 16.0162 5.52433 16.248 5.38303C17.791 4.44303 19.558 6.20903 18.618 7.75303C18.4769 7.98468 18.3924 8.24637 18.3715 8.5168C18.3506 8.78724 18.3938 9.0588 18.4975 9.30941C18.6013 9.56002 18.7627 9.78261 18.9687 9.95908C19.1747 10.1356 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0163 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3925 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4976C14.44 18.6013 14.2174 18.7628 14.0409 18.9688C13.8645 19.1747 13.7391 19.4195 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6002 9.30935 18.4963C9.05859 18.3924 8.78683 18.3492 8.51621 18.3702C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0154 5.60755 15.7537 5.62848 15.4833C5.64942 15.2128 5.60624 14.9413 5.50247 14.6906C5.3987 14.44 5.23726 14.2175 5.03127 14.041C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95932C5.23822 9.78283 5.39985 9.56014 5.50375 9.30938C5.60764 9.05861 5.65085 8.78686 5.62987 8.51624C5.60889 8.24562 5.5243 7.98378 5.383 7.75203C4.443 6.20903 6.209 4.44203 7.753 5.38203C8.749 5.99003 10.049 5.45203 10.325 4.31703Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.684 12.7956 15 12 15C11.2044 15 10.4413 14.684 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87871C10.4413 9.3161 11.2044 9.00003 12 9.00003C12.7956 9.00003 13.5587 9.3161 14.1213 9.87871C14.6839 10.4413 15 11.2044 15 12V12Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                

                                <button className={styles.settingBtn} onClick={getCurrentValue}>
                                    <div className={styles.settingTitle}>Project Setting</div>
                                </button>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    ) : null ;

    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal')
        )
    }else{
        return null;
    }
}

export default Dropdown
