import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function FeaturedPosts({ featured }) {
    console.log('featurrrrreeeddd', featured);
    return(
        <div className={`p-4`}>
            <div className={`my-4`}>
                <h1 className={`text-4xl`}>What&apos;s happening in Rochester</h1>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
                {featured && featured.map((post) => {
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
                                {post.fields.post === true ? <Link href='/posts'><a className={`text-sm uppercase`}>Sound Board</a></Link> : ''}
                                {post.fields.soundcheck === true ? <Link href='/soundcheck'><a className={`text-sm uppercase`}>Sound Check</a></Link> : ''}
                                {post.fields.nnv === true ? <Link href='/nonnormalvectors'><a className={`text-sm uppercase`}>Non Normal Vectors</a></Link> : ''}
                                <Link href={`${post.fields.nnv === true ? '/nonnormalvectors/' : '/posts/'}${post.fields.slug}`}>
                                    <a className={`text-xl block`}>{post.fields.title}</a>
                                </Link>
                                <ReactMarkdown className={`text-sm`}>{post.fields.description}</ReactMarkdown>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}