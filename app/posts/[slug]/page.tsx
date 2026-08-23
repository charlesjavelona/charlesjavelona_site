import { getAllBlogPosts } from '@/lib/markdown';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const posts = await getAllBlogPosts();
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);

  return (
    <article className="prose prose-lg prose-gray max-w-none">
      <header className="mb-8">
        <h1 className="text-2xl font-normal mb-2">{post?.title}</h1>
        <div className="text-sm text-muted-foreground">
          {post?.date}
        </div>
      </header>

      <div
        dangerouslySetInnerHTML={{ __html: post?.content || '' }}
        className="prose-p:leading-relaxed prose-p:mb-4"
      />
    </article>
  );
}
