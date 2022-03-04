import Link from 'next/link';
import styles from '../styles/thanks.module.css';


const Thanks = () => {
    return(
        <div className={styles.container}>
            <span className={`text-9xl text-red-light uppercase`}>Thank you</span>
            <span className={styles.subCopy}>We&#39;re excited to build community with you.</span>
            <span className={styles.subReturn}>You&apos;re all set. You can return <Link href='/'><a>home</a></Link> or close this window.</span>
        </div>
    );
}

export default Thanks;