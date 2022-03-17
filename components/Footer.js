import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={`w-full h-80 bg-black flex justify-around items-center text-white border-t-2 border-red-light`}>
            <div>
                <div className={`my-4 uppercase`}>Friends of The Sound</div>
                <a href='https://www.bugjar.com/' target='_blank' rel='noreferrer'>
                    <Image src={`/images/bugjar.png`} width={100} height={100} alt='bug jar logo'/>
                </a>
            </div>
            <div>
                <a className={`text-4xl`} href='https://www.instagram.com/thesoundroc/'><FaInstagram/></a>
                <div className={`my-4`}>&copy; 2022 The Sound</div>
            </div>
        </footer >
    );
}