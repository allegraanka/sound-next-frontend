import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../../lib/api';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

const SoundCheckPage = ({ sc }) => {
    console.log('what string', sc);
    const { title, description, category, featured, thumbnail, writer, content } = sc.fields;

    const body = documentToReactComponents(content);

    // Get writers from post object
    const writers = sc.fields.writer.map((writer) => {
        return writer.fields.name;
    });

    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/soundcheck'>
                        <a className={`bg-white uppercase`}>← Back to Sound Check</a>
                    </Link>
                    <div className={`bg-white mt-12 mb-8`}>
                        <Image 
                            src={`https:${thumbnail.fields.file.url}`}
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                            alt={thumbnail.fields.description}
                        />
                        <h1 className={`text-5xl mt-4`}>{title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {sc.sys.createdAt}</p>
                    </div>
                    <div className={`bg-white w-full lg:w-3/4`}>
                        <h2 className={`text-2xl my-4`}>{description}</h2>
                        <div className={`my-8`}>{body}</div>
                    </div>
                </article>
                <div className={`bg-white w-fit my-8`}>
                    <span className={`text-lg`}>Was this fun to read?</span>
                    <Link href='/soundcheck'>
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
            sc: items[0]
        }
    }
}

export default SoundCheckPage;