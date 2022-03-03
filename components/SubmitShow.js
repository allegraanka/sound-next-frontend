import styles from './SubmitShow.module.css';
import Link from 'next/link';

const SubmitShowCTA = () => {

    return(
        <div className={`bg-white h-60 my-16 flex flex-col justify-center items-center`}>
            <p className={`text-4xl`}>Have a show coming up?</p>
            <Link href='/shows/submit'>
                <a className={`text-4xl uppercase`}>Let us know</a>
            </Link>
        </div>
    );
}

export default SubmitShowCTA;