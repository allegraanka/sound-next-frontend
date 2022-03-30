import Image from 'next/image';

export default function Flyer({ flyers }) {
    return(
        <div className={``}>
            {flyers && flyers.map((flyer) => (
                <div key={flyer.id} className={`my-12`}>
                    <Image
                        src={`https:${flyer.imageUrl}`}
                        width={flyer.width}
                        height={flyer.height}
                        alt={`show flyer`}
                    />
                </div>
            ))}
        </div>
    );
}