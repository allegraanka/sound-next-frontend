import styles from '../../styles/Posts.module.css';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { createClient } from 'contentful';

const PostsPage = ({ posts }) => {
  return(
    <Layout title='The Sound | Blog'>
      <div className={styles.postsPageContainer}>
        <div className={styles.postsHeaderContainer}>
          <h1 className={styles.postsHeaderTitle}>Sound Board</h1>
          <p className={styles.postsHeaderText}>Welcome to Sound Board, a blog where we cover shows, local music news, and the occasional long-form feature story on something remarkable and rad in Rochester music.</p>
        </div>
      </div>

        <div className={styles.postsPageLatestSection}>
          <div className={styles.postsPageLatestSectionHeader}>
            <h2 className={styles.postsPageLatestSectionHeaderTitle}>Latest posts</h2>
          </div>

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
                <Link href={`/posts/${post.fields.slug}`}>
                  <a>
                    <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{post.fields.title}</h2>
                  </a>
                </Link>
                <div className={`w-fit`}>{post.fields.description}</div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {posts.slice(0,3).map((post) => (
          <div key={post.sys.id} className={`my-12 w-fit`}>
            <div>
            <Image 
                src={`https:${post.fields.thumbnail.fields.file.url}`}
                width={post.fields.thumbnail.fields.file.details.image.width}
                height={post.fields.thumbnail.fields.file.details.image.height}
                alt={post.fields.thumbnail.fields.description}
            />
              <Link href={`/posts/${post.fields.slug}`}>
                <a>
                  <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{post.fields.title}</h2>
                </a>
              </Link>
              <div className={`w-fit`}>{post.fields.description}</div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <span>Check back soon for new posts!</span>
        )}
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'post', 'fields.post': true });

  return {
    props: {
      posts: res.items,
    }
  }
}

export default PostsPage;