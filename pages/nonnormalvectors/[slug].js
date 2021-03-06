import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const NonNormalVectorsPage = ({ episode }) => {
    const { title, description, content, category, featured, thumbnail, writer, url } = episode.fields;

    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className={`my-8 w-full text-lg text-black`}>{children}</p>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return node.data.uri ? <a href={node.data.uri}>{children}</a> : null
            }
        }
    }
    const body = documentToReactComponents(content, RICHTEXT_OPTIONS);

    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date from post object
    const publishDate = formatDate(episode.sys.createdAt);

    // Get writers from post object
    const writers = episode.fields.writer.map((writer) => {
        return writer.fields.name;
    });
    
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/nonnormalvectors'>
                        <a className={`bg-white uppercase`}>← Back to Episodes</a>
                    </Link>
                    <div className={`mt-12 mb-8`}>
                        <Image 
                            src={`https:${thumbnail.fields.file.url}`}
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                            alt={thumbnail.fields.description}
                        />
                        <h1 className={`bg-white w-fit text-5xl mt-4`}>{title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}</p>
                    </div>
                    <div className={`w-full lg:w-3/4`}>
                        <h2 className={`bg-white w-fit text-2xl my-4`}>{description}</h2>
                        <div className={`bg-white w-fit mb-8`}>{body}</div>
                        <a href={url} target='_blank' rel='noreferrer' className={`bg-white w-fit text-3xl`}>Listen now!</a>
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
    const res = await client.getEntries({ 
        content_type: 'post',
        'fields.nnv': true
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
        'fields.nnv': true,
        'fields.slug': params.slug
    });

    return {
        props: {
            episode: items[0]
        }
    }
}

export default NonNormalVectorsPage;