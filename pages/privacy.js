import styles from '../styles/Privacy.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

const PrivacyPage = () => {
    return(
        <Layout>
            <div className={styles.privacyPageContainer}>
                <Link href='/'>
                    <a className={`uppercase`}>← Back Home</a>
                </Link>
                <h1 className={styles.privacyTitle}>Privacy Notice</h1>
                <p className={styles.privacyText}>Last updated Jun 30, 2022</p>
                <p className={styles.privacyText}>This privacy notice for The Sound describes how and why we might collect, store, use, and/or share your information when you use our services, such as when you: </p>
                <ul className={styles.usesList}>
                    <li>Visit our website at www.thesoundroc.com, or any website of ours that links to this privacy notice</li>
                    <li>Engage with us in other related ways, including sales, marketing, or events</li>
                </ul>
                <p className={styles.privacyText}></p>
                <h2 className={styles.privacySectionTitle}>Summary of Key Points</h2>
                <p className={styles.privacyText}>
                    This summary provides key points from our privacy notice. You can find out more details about any of these topics in the following document.
                </p>
                <p className={styles.privacyText}>
                    <strong>What personal information do we process? </strong> 
                    When you visit, use, or navigate our Services, we may process personal information depending on how you interact with The Sound and the Services, the choices you make, and the products and features you use. For example, if you sign up for our email newsletter, we will store your email.
                </p>
                <p className={styles.privacyText}>
                    <strong>Do we process any sensitive personal information? </strong> 
                    We do not process sensitive personal information. We <em>may </em> process sensitive personal information when necessary with your consent, or as otherwise permitted by law. For example, if we add new features to the Services which ask for name, email, or other personal information, then we would collect that information voluntarily from you for purposes explicitly expressed to you. 
                </p>
                <p className={styles.privacyText}>
                    <strong>Do you receive any information from third parties? </strong> 
                    We may receive information from public databases, marketing partners, social media platforms, and other outside sources. 
                </p>
                <p className={styles.privacyText}>
                    <strong>How do you process my information? </strong> 
                    We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                </p>
                <p className={styles.privacyText}>
                    <strong>How do we keep your information safe? </strong>
                    We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                </p>
                <p className={styles.privacyText}>
                    <strong>What are your rights? </strong>
                    Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                </p>
                <p className={styles.privacyText}>
                    <strong>How do I exercise my rights? </strong>
                    The easiest way to exercise your rights is by filling out a data subject request form or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
                <p className={styles.privacyText}>
                    <strong>Questions or concerns? </strong> 
                    To learn more about what The Sound does with any information we collect, review the full notice below. Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at 
                    <a href='mailto:thesoundroc@gmail.com'> thesoundroc@gmail.com</a>.
                </p>
                <h2 className={styles.privacySectionTitle}>What information do we collect?</h2>
                <p className={styles.privacyText}>
                    <strong>In short, we collect personal information that you provide to us. </strong>
                    We collect personal information that you voluntarily provide to us when you sign up for an email newsletter, register for an account, express interest in obtaining information from us about our products and services, when you participate in activities on the Services, or otherwise when you contact us on the site or on any related platforms.
                </p>
                <p className={styles.privacyText}>
                    <strong>Personal information provided by you: </strong>
                    The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we may collect now or in the future could include: name, email, mailing address. However, at this time, we do not collect any sensitive information such as name or address. We collect email address for newsletter purposes, and use MailChimp as a service.
                </p>
                <p className={styles.privacyText}>
                    <strong>Information automatically collected: </strong>
                    We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for internal analytics and reporting purposes.
                </p>
                <p className={styles.privacyText}>
                    <strong>Information collected from other sources: </strong>
                    In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, social media platforms, and from other third parties. This information could include mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion. If you interact with us on a social media platform using your social media account (i.e., Instagram or Twitter), we may receive personal information about you such as your name, email address, and gender. Any personal information that we collect from your social media account depends on your social media account privacy settings.
                </p>
                <h2 className={styles.privacySectionTitle}>How do we process your information?</h2>
                <p className={styles.privacyText}>
                    We may process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                </p>
                <p className={styles.privacyText}>
                    <strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                </p>
                <p className={styles.privacyText}>
                    <strong>To deliver and facilitate delivery of services to the user. </strong>
                    We may process your information to provide you with the requested service.
                </p>
                <p className={styles.privacyText}>
                    <strong>To respond to inquiries or offer support to users. </strong>
                    We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                </p>
                <p className={styles.privacyText}>
                    <strong>To send administrative information to you. </strong>
                    We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                </p>
                <p className={styles.privacyText}>
                    <strong>To fulfill and manage orders. </strong>
                    We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                </p>
                <p className={styles.privacyText}>
                    <strong>To enable user-to-user communications. </strong>
                    We may process your information if you choose to use any of our offerings that allow for communication with another user.
                </p>
                <p className={styles.privacyText}>
                    <strong>To request feedback. </strong>
                    We may process your information when necessary to request feedback and to contact you about your use of our Services.
                </p>
                <p className={styles.privacyText}>
                    <strong>To send marketing and promotional communications. </strong>
                    We may process the personal information you send to us for marketing purposes, if this is in accordance with your marketing preferences.
                </p>
                <p className={styles.privacyText}>
                    <strong>To deliver targeted advertising to you. </strong>
                    We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.
                </p>
                <p className={styles.privacyText}>
                    <strong>To protect our Services. </strong>
                    We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                </p>
                <p className={styles.privacyText}>
                    <strong>To identify usage trends. </strong>
                    We may process information about how you use our Services to better understand how they are being used so we can improve them.
                </p>
                <p className={styles.privacyText}>
                    <strong>To determine the effectiveness of our marketing and promotional campaigns. </strong>
                    We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                </p>
                <p className={styles.privacyText}>
                    <strong>To save or protect an individual&#39;s vital interest. </strong>
                    We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
                </p>
            </div>
        </Layout>
    )
}

export default PrivacyPage;