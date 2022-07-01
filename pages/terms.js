import styles from '../styles/Privacy.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

const TermsPage = () => {
    return(
        <Layout>
            <div className={styles.privacyPageContainer}>
                <Link href='/'>
                    <a className={`uppercase`}>← Back Home</a>
                </Link>
                <h1 className={styles.privacyTitle}>Terms and Conditions</h1>
                <p className={styles.privacyText}>Coming soon.</p>
            </div>
        </Layout>
    )
}

export default TermsPage;