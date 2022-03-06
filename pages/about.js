import Layout from '../components/Layout';
import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function AboutPage({ about }) {
    const { title, description, contentSection1, contentSection2, allegraBio, allegraPhoto, kateBio, katePhoto } = about.fields;

    const formattedBody1 = documentToReactComponents(contentSection1);
    const formattedBody2 = documentToReactComponents(contentSection2);
    const formattedKateBio = documentToReactComponents(kateBio);
    const formattedAllegraBio = documentToReactComponents(allegraBio);

    return (
        <Layout title='The Sound | About Us'>
            <div className={`mb-12 w-full flex flex-col p-8`}>
                <h1 className={`text-7xl mb-12`}>{title}</h1>
                <div className={`text-2xl w-full mb-12 xl:w-3/4`}>{description}</div>
                <div className={`mx-auto`}>
                    <Image 
                        src={`https:${about.fields.headerImage.fields.file.url}`}
                        width={about.fields.headerImage.fields.file.details.image.width}
                        height={about.fields.headerImage.fields.file.details.image.height}
                        alt={about.fields.headerImage.fields.description}
                    />
                </div>

                <div className={`text-2xl w-full my-8 lg:w-3/4`}>{formattedBody1}</div>
                <div className={`text-2xl w-full my-8 lg:w-3/4`}>{formattedBody2}</div>

                <div className={`md:flex`}>
                    <div className={`my-8 mx-2 md:w-1/2`}>
                        <Image 
                            src={`https:${about.fields.katePhoto.fields.file.url}`}
                            width={about.fields.katePhoto.fields.file.details.image.width}
                            height={about.fields.katePhoto.fields.file.details.image.height}
                            alt={about.fields.katePhoto.fields.description}
                        />
                        <h2 className={`text-3xl`}>Kate</h2>
                        <div className={`text-2xl`}>{formattedKateBio}</div>
                    </div>
                    <div className={`my-8 mx-2 md:w-1/2`}>
                        <Image 
                            src={`https:${about.fields.allegraPhoto.fields.file.url}`}
                            width={about.fields.allegraPhoto.fields.file.details.image.width}
                            height={about.fields.allegraPhoto.fields.file.details.image.height}
                            alt={about.fields.allegraPhoto.fields.description}
                        />
                        <h2 className={`text-3xl`}>Allegra</h2>
                        <div className={`text-2xl`}>{formattedAllegraBio}</div>
                    </div>
                </div>

                <div className={`w-full lg:w-3/4 my-12 mx-auto px-4`}>
                    <p className={`text-4xl`}>Let&apos;s build a scene because we&apos;re all gonna benefit from it -- and the music&apos;s gonna benefit, which is the most important part.</p>
                    <span className={`text-xl`}>Arty Shepherd, Saint Vitus Co-founder, Brooklyn, NY</span>
                </div>
                <div className={`w-full lg:w-3/4 my-12 mx-auto px-4`}>
                    <p className={`text-3xl`}>
                        There are musicians all around you making powerful, important music. Music is about so much more than hits. 
                        <span className={`text-4xl`}> Those big, iconic moments that change everything. </span> 
                        It&apos;s more than just entertainment. For so many of us, music is truly a way to navigate life. It connects us with other people, as almost nothing else can. Music makes us smarter, and healtier, and happier. 
                        <span className={`text-4xl`}> Music is necessary. What if you lived in a city that believed that? [A city] that said, we&apos;re not waiting for that hit song to define us. We&apos;re a music city. </span> 
                        Because music is necessary.
                    </p>
                    <span className={`text-xl`}>Elizabeth Cawein, Music Export MEM Founder, Music strategy, advocacy, publicity</span>
                </div>

            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });
  
    const res = await client.getEntries({ content_type: 'about' });
  
    return {
      props: {
        about: res.items[0]
      },
      revalidate: 1,
    }
  }