import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import NextImage from '../../components/Image/Image';
import { fetchAPI } from "../../lib/api";

const NonNormalVectorsPage = ({ post }) => {
    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date from post object
    const publishDate = formatDate(post.attributes.publishedAt);

    // Get categories off post object
    const categories = post.attributes.categories.data.map((category) => {
        return category.attributes.name;
    });
    
    // Get writers from post object
    const writers = post.attributes.writers.data.map((writer) => {
        return writer.attributes.name;
    });

    console.log('episodoalskfjk --------> ', post);
    
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/nonnormalvectors'>
                        <a className={`bg-white uppercase`}>← Back to Episodes</a>
                    </Link>
                    <div className={`mt-12 mb-8`}>
                        <NextImage image={post.attributes.image}/>
                        <h1 className={`bg-white w-fit text-5xl mt-4`}>{post.attributes.title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}. {categories.join(', ')}</p>
                    </div>
                    <div className={`w-full lg:w-3/4`}>
                        <h2 className={`bg-white w-fit text-2xl my-4`}>{post.attributes.description}</h2>
                        <p className={`bg-white w-fit`}>{post.attributes.content}</p>
                        <a className={`bg-white w-fit text-3xl`} href={`${process.env.STRAPI_API_BASE_URL}${post.attributes.audioFile.data.attributes.url}`}>Listen now!</a>
                    </div>
                </article>
                <div className={`bg-white w-fit my-8`}>
                    <span className={`text-lg`}>Did you like this?</span>
                    <Link href='/nonnormalvectors'>
                        <a className={`uppercase mx-4`}>Read more</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const nnvEpisodes = await fetchAPI('/posts', { populate: '*', encodeValuesOnly: true });
    
    const paths = nnvEpisodes.data.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const nnvEpisodes = await fetchAPI('/posts', {
        filters: {
            id: params.id,
        },
        populate: '*',
    });

    return {
        props: {
            post: nnvEpisodes.data[0]
        }
    }
}

export default NonNormalVectorsPage;