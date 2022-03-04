import Link from 'next/link';
import Image from 'next/image';

export default function NnvEpisodeCard({ episode }) {
    const { title, description, slug, category, thumbnail, writer } = episode.fields;
    return (
        <div>
            <Image 
                src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                alt={thumbnail.fields.description}
            />
            <Link href={`/nonnormalvectors/${slug}`}>
                <a>
                    <h2 className={`bg-white w-fit text-2xl text-red-dark hover:text-red-light`}>{title}</h2>
                </a>
            </Link>
            <div className={`bg-white w-fit`}>{description}</div>
        </div>
    );
}