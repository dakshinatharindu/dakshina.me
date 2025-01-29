import Link from 'next/link';
import {getSortedPostsData, PostData} from '@/lib/posts';

export default function Blog() {
    const allPostsData: PostData[] = getSortedPostsData();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {allPostsData.map(({id, title, date}) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`}>{title}</Link>
                        <br/>
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}