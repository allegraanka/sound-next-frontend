import Link from 'next/link';

const Thanks = () => {
    return(
        <div className={``}>
            <span className={`text-9xl text-red-light uppercase`}>Thank you</span>
            <span className={``}>We&#39;re excited to build community with you.</span>
            <span className={``}>You&apos;re all set. You can return <Link href='/'><a>home</a></Link> or close this window.</span>
        </div>
    );
}

export default Thanks;