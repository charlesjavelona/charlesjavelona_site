// app/blog/page.tsx
import { getAllBlogPosts } from '@/lib/markdown';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = getAllBlogPosts();
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-3xl font-normal text-black mb-2">Blog</h1>
              <p className="text-gray-600">Thoughts and writings</p>
            </header>
            
            <div className="space-y-8">
              {sortedPosts.map(post => (
                <article key={post.slug} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <time className="text-sm text-gray-500 font-mono min-w-[80px] mt-1">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: '2-digit',
                        year: 'numeric'
                      })}
                    </time>
                    <div className="flex-1">
                      <h2 className="text-lg font-normal mb-2">
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="text-black hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {/* Optional: Add excerpt if you want */}
                      <div 
                        className="text-gray-600 text-sm leading-relaxed prose-p:mb-2"
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
            
            {sortedPosts.length === 0 && (
              <p className="text-gray-500 text-center py-12">No blog posts found.</p>
            )}
          </main>
          
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="sticky top-8">
              <ul className="space-y-1 text-sm">
                <li><Link href="/" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link href="/#" className="text-blue-600 hover:underline">Advice</Link></li>
                <li><Link href="/posts" className="text-blue-600 hover:underline font-medium">Posts</Link></li>
                <li><Link href="/bookshelf" className="text-blue-600 hover:underline">Bookshelf</Link></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}