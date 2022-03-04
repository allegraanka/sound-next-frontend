import Layout from '../../components/Layout/Layout';
import ShowComponent from '../../components/ShowComponent/ShowComponent';
import SearchComponent from '../../components/Search/Search';
import { fetchAPI } from '../../lib/api';

const ShowsPage = ({ shows }) => {
    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`mb-12 w-full p-8`}>
                <SearchComponent />
                <div className={`lg:px-8`}>
                <h1 className={`text-5xl text-black`}>Upcoming Shows</h1>
                {shows.length === 0 && <p>There are no upcoming shows right now!</p>}
                    {shows.map((show) => (
                        <div key={show.id}>
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
    const shows = await fetchAPI('/shows');

    const upcomingShows = shows.data.filter((show) => {
        const showDate = new Date(show.attributes.date).toLocaleDateString();
        const current = new Date().toLocaleDateString();
        if (showDate === current) {
            show.isToday = true;
        }
        if (showDate >= current && show.attributes.chosen === true) {
            return show;
        };
    });

    const datetimeSorted = upcomingShows.sort((a,b) => {
        const x = new Date(a.attributes.date);
        const y = new Date(b.attributes.date);
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