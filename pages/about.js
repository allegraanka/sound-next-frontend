import Layout from '../components/Layout';
import Image from 'next/image';


export default function AboutPage() {
    return (
        <Layout title='The Sound | About Us'>
            <div className={`flex flex-col items-center justify-center p-8`}>
                <div className={`w-full lg:w-3/4 my-8 px-4`}>
                    <p className={`text-5xl`}>Let&apos;s build a scene because we&apos;re all gonna benefit from it -- and the music&apos;s gonna benefit, which is the most important part.</p>
                    <span className={`text-xl`}>Arty Shepherd, Co-founder Saint Vitus, Brooklyn, NY</span>
                </div>
                <div className={`w-full lg:w-3/4 my-8 px-4`}>
                    <p className={`text-3xl`}>There are musicians all around you making powerful, important music. Music is about so much more than hits. <span className={`text-4xl`}>Those big, iconic moments that change everything.</span> It&apos;s more than just entertainment. For so many of us, music is truly a way to navigate life. It connects us with other people, as almost nothing else can. Music makes us smarter, and healtier, and happier. <span className={`text-4xl`}>Music is necessary. What if you lived in a city that believed that? That said, we&apos;re not waiting for that hit song to define us. We&apos;re a music city.</span> Because music is necessary.</p>
                    <span className={`text-xl`}>Elizabeth Cawein</span>
                </div>
                <div className={`w-full lg:w-3/4 my-8 px-4`}>
                    <p className={`text-3xl`}>Live music is one of the most powerful human experiences. It radiates electricity, force and inspiration. It&apos;s one of the most simple, yet profound, ways to bring humans together to create enigmatic connections.</p>
                </div>

                <div className={`w-full lg:w-3/4 my-8 px-4 text-2xl`}>
                    <h2>WHAT IS THE SOUND?</h2>
                    <p>Rochester, NY shines bright with a local music scene composed of passionate, talented artists, a great collection of venues, and dedicated fans who love to support their city. Enter: The Sound. A resource to create connections and make it easier to discover live music and support the local music scene. We curate live music each night of the week so you don’t spend hours Googling ‘what’s going on in Rochester’. We feature news and interviews of local musicians, showcase interesting new projects, and curate events we are excited about  - ultimately giving our local artists, venues, and residents a platform to thrive and support each other.</p>
                </div>
                <div className={`w-full lg:w-3/4 my-8 px-4 text-2xl`}>
                    <h2>WHO WE ARE</h2>
                    <p>The Sound was created by Allegra Anka and Kate Rogers. Allegra, having recently relocated from Philadelphia, and Kate from Brooklyn, are musicians who moved to Rochester in part for its strong foundation in music. Over a few beers one night as new friends in a new city, they chatted about their former close-knit music communities in NYC and Philly. They realized that Rochester’s music scene, while absolutely thriving, lacked connection - there were pockets of talented musicians who had never met. It was then they decided to set out on a mission to change that; bring the community closer together and create a platform where musicians, fans, and venues can interact and support each other.</p>
                </div>
                <div className={`w-full lg:w-3/4 my-8 px-4 text-2xl`}>
                    <h2>More to come here soon!</h2>
                </div>

            </div>
        </Layout>
    );
}