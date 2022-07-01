import styles from '../../styles/Posts.module.css';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import FeaturedPosts from '../../components/FeaturedPosts';
import { createClient } from 'contentful';

const PostsPage = ({ posts }) => {
  const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

  return(
    <Layout title='The Sound | Blog'>
      <div className={styles.postsPageContainer}>
        <div className={styles.postsHeaderContainer}>
          <h1 className={styles.postsHeaderTitle}>Sound Board</h1>
          <p className={styles.postsHeaderText}>Welcome to Sound Board, a blog where we cover shows, local music news, and the occasional long-form feature story on something remarkable and rad in Rochester music.</p>
        </div>
      </div>

      <div className={styles.postsPageLatestSection}>
        <h2 className={styles.postsPageLatestSectionHeaderTitle}>Latest posts</h2>
        <div className={styles.latestPosts}>
          {posts.slice(0,3).map((post) => (
            <div key={post.sys.id} className={styles.postContainer}>
              <div>
                <Image 
                    src={`https:${post.fields.thumbnail.fields.file.url}`}
                    width={post.fields.thumbnail.fields.file.details.image.width}
                    height={post.fields.thumbnail.fields.file.details.image.height}
                    alt={post.fields.thumbnail.fields.description}
                />
                <div className={styles.latestPostDate}>{formatDate(post.sys.createdAt)}</div>
                <Link href={`/posts/${post.fields.slug}`}>
                <a>
                  <h2 className={styles.latestPostTitle}>{post.fields.title}</h2>
                </a>
              </Link>
              <div className={styles.latestPostDescription}>{post.fields.description}</div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className={styles.allPostsContainer}>
        {posts.slice(3,posts.length).map((post) => (
          <div key={post.sys.id} className={styles.postContainer}>
            <div>
              <Image 
                  src={`https:${post.fields.thumbnail.fields.file.url}`}
                  width={post.fields.thumbnail.fields.file.details.image.width}
                  height={post.fields.thumbnail.fields.file.details.image.height}
                  alt={post.fields.thumbnail.fields.description}
              />
              <div className={styles.allPostDate}>{formatDate(post.sys.createdAt)}</div>
              <Link href={`/posts/${post.fields.slug}`}>
                <a>
                  <h2 className={styles.allPostTitle}>{post.fields.title}</h2>
                </a>
              </Link>
              <div className={styles.allPostDescription}>{post.fields.description}</div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <span>Check back soon for new posts!</span>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'post', 'fields.post': true, order: '-sys.createdAt' });

  return {
    props: {
      posts: res.items,
    }
  }
}

export default PostsPage;