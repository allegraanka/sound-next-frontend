import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { fetchAPI } from '../../lib/api';
import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';

const PostsPage = ({ posts }) => {
  const filteredPosts = posts.filter(post => {
    return post.fields.post === true;
  });

  console.log('filtered posts', filteredPosts);

  return(
    <Layout title='The Sound | Blog'>
      <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
          <div className={`bg-white my-8`}>
            <h1 className={`text-5xl`}>Sound Board</h1>
            <div className={`text-xl`}>Welcome to Sound Board, a blog where we cover shows, local music news, and the occasional long-form feature story on something remarkable and rad in Rochester music.</div>
          </div>
          {filteredPosts.map((post) => (
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
                <ReactMarkdown className={`w-fit`}>{post.fields.description}</ReactMarkdown>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      posts: res.items,
      revalidate: 1,
    }
  }
}

export default PostsPage;