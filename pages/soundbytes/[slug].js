import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const SoundBytePage = ({ sb }) => {
    const { title, description, thumbnail, content } = sb.fields;

    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className={`my-8 w-full text-lg text-black`}>{children}</p>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri}>{children}</a>
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
    const publishDate = formatDate(sb.sys.createdAt);

    // Get writers from post object
    const writers = sb.fields.writer.map((writer) => {
        return writer.fields.name;
    });

    return(
        <Layout title='The Sound | Sound Bytes'>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/soundbytes'>
                        <a className={`bg-white uppercase`}>← Back to Sound Bytes</a>
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
                    <div className={`bg-white w-full lg:w-3/4`}>
                        <h2 className={`text-2xl my-4`}>{description}</h2>
                        <div className={`my-8`}>{body}</div>
                    </div>
                </article>
                <div className={`bg-white w-fit my-8`}>
                    <span className={`text-lg`}>Was this fun to read?</span>
                    <Link href='/soundbytes'>
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
        'fields.soundbytes': true
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
        'fields.soundbytes': true,
        'fields.slug': params.slug
    });

    return {
        props: {
            sb: items[0]
        }
    }
}

export default SoundBytePage;