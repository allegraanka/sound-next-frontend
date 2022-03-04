import Link from 'next/link';
import NextImage from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import { fetchAPI } from '../../lib/api';

const NNVPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Non-Normal Vectors Podcast</h1>
                <div className={`bg-white text-xl`}>The Sound is thrilled to collaborate with Mike Lee, well-known radio host and podcast extraordinaire, to bring you live interviews and performances from artists at the forefront of Rochester&apos;s music movement.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <NextImage image={post.attributes.image}/>
                      <Link href={`/nonnormalvectors/${post.id}`}>
                        <a>
                          <h2 className={`bg-white w-fit text-2xl text-red-dark hover:text-red-light`}>{post.attributes.title}</h2>
                        </a>
                      </Link>
                      <div className={`bg-white w-fit`}>{post.attributes.description}</div>
                    </div>
              ))}
          </div>
        </Layout>
    );
}

export async function getStaticProps() {
  const nnvpodcasts = await fetchAPI(`/posts`, { populate: '*', encodeValuesOnly: true });
  const nnvpodcastsFiltered = nnvpodcasts.data.filter(post => post.attributes.type === 'nonnormalvectors');

  return {
    props: {
      posts: nnvpodcastsFiltered,
      revalidate: 1,
    }
  }
}

export default NNVPage;