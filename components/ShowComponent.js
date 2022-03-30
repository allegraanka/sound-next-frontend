import Link from 'next/link';
import { FaCalendarDay } from 'react-icons/fa';

const ShowComponent = ({ show }) => {
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit'};
        const date = new Date(dateInput).toLocaleTimeString('en-us', options);
        return date;
    }

    return(
        <div className={`w-full my-8`}>
            <div className={`bg-white text-black`}>
                <div className={`bg-white text-black`}>
                    <div className={`w-fit flex items-center`}>
                        {show.isToday ? <span className={`mr-2`}><FaCalendarDay /></span> : ''}
                        <div className={`text-lg`}>{formatDate(show.fields.date)}</div>
                    </div>
                </div>
                <div className={`w-full`}>
                    <Link href={`/shows/${show.fields.slug}`}>
                        <a><div className={`text-3xl`}>{show.fields.headliner}</div></a>
                    </Link>
                    <div className={`text-xl`}>{show.fields.support ? <span>{show.fields.support.join(', ')}</span> : ''}</div>
                    <div className={`text-lg uppercase`}>{show.fields.venue}
                        <span className={`text-xl mx-2`}>| {show.fields.ticketPrice}</span>
                    </div>
                    <div className={`text-xs uppercase`}>Genre→ {show.fields.genre}</div>
                </div>
            </div>
        </div>
    );
}

export default ShowComponent;