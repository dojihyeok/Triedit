import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
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
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }} {...props} />,
                        h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }} {...props} />,
                        p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                        ul: ({ node, ...props }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }} {...props} />,
                        ol: ({ node, ...props }) => <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }} {...props} />,
                        li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', marginLeft: 0, marginBottom: '1.5rem', color: 'var(--text-tertiary)' }} {...props} />,
                        code: ({ node, className, children, ...props }: any) => {
                            const match = /language-(\w+)/.exec(className || '')
                            return !match ? (
                                <code style={{ backgroundColor: 'var(--surface-hover)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9em' }} {...props}>
                                    {children}
                                </code>
                            ) : (
                                <pre style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                                    <code className={className} style={{ color: '#e2e8f0' }} {...props}>
                                        {children}
                                    </code>
                                </pre>
                            )
                        }
                    }}
                >
                    {post.content}
                </ReactMarkdown>
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
