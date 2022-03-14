import Link from 'next/link';
import Layout from '../../components/Layout';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const ShowPage = ({ show }) => {
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        const date = new Date(dateInput).toLocaleTimeString('en-us', options);
        return date;
    }
    
    return(
        <Layout>
            <div className={`w-full p-8`}>
                <Link href='/shows'>
                    <a className={`uppercase`}>← Back to shows</a>
                </Link>
                <div className={`my-8`}>
                    <div className={``}>
                        <p className={``}>{show.fields.promoter ? show.fields.promoter : ''}</p>
                        <p className={`text-xl`}>{formatDate(show.fields.date)}</p>
                        <h1 className={`text-6xl`}>{show.fields.headliner}</h1>
                        <p className={`text-2xl`}>{show.fields.support ? show.fields.support.join(', ') : ''}</p>
                    </div>
                    <div className={``}>
                        <div className={`text-2xl uppercase font-semibold`}>{show.fields.venue}</div>
                        <div className={`text-2xl`}>{show.fields.ticketPrice}</div>
                    </div>
                    <div className={`my-8`}>
                        {show.fields.description}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await client.getEntries({ 
        content_type: 'show' 
    });

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const {items} = await client.getEntries({
        content_type: 'show',
        'fields.slug': params.slug
    });

    return {
        props: {
            show: items[0]
        }
    }
}

export default ShowPage;