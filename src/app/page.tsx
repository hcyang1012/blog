import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome to my personal blog where I share thoughts and ideas
          </p>
        </header>

        <main>
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
            
            {allPostsData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No posts yet. Create your first post in the <code>posts/</code> directory!
                </p>
                <p className="text-sm text-gray-500">
                  Create a <code>.md</code> file with frontmatter to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {allPostsData.map(({ slug, date, title, excerpt, tags }) => (
                  <article
                    key={slug}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/posts/${slug}`} className="block group">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {formatDistanceToNow(new Date(date), { addSuffix: true })}
                      </p>
                      {excerpt && (
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {excerpt}
                        </p>
                      )}
                      {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
