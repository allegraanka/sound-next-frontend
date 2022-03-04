import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import { fetchAPI } from '../../lib/api';

const ShowPage = ({ show }) => {
    return(
        <Layout>
            <div className={`w-full p-8`}>
                <Link href='/shows'>
                    <a className={`uppercase`}>← Back to shows</a>
                </Link>
                <div className={`my-8`}>
                    <div className={``}>
                        <p className={``}>{show.attributes.promoter}</p>
                        <p className={``}>{show.attributes.date}</p>
                        <h1 className={`text-5xl`}>{show.attributes.headliner}</h1>
                        <p className={`text-2xl`}>{show.attributes.support}</p>
                    </div>
                    <div className={``}>
                        <div className={`text-2xl uppercase font-semibold`}>{show.attributes.venue}</div>
                        {show.attributes.doorTime ? <span className={`text-xl`}>Doors {show.attributes.doorTime} | </span> : ''}
                        <span className={`text-xl`}>Show {show.attributes.showTime}</span>
                        <div className={`text-2xl`}>{show.attributes.ticketPrice}</div>
                    </div>
                    <div className={`my-8`}>
                        {show.attributes.description}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const shows = await fetchAPI('/shows');

    const paths = shows.data.map(show => ({
        params: {id: show.id.toString()}
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const shows = await fetchAPI('/shows', {
        filters: {
            id: params.id,
        },
        populate: '*',
    });

    return {
        props: {
            show: shows.data[0]
        }
    }
}

export default ShowPage;