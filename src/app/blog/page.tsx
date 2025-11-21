import Link from 'next/link';
import { getBlogPosts } from '../lib/data';
import BlogCard from '../components/BlogCard';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tech Blog</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Deep dive into engineering challenges and solutions.
                </p>
                <Link href="/blog/write" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    Share Your Insight
                </Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
