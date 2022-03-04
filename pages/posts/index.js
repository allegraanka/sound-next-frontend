import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import NextImage from '../../components/Image/Image';
import { fetchAPI } from '../../lib/api';

const PostsPage = ({ posts }) => {
  return(
    <Layout title='The Sound | Blog'>
      <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
          <div className={`bg-white my-8`}>
            <h1 className={`text-5xl`}>Sound Board</h1>
            <div className={`text-xl`}>Welcome to Sound Board, a blog where we cover shows, local music news, and the occasional long-form feature story on something remarkable and rad in Rochester music.</div>
          </div>
          {posts.map((post) => (
            <div key={post.id} className={`my-12 w-fit`}>
              <div>
                <NextImage image={post.attributes.image}/>
                <Link href={`/posts/${post.id}`}>
                  <a>
                    <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{post.attributes.title}</h2>
                  </a>
                </Link>
                <div className={`w-fit`}>{post.attributes.description}</div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchAPI(`/posts`, { populate: '*', encodeValuesOnly: true });
  const filteredPosts = posts.data.filter(post => post.attributes.type === 'post');

  return {
    props: {
      posts: filteredPosts,
      revalidate: 1,
    }
  }
}

export default PostsPage;