import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import {FaInstagram, FaArrowRight, FaRegEnvelope} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerInner}>

                <div className={styles.footerInnerContentContainer}>
                    <div className={styles.footerContentCol1}>
                        <h2 className={styles.footerContentCol1Title}>The Sound</h2>
                        <p className={styles.footerContentCol1Text}>Curated live music listings every day of the week and community-building in the Rochester, NY music scene.</p>
                        <div className={styles.footerContentCol1ReadMoreContainer}>
                            <Link href='/about'>
                                <a className={styles.footerContentCol1ReadMore}>Read more</a>
                            </Link>
                            <span className={styles.icon}><FaArrowRight /></span>
                        </div>
                    </div>
                    <div className={styles.footerContentCol2}>
                        <div className={styles.footerContentExploreNav}>
                            <h3 className={styles.footerContentExploreTitle}>Explore</h3>
                            <ul className={styles.footerContentExploreNavList}>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about'>About Us</Link></li>
                                <li><Link href='/shows'>Upcoming Shows</Link></li>
                                <li><Link href='/posts'>Blog</Link></li>
                                {/* <li><Link href='/'>Newsletter</Link></li> */}
                            </ul>
                        </div>
                        <div className={styles.footerContentResourcesNav}>
                            <h3 className={styles.footerContentResourcesTitle}>Resources</h3>
                            <ul className={styles.footerContentResourcesNavList}>
                                <li><Link href='/privacy'>Privacy Policy</Link></li>
                                <li><Link href='/terms'>Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerInfoContainer}>
                    <div className={styles.footerInfoContainerInner}>
                        <div className={styles.footerInfo}>
                            <span className={styles.icon}><FaInstagram/></span>
                            <a href='https://www.instagram.com/thesoundroc/'>@thesoundroc</a>
                        </div>
                        <div className={styles.footerInfo}>
                            <span className={styles.icon}><FaRegEnvelope/></span>
                            <a href='mailto:thesoundroc@gmail.com'>thesoundroc@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <p>Copyright 2022 The Sound. All rights reserved.</p>
                    </div>
                </div>
            </div>
            
        </footer >
    );
}