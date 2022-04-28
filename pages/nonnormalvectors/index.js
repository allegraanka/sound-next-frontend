import Layout from '../../components/Layout';
import { createClient } from 'contentful';
import NnvEpisodeCard from '../../components/NnvEpisodeCard';

const NNVPage = ({ nnvEpisodes }) => {
  const filteredNNVs = nnvEpisodes.filter(nnv => {
    return nnv.fields.nnv === true;
  });

    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Non-Normal Vectors Podcast</h1>
                <div className={`bg-white text-xl`}>The Sound is thrilled to collaborate with Michael Lee, well-known radio host and podcast extraordinaire, to bring you live interviews and performances from artists at the forefront of Rochester&apos;s music movement.</div>
              </div>
              {filteredNNVs.map((episode) => (
                    <NnvEpisodeCard key={episode.sys.id} episode={episode} className={`my-4`}/>                    
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
      nnvEpisodes: res.items,
    }
  }
}

export default NNVPage;