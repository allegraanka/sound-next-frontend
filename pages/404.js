import Layout from '../components/Layout/Layout';
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={`h-screen flex flex-col justify-center items-center text-5xl`}>
                <div className={`flex items-center space-x-2`}>
                    <FaExclamationTriangle />
                    <h1 className={`text-6xl`}>404</h1>
                </div>
                <h1 className={`text-center`}>You don&#39;t have to go 
                    <Link href='/'>
                        <a className={`uppercase mx-2`}>home</a>
                    </Link> but you can&#39;t stay here.
                </h1>
            </div>
        </Layout>
    );
}