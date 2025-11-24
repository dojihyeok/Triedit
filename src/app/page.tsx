
import Image from "next/image";
import Link from "next/link";
import { getReviews } from "./lib/data";

export default async function Home() {
    const reviews = await getReviews();
    const recentReviews = reviews.slice(0, 5);
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                textAlign: 'center',
                padding: '6rem 0',
                background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Your <span className="text-gradient">Problem‑Solving Experience</span> becomes a milestone for others.
                    </h1>
                    <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Not just a tool review.<br />
                        Share how you defined a problem and solved it with technology to showcase your engineering value.
                    </p>
                    <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/reviews" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                            Browse Experiences
                        </Link>
                        <Link href="/write" className="btn btn-ghost" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                            Share Your Experience
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Deep Problem Definition</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Clear problem definition raises the value of the solution.
                            </p>
                        </div>
                        <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem', animationDelay: '0.1s' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛠️</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Proven Solutions</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Share practical know‑how and automation cases.
                            </p>
                        </div>
                        <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem', animationDelay: '0.2s' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤝</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Valuable Networking</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Connect with engineers and discover new opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Reviews Section */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Recent Experiences</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Mock Data Cards */}
                        {recentReviews.map((review) => (
                            <div key={review.id} className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem' }}>{review.solution}</h3>
                                    <span style={{
                                        backgroundColor: 'var(--surface-hover)',
                                        padding: '0.2rem 0.4rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.8rem',
                                        fontWeight: '600'
                                    }}>⭐️ {review.rating}</span>
                                </div>
                                <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    {review.pros}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                                    <span>{review.author}</span>
                                    <span>{review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
