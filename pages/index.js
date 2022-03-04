import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';
import SubmitShow from '../components/SubmitShow/SubmitShow';
import EmailCapture from '../components/email-capture/email-capture.component';
import Link from 'next/link';
import { fetchAPI } from '../lib/api';

const HomePage = ({ shows, featured }) => {
  return (
    <Layout>
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`p-4`}>
          <div className={`bg-white text-2xl my-2 w-fit md:text-left`}>The Sound is your source for curated live music in Rochester, NY and a music community incubator initiative. Learn more <Link href='/about'><a>about us</a></Link>.</div>
          <Tonight shows={shows}/>
          <SubmitShow />
          <EmailCapture />
        </div>
        <FeaturedPosts featured={featured}/>
      </div>
      <div className={`bg-white w-screen h-60 flex items-center justify-center`}>
        <Link href='/about'>
          <a className={`text-5xl uppercase`}>Get to know us →</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [shows, posts] = await Promise.all([
    fetchAPI('/shows', { populate: '*', encodeValuesOnly: true }),
    fetchAPI('/posts', { populate: '*', encodeValuesOnly: true })
  ])
  
  const featuredPosts = posts.data.filter(post => post.attributes.featured === true);

  return {
    props: {
      shows: shows.data,
      featured: featuredPosts
    }
  }
}

export default HomePage;