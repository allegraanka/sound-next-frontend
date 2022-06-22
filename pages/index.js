import Layout from '../components/Layout';
import Tonight from '../components/Tonight';
import FeaturedPosts from '../components/FeaturedPosts';
import EmailCapture from '../components/EmailCapture';
import PartnerUp from '../components/PartnerUp';
import Link from 'next/link';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const HomePage = ({ shows, featured }) => {
  return (
    <Layout>
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`p-4`}>
          <div className={`bg-white text-2xl my-2 w-fit md:text-left`}>The Sound is your source for curated live music in Rochester, NY and a music community incubator initiative. Learn more <Link href='/about'><a>about us</a></Link>.</div>
          <Tonight shows={shows}/>
          <EmailCapture />
          <PartnerUp />
        </div>
        <FeaturedPosts featured={featured}/>
      </div>
      <div className={`bg-white w-screen h-60 flex items-center justify-center`}>
        <Link href='/about'>
          <a className={`text-4xl uppercase`}>Get to know us →</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [shows, posts] = await Promise.all([
    client.getEntries({ content_type: 'show' }),
    client.getEntries({ content_type: 'post', 'fields.featured': true }),
  ])

  return {
    props: {
      shows: shows.items,
      featured: posts.items,
    }
  }
}

export default HomePage;