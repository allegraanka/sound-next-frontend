import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { createClient } from 'contentful';

const SoundBytesPage = ({ soundbytes }) => {
    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Sound Bytes</h1>
                <div className={`text-xl`}>Sound Bytes is a series that recaps live shows in Rochester.</div>
              </div>
              {soundbytes.map((sb) => (
                <div key={sb.sys.id} className={`my-4`}>
                  <Image 
                      src={`https:${sb.fields.thumbnail.fields.file.url}`}
                      width={sb.fields.thumbnail.fields.file.details.image.width}
                      height={sb.fields.thumbnail.fields.file.details.image.height}
                      alt={sb.fields.thumbnail.fields.description}
                  />
                  <Link href={`/soundbytes/${sb.fields.slug}`}>
                    <a>
                      <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{sb.fields.title}</h2>
                    </a>
                  </Link>
                  <div>{sb.fields.description}</div>
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

  const res = await client.getEntries({ content_type: 'post', 'fields.soundbytes': true });

  return {
    props: {
      soundbytes: res.items,
    }
  }
}

export default SoundBytesPage;