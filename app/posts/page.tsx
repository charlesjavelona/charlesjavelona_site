import { getAllBlogPosts } from '@/lib/markdown';
import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  slug: string;
  draft: boolean;
}

export default async function BlogIndex() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <h1 className="text-3xl font-normal mb-2">Writing</h1>
      <p className="text-muted-foreground mb-10">Thoughts and writings</p>

      <div className="space-y-6">
        {posts.map((post: BlogPost) => (
          <article key={post.slug} className="border-b border-border pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <time className="text-sm text-muted-foreground min-w-[80px] mt-1">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })}
              </time>
              <div className="flex-1">
                <h2 className="text-lg font-normal mb-1">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="hover:underline transition-colors"
                  >
                    {post.title}
                  </Link>
                  {post.draft && <span className="ml-2 text-xs text-orange-500 font-medium">[DRAFT]</span>}
                </h2>
                <div
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: post.content.length > 200
                      ? post.content.substring(0, 200).replace(/<[^>]*>/g, '') + '...'
                      : post.content.replace(/<[^>]*>/g, '')
                  }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
