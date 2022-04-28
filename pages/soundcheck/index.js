import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { createClient } from 'contentful';

const SoundCheckPage = ({ soundchecks }) => {
    const filteredSCs = soundchecks.filter(sc => {
      return sc.fields.soundcheck === true;
    });

    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Sound Check Artist Spotlights</h1>
                <div className={`text-xl`}>Sound Check is an interview series where we ask bands questions that we think will make for interesting conversation and a fun read.</div>
              </div>
              {filteredSCs.map((sc) => (
                <div key={sc.sys.id} className={`my-4`}>
                  <Image 
                      src={`https:${sc.fields.thumbnail.fields.file.url}`}
                      width={sc.fields.thumbnail.fields.file.details.image.width}
                      height={sc.fields.thumbnail.fields.file.details.image.height}
                      alt={sc.fields.thumbnail.fields.description}
                  />
                  <Link href={`/soundcheck/${sc.fields.slug}`}>
                    <a>
                      <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{sc.fields.title}</h2>
                    </a>
                  </Link>
                  <div>{sc.fields.description}</div>
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
      soundchecks: res.items,
    }
  }
}

export default SoundCheckPage;