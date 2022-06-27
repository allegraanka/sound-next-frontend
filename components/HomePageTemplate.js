import styles from '../styles/Home.module.css';
import Tonight from '../components/Tonight';
import FeaturedPosts from '../components/FeaturedPosts';
import AboutUs from '../components/AboutUs';
import { createClient } from 'contentful';

const client = createClient({
    space: '7dny8i64ojfo',
    accessToken: '06Lb1KhwtaW2tzdWw64g_w93MrCP7mJ3a9j2x98Iw2s'
  });

const HomePageTemplate = ({ shows, featured }) => {
    const current = new Date();
    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

    return(
        <div className={styles.homePageContainer}>
            <div className={styles.homePageLeftCol}>
                <div className={styles.tonightComponentContainer}>
                    <span className={styles.tonightTimestamp}>{formatDate(current)}</span>
                    <h2 className={styles.tonightComponentTitle}>Rochester Tonight</h2>
                    <div className={styles.tonightComponentInner}>
                        <Tonight shows={shows}/>
                    </div>
                </div>
                <div className={styles.featuredComponentContainer}>
                    <h2 className={styles.featuredComponentTitle}>Featured</h2>
                    <div className={styles.featuredComponentInner}>
                        <p>Check our weekly show roundups, writeups on new music releases, and other news in Rochester music.</p>
                        <FeaturedPosts featured={featured}/>
                    </div>
                </div>
            </div>
            <div className={styles.homePageRightCol}>
                <div className={styles.homePageRightInner}>
                    <p className={styles.homePageRightColGreeting}>Community from scratch</p>
                    <h2 className={styles.homePageRightColHeaderText}>The Sound is your source for live music in Rochester, NY</h2>
                </div>
                <div>
                    <AboutUs />
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
  const [shows, posts] = await Promise.all([
    client.getEntries({ content_type: 'show' }),
    client.getEntries({ content_type: 'post', 'fields.featured': true, order: '-sys.createdAt' })
  ])

  return {
    props: {
      shows: shows.items,
      featured: posts.items,
    }
  }
}

export default HomePageTemplate;