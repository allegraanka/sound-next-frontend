import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from "../../lib/api";
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const PostPage = ({ post }) => {
    console.log('what am i looking at', post);
    const { title, description, category, featured, thumbnail, writer, content } = post.fields;

    const body = documentToReactComponents(content);

    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date from post object
    const publishDate = formatDate(post.sys.createdAt);

    // // Get categories from post object
    // const categories = post.attributes.categories.data.map((category) => {
    //     return category.attributes.name;
    // });
    
    // Get writers from post object
    const writers = post.fields.writer.map((writer) => {
        return writer.fields.name;
    });

    return(
        <Layout>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/posts'>
                        <a className={`bg-white uppercase`}>← Back to posts</a>
                    </Link>
                    <div className={`bg-white mt-12 mb-8`}>
                        <Image 
                            src={`https:${thumbnail.fields.file.url}`}
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                            alt={thumbnail.fields.description}
                        />
                        <h1 className={`text-5xl mt-4`}>{title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}</p>
                    </div>
                    <div className={`bg-white py-4 w-full lg:w-3/4`}>
                        <ReactMarkdown className={`text-2xl my-4`}>{description}</ReactMarkdown>
                        <div>{body}</div>
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
    const res = await client.getEntries({ 
        content_type: 'post' 
    });

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const {items} = await client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
    });

    return {
        props: {
            post: items[0],
            revalidate: 1,
        }
    }
}

export default PostPage;