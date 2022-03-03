import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={`w-full h-48 bg-black flex items-center justify-around border-t-2 border-red-light`}>
            <div className={`text-white`}>&copy;2022 The Sound</div>
            <div>
                <h2 className={`text-white`}>Links</h2>
                <Link href='/about'><a>About this project</a></Link>
                <a className={`text-2xl`} href='https://www.instagram.com/thesoundroc/'><FaInstagram/></a>
            </div>
        </footer >
    );
}