import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
    const [term, setTerm] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/shows/search?term=${term}`);
        setTerm('');
    }

    return(
        <div className={`h-36 flex items-center px-4 lg:px-8`}>
            <form className={``} onSubmit={handleSubmit}>
                <h2 className={`text-xl`}>Looking for something?</h2>
                <span className={``}>
                    <input 
                        className={``} 
                        type="text" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder={`Search shows`}>
                    </input>
                </span>
                <input className={`mx-2 hover:cursor-pointer`} type='submit' value='Go →'></input>
            </form>
        </div>
    );
}