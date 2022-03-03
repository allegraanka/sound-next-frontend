import Link from 'next/link';
import { FaCalendarDay } from 'react-icons/fa';

const ShowComponent = ({ show }) => {
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    return(
        <div className={`bg-white text-black flex w-full lg:w-96 my-3 py-3`}>
            <div className={`bg-white text-black min-w-fit px-2 mr-4`}>
                <div className={`w-fit flex items-center`}>
                    {show.isToday ? <FaCalendarDay /> : ''}
                    <div className={``}>{formatDate(show.attributes.date)}</div>
                </div>
                <div className={`text-xl`}>{show.attributes.showTime}</div>
                <div className={`text-xl`}>{show.attributes.ticketPrice}</div>
            </div>
            <div className={``}>
                <Link href={`/shows/${show.id}`}>
                    <a><div className={`text-2xl`}>{show.attributes.headliner}</div></a>
                </Link>
                <div className={``}>{show.attributes.support ? <span>{show.attributes.support}</span> : ''}</div>
                <div className={`text-xl uppercase`}>{show.attributes.venue}</div>
                <div className={`text-xs uppercase`}>{show.attributes.genre}</div>
            </div>
        </div>
    );
}

export default ShowComponent;