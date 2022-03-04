import Link from 'next/link';
import ShowComponent from './ShowComponent';

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
        const showDate = new Date(show.fields.date);
        const formattedShowDate = formatDate(showDate);
        const formattedCurrentDate = formatDate(current);
        return formattedShowDate === formattedCurrentDate;
    });

    const datetimeSorted = showsTonight.sort((a,b) => {
        const x = new Date(a.fields.date);
        const y = new Date(b.fields.date);
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
                <ShowComponent key={show.sys.id} show={show}/>
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