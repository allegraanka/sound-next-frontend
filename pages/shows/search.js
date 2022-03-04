import Layout from '../../components/Layout/Layout';
import ShowComponent from '../../components/ShowComponent/ShowComponent';
import { useRouter } from 'next/router';
import { fetchAPI } from '../../lib/api';

export async function getServerSideProps({ query: {term}}) {
    const shows = await fetchAPI('/shows', {
        filters: {
            $or: [
                {
                    headliner: {
                        $containsi: term
                    },
                },
                {
                    support: {
                        $containsi: term
                    },
                },
                {
                    venue: {
                        $contains: term
                    },
                },
            ]
        }
    })
  
    return {
      props: {
        shows: shows.data
      }
    }
  }

const SearchPage = ({ shows }) => {
    const router = useRouter();

    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`px-4`}>
                <div className={``}>
                    <h1 className={`text-5xl`}>Search results for <span className={`text-red-dark`}>{router.query.term}</span></h1>
                    {shows.length === 0 && <p>Sorry! Nothing matched that search.</p>}
                    {shows.map((show) => (
                        <ShowComponent key={show.id} show={show}/>
                    ))}
                </div>
            </div>
        </Layout>  
    );
}

export default SearchPage;