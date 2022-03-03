import Link from 'next/link';
import ShowComponent from '../ShowComponent/ShowComponent';

const Tonight = ({ shows }) => {
    const current = new Date();
    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}.${day}.${year}`;
        return formattedDate;
    }

    const showsTonight = shows.filter((show) => {
        const showDate = new Date(show.attributes.date);
        const formattedShowDate = formatDate(showDate);
        const formattedCurrentDate = formatDate(current);
        return formattedShowDate === formattedCurrentDate && show.attributes.chosen === true;
    });

    const datetimeSorted = showsTonight.sort((a,b) => {
        const x = new Date(a.attributes.date);
        const y = new Date(b.attributes.date);
        return x - y;
    });

    return(
        <div className={`bg-white my-12 p-6 shadow-xl`}>
            <div className={`text-3xl`}>{formatDate(current)}</div>
            <h2 className={`text-5xl text-black drop-shadow-md`}>Rochester Tonight</h2>

            {shows.length === 0 && (
                <span>We have no show recommendations tonight!</span>
            )}

            {datetimeSorted && datetimeSorted.map((show) => (
                <ShowComponent key={show.id} show={show}/>
            ))}

            {shows.length > 0 && (
                <Link href='/shows'>
                    <a>All upcoming shows →</a>
                </Link>
            )}
        </div>
    );
}

export default Tonight;