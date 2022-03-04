import Layout from '../components/Layout/Layout';
import NextImage from '../components/Image/Image';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../lib/api';

export default function AboutPage({ content }) {
    return (
        <Layout title='The Sound | About Us'>
            <div className={`px-8 lg:w-3/4 mx-auto`}>

                <div className={``}>
                    <div className={`my-4`}>
                        <h1 className={`text-6xl`}>{content.attributes.title}</h1>
                        <p className={`bg-white p-2 text-2xl md:text-3xl`}>{content.attributes.description}</p>
                    </div>
                    <NextImage image={content.attributes.headerImage}/>
                </div>

                <div className={``}>
                    <div className={`bg-white p-2 text-2xl my-8`}>
                        <ReactMarkdown>{content.attributes.contentSection1}</ReactMarkdown>
                    </div>
                    <div className={`bg-white p-2 text-2xl my-8`}>
                        <ReactMarkdown>{content.attributes.contentSection2}</ReactMarkdown>
                    </div>
                </div>

                <div className={`md:flex justify-around`}>

                    <div className={`w-full md:w-2/6 md:my-12`}>
                        <NextImage image={content.attributes.kateImage}/>
                        <div className={`my-4`}>
                            <h2 className={`text-3xl`}>Kate</h2>
                            <p className={`bg-white p-2 text-xl`}>{content.attributes.kateBio}</p>
                        </div>
                    </div>

                    <div className={`w-full md:w-2/6 md:my-12`}>
                        <NextImage className={``} image={content.attributes.allegraImage}/>
                        <div className={`my-4`}>
                            <h2 className={`text-3xl`}>Allegra</h2>
                            <p className={`bg-white p-2 text-xl`}>{content.attributes.allegraBio}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const aboutPage = await fetchAPI('/about-page', { populate: '*', encodeValuesOnly: true });

    return {
        props: {
            content: aboutPage.data
            }
        }
}