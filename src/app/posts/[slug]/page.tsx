import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import Comments from '@/components/Comments';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    const postData = await getPostData(slug);

    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
            >
              ← Back to Blog
            </Link>

            <article>
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={postData.date}>
                    {formatDistanceToNow(new Date(postData.date), { addSuffix: true })}
                  </time>
                  {postData.author && <span>by {postData.author}</span>}
                </div>
                {postData.tags && postData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {postData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />
            </article>

            {/* Comments Section - Configure these values when you set up Giscus */}
            {process.env.NEXT_PUBLIC_GISCUS_REPO && (
              <Comments
                repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
                repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
                category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General'}
                categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''}
              />
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}