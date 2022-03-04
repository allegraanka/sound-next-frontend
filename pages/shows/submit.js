import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/SubmitShow.module.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function SubmitShowPage() {
    const [values, setValues] = useState({
        headliner: '',
        support: '',
        venue: '',
        date: '',
        showTime: '',
        doorTime: '',
        ticketPrice: '',
        description: '',
        submission: true,
        chosen: false
    })

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const hasEmptyFields = Object.values(values).some((element) => element === '');
        if (hasEmptyFields) {
            toast.error('Please complete every field.');
        }

        console.log('values', values);

        try {
            const res = await axios.post(`${process.env.STRAPI_API_BASE_URL}/api/shows`, { data: values });
            console.log('submission response: ', res);
            router.push('/thanks');
        }
        catch (error) {
            console.log('There was an error submitting this show: ', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value})
    }

    return (
        <Layout title='The Sound | Submit a show'>
            <div className={`mb-12`}>
                <Link href='/'>
                    <a className={`uppercase`}>← Back to home</a>
                </Link>
                <h1 className={`text-5xl text-black my-8`} >Submit a show</h1>
                <ToastContainer />

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={`w-full md:w-5/6 lg:w-1/2 2xl:w-1/4`}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='headliner'>Headlining band</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='headliner' 
                                name='headliner'
                                placeholder='Enter headlining band'
                                value={values.headliner} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='support'>Support band(s)</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='support' 
                                name='support'
                                placeholder='Enter support band(s)'
                                value={values.support} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='venue'>Venue</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='venue' 
                                name='venue'
                                placeholder='Enter venue name'
                                value={values.venue} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='date'>Date</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='date' 
                                id='date' 
                                name='date'
                                value={values.date} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='showTime'>Show time</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='showTime' 
                                name='showTime'
                                placeholder='Enter show time'
                                value={values.showTime} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='doorTime'>Door time</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='doorTime' 
                                name='doorTime'
                                placeholder='Enter door time'
                                value={values.doorTime} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='ticketPrice'>Ticket price</label>
                            <input 
                                className={`w-full my-4 text-red-dark`}
                                type='text' 
                                id='ticketPrice' 
                                name='ticketPrice'
                                placeholder='Enter ticket price'
                                value={values.ticketPrice} 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={`w-full md:w-5/6 lg:w-1/2 2xl:w-1/4`}>
                        <label className={styles.label} htmlFor='description'>Description / Additional Info</label>
                        <textarea 
                            className={`w-full h-48 my-4 text-red-dark`} 
                            id='description' 
                            name='description'
                            value={values.description} 
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <input type='submit' value='Submit show' className={`px-8 py-4 text-white bg-red-light uppercase hover:bg-red-dark hover:cursor-pointer`}/>
                </form>
            </div>
        </Layout>
    );
}