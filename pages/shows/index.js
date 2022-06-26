import Layout from '../../components/Layout';
import { createClient } from 'contentful';
// import Flyer from '../../components/Flyer';
import Paginator from '../../components/Paginator';


const ShowsPage = ({ shows, flyers }) => {
    console.log('shows is an array ', Array.isArray(shows));
    console.log('shows ', shows);

    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`grid place-items-center min-h-screen`}>
                <div className={`p-4 mx-auto`}>
                    <h1 className={`text-6xl text-black`}>Upcoming Shows</h1>
                    <p className={`text-md uppercase`}>Upcoming shows in Rochester. Check <a href='https://www.instagram.com/thesoundroc/' target='_blank' rel="noreferrer">Instagram</a> for updates, too!</p>
                </div>
                <div className={`p-4 max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-4`}>
                    {/* <div className={`mx-auto lg:col-span-2`}>
                        <Flyer flyers={flyers}/>
                    </div> */}
                    <div className={`mx-auto w-full lg:col-span-3 lg:mx-12`}>
                        {shows.length === 0 && <p>There are no upcoming shows right now!</p>}
                        {/* <Paginator shows={shows}/> */}
                        {shows.map((shows, idx) => {
                            return(
                                <ul key={idx}>
                                    {shows.map((details, dIndex) => {
                                        return <li key={dIndex}>{details}</li>
                                    })}
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>  
    );
}

export async function getServerSideProps(context) {
    const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1anZ7xoDHVvzBGNHobn7SA9ZaoIl925DSo4WtiUwDWAo/values/Sheet1?key=AIzaSyAy4rTcbcNLGwOPrboJN5olJg28VCfYSLM'); 
    const data = await res.json();
    const showData = data.values;

    return {
        props: {
            shows: showData
        },
    }
}

// export async function getStaticProps() {
//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY
//       });

//     const shows = await client.getEntries({ content_type: 'show' });
//     const flyers = await client.getEntries({ content_type: 'showFlyer' });

//     const upcomingShows = shows.items.filter((show) => {
//         const showDate = new Date(show.fields.date);
//         const current = new Date();

//         // IF THE SHOW IS TODAY, ADD isToday PROPERTY FOR TONIGHT COMPONENT TO FILTER AGAINST
//         if (showDate === current) {
//             show.isToday = true;
//         }

//         // RETURN SHOWS WITH TODAY'S DATE OR GREATER
//         if (showDate >= current) {
//             return show;
//         };
//     });

//     const datetimeSorted = upcomingShows.sort((a,b) => {
//         const x = new Date(a.fields.date);
//         const y = new Date(b.fields.date);
//         return x - y;
//     });

//     const flyersUrls = flyers.items.map((flyer) => {
//         let flyerData = {
//             id: flyer.sys.id,
//             featured: flyer.fields.featured,
//             imageUrl: flyer.fields.image.fields.file.url,
//             width: flyer.fields.image.fields.file.details.image.width,
//             height: flyer.fields.image.fields.file.details.image.height,
//         }
//         return flyerData;
//     })
  
//     return {
//         props: {
//           shows: datetimeSorted,
//           flyers: flyersUrls
//         },
//         revalidate: 3600, // revalidates at most once every hour
//       }
//   }

export default ShowsPage;