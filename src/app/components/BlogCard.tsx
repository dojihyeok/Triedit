import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    content: string;
    type: string;
    author: string;
    date: string;
    likes: number;
    thumbnail?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
    const isExternal = post.type === 'external' || post.type === 'youtube';

    return (
        <Link
            href={isExternal ? post.content : `/blog/${post.id}`}
            target={isExternal ? "_blank" : "_self"}
            className="card"
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 0,
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image
                    src={post.thumbnail || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                {post.type === 'youtube' && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderRadius: '50%',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                    </div>
                )}
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        backgroundColor: 'var(--surface-hover)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                    }}>
                        {post.type}
                    </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>
                    {post.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                    <span>{post.author}</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>{post.date}</span>
                        <span>♥ {post.likes}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
