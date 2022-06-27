import styles from '../styles/FeaturedPosts.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function FeaturedPosts({ featured }) {
    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

    const recentFeatured = featured.filter((featured) => {
        const featuredDate = new Date(featured.sys.createdAt);
        const d = new Date();
        const compareDate = d.setMonth(d.getMonth()-1);
        return featuredDate >= compareDate;
    })

    return(
        <div className={styles.featuredPostsContainer}>
            {recentFeatured && recentFeatured.map((post) => {
                return (
                    <div key={post.sys.id} className={``}>
                        <div className={``}>
                            <Image 
                                src={`https:${post.fields.thumbnail.fields.file.url}`}
                                width={post.fields.thumbnail.fields.file.details.image.width}
                                height={post.fields.thumbnail.fields.file.details.image.height}
                                alt={post.fields.thumbnail.fields.description}
                            />
                        </div>
                        <div className={styles.featuredPostContainer}>
                            <p className={styles.featuredPostDisplayDate}>{formatDate(post.sys.createdAt)}</p>
                            <div className={styles.featuredPostTitle}>
                                <Link href={`${post.fields.post === true ? '/posts/' : ''}${post.fields.slug}`}>
                                    <a>{post.fields.title}</a>
                                </Link>
                            </div>                     

                            <ReactMarkdown className={styles.featuredPostDescription}>{post.fields.description}</ReactMarkdown>
                            <Link href={`${post.fields.post === true ? '/posts/' : ''}${post.fields.slug}`}>
                                <a>Read more →</a>
                            </Link>

                            {/* {post.fields.post === true ? 
                                <div className={``}>
                                    <Link href='/posts'><a className={styles.featuredPostTag}>Sound Board</a></Link>
                                </div>
                            : ''}
                            {post.fields.soundcheck === true ? 
                                <div className={``}>
                                    <Link href='/soundcheck'><a className={styles.featuredPostTag}>Sound Check</a></Link>
                                </div>
                            : ''}
                            {post.fields.nnv === true ? 
                                <div className={``}>
                                    <Link href='/nonnormalvectors'><a className={styles.featuredPostTag}>Non-Normal Vectors</a></Link>
                                </div>
                            : ''}
                            {post.fields.soundbytes === true ? 
                                <div className={``}>
                                    <Link href='/soundbytes'><a className={styles.featuredPostTag}>Sound Bytes</a></Link>
                                </div>
                            : ''} */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}