import Layout from '../../components/Layout';
import ShowComponent from '../../components/ShowComponent';
import { fetchAPI } from '../../lib/api';
import { createClient } from 'contentful';

const ShowsPage = ({ shows }) => {
    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`mb-12 w-full p-8`}>
                <div className={`lg:px-8`}>
                <h1 className={`text-5xl text-black`}>Upcoming Shows</h1>
                {shows.length === 0 && <p>There are no upcoming shows right now!</p>}
                    {shows.map((show) => (
                        <div key={show.sys.id}>
                            <div className={`flex items-start`}>
                                <ShowComponent show={show}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>  
    );
}

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
      });

    const res = await client.getEntries({ content_type: 'show' });

    const upcomingShows = res.items.filter((show) => {
        const showDate = new Date(show.fields.date).toLocaleDateString();
        const current = new Date().toLocaleDateString();
        if (showDate === current) {
            show.isToday = true;
        }
        if (showDate >= current) {
            return show;
        };
    });

    const datetimeSorted = upcomingShows.sort((a,b) => {
        const x = new Date(a.fields.date);
        const y = new Date(b.fields.date);
        return x - y;
    });
  
    return {
        props: {
          shows: datetimeSorted,
          revalidate: 1,
        }
      }
  }

export default ShowsPage;