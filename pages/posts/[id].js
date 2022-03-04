import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import NextImage from '../../components/Image/Image';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from "../../lib/api";

const PostPage = ({ post }) => {
    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date from post object
    const publishDate = formatDate(post.attributes.publishedAt);

    // Get categories from post object
    const categories = post.attributes.categories.data.map((category) => {
        return category.attributes.name;
    });
    
    // Get writers from post object
    const writers = post.attributes.writers.data.map((writer) => {
        return writer.attributes.name;
    });

    return(
        <Layout>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/posts'>
                        <a className={`bg-white uppercase`}>← Back to posts</a>
                    </Link>
                    <div className={`bg-white mt-12 mb-8`}>
                        <NextImage image={post.attributes.image}/>
                        <h1 className={`text-5xl mt-4`}>{post.attributes.title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}. {categories.join(', ')}</p>
                    </div>
                    <div className={`bg-white py-4 w-full lg:w-3/4`}>
                        <p className={`text-2xl my-4`}>{post.attributes.description}</p>
                        <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
                    </div>
                </article>
                <div className={`bg-white w-fit my-8`}>
                    <span className={`text-lg`}>Did you enjoy this?</span>
                    <Link href='/posts'>
                        <a className={`uppercase mx-4`}>Read more</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const posts = await fetchAPI('/posts', { populate: '*', encodeValuesOnly: true });
    const paths = posts.data.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = await fetchAPI('/posts', {
        filters: {
            id: params.id,
        },
        populate: '*',
    });

    return {
        props: {
            post: posts.data[0]
        }
    }
}

export default PostPage;