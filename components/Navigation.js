import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return(
        <nav className={`bg-white px-6 py-4`}>
            <div className={`mx-auto`}>
                <div className={`flex justify-between items-center`}>
                    <div className={``}>
                        <Link href='/'>
                            <a><Image src='/logos/thesound_color.png' alt='the sound logo' width={250} height={100} /></a>
                        </Link>
                    </div>
                    
                    <ul className={`hidden lg:flex items-center space-x-6`}>
                        <li className={`inline`}>
                            <Link href='/about'>
                                <a className={`transition duration-300`}>About</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/shows'>
                                <a className={`transition duration-300`}>Shows</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/posts'>
                                <a className={`transition duration-300`}>Sound Board Blog</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/soundcheck'>
                                <a className={`transition duration-300`}>Sound Check Interview Series</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/nonnormalvectors'>
                                <a className={`transition duration-300`}>NNV Podcast</a>
                            </Link>
                        </li>
                    </ul>

                    <div className={`lg:hidden z-50 flex items-center`}>
                        <button className={`outline-none mobile-menu-button`} onClick={handleClick}>
                            <svg
                                className={`w-8 h-8 text-red-dark`}
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`${active ? '' : 'hidden'} absolute top-10 right-5 bg-white w-64 h-auto border-l-2 border-b-2 border-red-light mobile-menu`}>
                        <ul className={`md:flex flex-col`}>
                            <li className={`m-0`}>
                                <Link href='/about'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>About</a>
                                </Link>
                            </li>
                            <li className={`m-0`}>
                                <Link href='/shows'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Shows</a>
                                </Link>
                            </li>
                            <li className={``}>
                                <Link href='/posts'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Sound Board Blog</a>
                                </Link>
                            </li>
                            <li className={``}>
                                <Link href='/soundcheck'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Sound Check Interview Series</a>
                                </Link>
                            </li>
                            <li className={``}>
                                <Link href='/nonnormalvectors'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>NNV Podcast</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;