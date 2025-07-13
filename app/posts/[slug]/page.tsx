// app/posts/[slug]/page.tsx
import { getAllBlogPosts } from '@/lib/markdown';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const posts = await getAllBlogPosts();  // ← Add await
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <article className="prose prose-lg prose-gray max-w-none">
              <header className="mb-8">
                <h1 className="text-2xl font-normal mb-2 text-black">{post?.title}</h1>
                <div className="text-sm text-gray-500">
                  {post?.date} <a href="#" className="text-blue-600">permalink</a>
                </div>
              </header>
              
              <div 
                dangerouslySetInnerHTML={{ __html: post?.content || '' }}
                className="prose-p:leading-relaxed prose-p:mb-4"
              />
            </article>
          </main>
          
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="sticky top-8">
              <ul className="space-y-1 text-sm">
                <li><Link href="/" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link href="/#" className="text-blue-600 hover:underline">Advice</Link></li>
                <li><Link href="/blog" className="text-blue-600 hover:underline">Blog</Link></li>
                <li><Link href="/bookshelf" className="text-blue-600 hover:underline">Bookshelf</Link></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}