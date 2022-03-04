import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import NextImage from '../../components/Image/Image';
import { fetchAPI } from '../../lib/api';

const SoundCheckPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Sound Check Artist Spotlights</h1>
                <div className={`text-xl`}>Welcome to our rapid-fire series that spotlights artists with questions that we hope will be fun to answer and even more fun to read.</div>
              </div>
              {posts.map((post) => (
                <div key={post.id} className={`my-4`}>
                  <NextImage image={post.attributes.image}/>
                  <Link href={`/soundcheck/${post.id}`}>
                    <a>
                      <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{post.attributes.title}</h2>
                    </a>
                  </Link>
                  <div>{post.attributes.description}</div>
                </div>
              ))}
          </div>
        </Layout>
    );
}

export async function getStaticProps() {
  const soundchecks = await fetchAPI('/posts', { populate: '*', encodeValuesOnly: true });
  const filteredSoundchecks = soundchecks.data.filter(post => post.attributes.type === 'soundcheck');

  return {
    props: {
      posts: filteredSoundchecks
    }
  }
}

export default SoundCheckPage;