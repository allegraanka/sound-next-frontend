import styles from '../styles/AboutUs.module.css';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
    return(
        <div className={styles.aboutComponentContainer}>
            {/* <div className={styles.aboutComponentImageContainer}>
                <Image src='/images/couch.jpg' alt='The Sound cofounders sitting on a couch' width={400} height={300}/>
            </div> */}
            <h2 className={styles.aboutComponentTitle}>About Us</h2>
            <p className={styles.aboutComponentText}>Think of The Sound as the best, most supportive group text you have ever been in. At its core, The Sound is a project that makes it easier to find live music in Rochester on any day of the week.</p>
            <p className={styles.aboutComponentText}>More than that, we envision The Sound as a close-knit community of artists, music enthusiasts, venues and businesses united by a strong sense of togetherness and pride for our craft and our city.</p>
            <Link href='/about'>Read more →</Link>
        </div>
    )
}

export default AboutUs;