import Layout from '../../components/Layout';
import { createClient } from 'contentful';
import PaginatedItems from '../../components/Paginator';

const ShowsPage = ({ shows }) => {
    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`mb-12 w-full p-8`}>
                <div className={`md:w-3/4 lg:px-8 xl:w-1/2 mx-auto`}>
                    <h1 className={`text-7xl text-black mb-12`}>Upcoming Shows</h1>
                    {shows.length === 0 && <p>There are no upcoming shows right now!</p>}
                    <PaginatedItems items={shows} itemsPerPage={10} />
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

    const res = await client.getEntries({ 
        content_type: 'show',
    });

    const upcomingShows = res.items.filter((show) => {
        const showDate = new Date(show.fields.date);
        const current = new Date();

        // IF THE SHOW IS TODAY, ADD isToday PROPERTY FOR TONIGHT COMPONENT TO FILTER AGAINST
        if (showDate === current) {
            show.isToday = true;
        }

        // RETURN SHOWS WITH TODAY'S DATE OR GREATER
        if (showDate >= current) {
            return show;
        };
    });

    const datetimeSorted = upcomingShows.sort((a,b) => {
        const x = new Date(a.fields.date);
        const y = new Date(b.fields.date);
        return x - y;
    });

    const totalShowsCount = datetimeSorted.length > 0 ? datetimeSorted.length : 0;
    const pageSize = 15;
    const totalPages = Math.ceil(totalShowsCount / pageSize);
  
    return {
        props: {
          shows: datetimeSorted,
          totalShowsCount,
          pageSize,
          totalPages
        },
        revalidate: 1,
      }
  }

export default ShowsPage;