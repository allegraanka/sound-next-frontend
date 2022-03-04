import Link from 'next/link';
import { FaCalendarDay } from 'react-icons/fa';

const ShowComponent = ({ show }) => {
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        const date = new Date(dateInput).toLocaleTimeString('en-us', options);
        return date;
    }

    return(
        <div className={`bg-white text-black flex w-full lg:w-96 my-3 py-3`}>
            <div className={`bg-white text-black min-w-fit px-2 mr-4`}>
                <div className={`w-fit flex items-center`}>
                    {show.isToday ? <FaCalendarDay /> : ''}
                    <div className={``}>{formatDate(show.fields.date)}</div>
                </div>
                <div className={`text-xl`}>{show.fields.ticketPrice}</div>
            </div>
            <div className={``}>
                <Link href={`/shows/${show.fields.slug}`}>
                    <a><div className={`text-2xl`}>{show.fields.headliner}</div></a>
                </Link>
                <div className={``}>{show.fields.support ? <span>{show.fields.support.join(', ')}</span> : ''}</div>
                <div className={`text-xl uppercase`}>{show.fields.venue}</div>
                <div className={`text-xs uppercase`}>{show.fields.genre}</div>
            </div>
        </div>
    );
}

export default ShowComponent;