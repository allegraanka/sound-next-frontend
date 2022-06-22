import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function FeaturedPosts({ featured }) {
    const recentFeatured = featured.filter((featured) => {
        const featuredDate = new Date(featured.sys.createdAt);
        const d = new Date();
        const compareDate = d.setMonth(d.getMonth()-1);
        return featuredDate >= compareDate;
    })

    return(
        <div className={`p-4`}>
            <div className={`my-4`}>
                <h1 className={`text-5xl`}>Happening in Rochester</h1>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
                {recentFeatured && recentFeatured.map((post) => {
                    return (
                        <div key={post.sys.id} className={`bg-white pb-4 my-4 md:mx-4 col-span-1`}>
                            <div className={``}>
                            <Image 
                                src={`https:${post.fields.thumbnail.fields.file.url}`}
                                width={post.fields.thumbnail.fields.file.details.image.width}
                                height={post.fields.thumbnail.fields.file.details.image.height}
                                alt={post.fields.thumbnail.fields.description}
                            />
                            </div>
                            <div className={`px-2`}>
                                {post.fields.post === true ? 
                                    <div className={``}>
                                        <Link href='/posts'><a className={`text-sm uppercase`}>Sound Board</a></Link>
                                        <Link href={`${post.fields.post === true ? '/posts/' : ''}${post.fields.slug}`}>
                                            <a className={`text-xl block`}>{post.fields.title}</a>
                                        </Link>
                                    </div>
                                : ''}
                                {post.fields.soundcheck === true ? 
                                    <div className={``}>
                                        <Link href='/soundcheck'><a className={`text-sm uppercase`}>Sound Check</a></Link>
                                        <Link href={`${post.fields.soundcheck === true ? '/soundcheck/' : ''}${post.fields.slug}`}>
                                            <a className={`text-xl block`}>{post.fields.title}</a>
                                        </Link>
                                    </div>
                                : ''}
                                {post.fields.nnv === true ? 
                                    <div className={``}>
                                        <Link href='/nonnormalvectors'><a className={`text-sm uppercase`}>Non-Normal Vectors</a></Link>
                                        <Link href={`${post.fields.nnv === true ? '/nonnormalvectors/' : ''}${post.fields.slug}`}>
                                            <a className={`text-xl block`}>{post.fields.title}</a>
                                        </Link>
                                    </div>
                                : ''}
                                {post.fields.soundbytes === true ? 
                                    <div className={``}>
                                        <Link href='/soundbytes'><a className={`text-sm uppercase`}>Sound Bytes</a></Link>
                                        <Link href={`${post.fields.soundbytes === true ? '/soundbytes/' : ''}${post.fields.slug}`}>
                                            <a className={`text-xl block`}>{post.fields.title}</a>
                                        </Link>
                                    </div>
                                : ''}
                                <ReactMarkdown className={`text-sm`}>{post.fields.description}</ReactMarkdown>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}