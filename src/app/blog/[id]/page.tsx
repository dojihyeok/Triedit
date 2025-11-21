import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../../lib/data';

export function generateStaticParams() {
    return getBlogPosts().map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const posts = getBlogPosts();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Post not found</h1>
                <Link href="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                ← Back to Blog
            </Link>

            <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '2rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image
                    src={post.thumbnail || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    backgroundColor: 'var(--surface-hover)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                }}>
                    {post.type}
                </span>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-tertiary)', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
                <span>♥ {post.likes} Likes</span>
            </div>

            <div className="markdown-body" style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {/* In a real app, we would render Markdown here. For demo, just text. */}
                {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Want to hear more from this engineer?</p>
                <Link
                    href={`/requests?author=${encodeURIComponent(post.author)}`}
                    className="btn btn-ghost"
                    style={{ border: '1px solid var(--border)' }}
                >
                    Request more from {post.author}
                </Link>
            </div>
        </div>
    );
}
