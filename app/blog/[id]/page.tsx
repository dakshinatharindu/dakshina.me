import {getPostData, getSortedPostsData, PostData} from '@/lib/posts';

// Generate static paths for all blog posts
export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function Post({params}: { params: { id: string } }) {
    const postData: PostData = await getPostData(params.id);

    return (
        <article className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <small className="text-gray-500">{postData.date}</small>
            <div
                className="prose prose-lg max-w-none mt-6"
                dangerouslySetInnerHTML={{__html: postData.contentHtml || ''}}
            />
        </article>
    );
}