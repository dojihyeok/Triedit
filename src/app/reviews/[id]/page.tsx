import Link from 'next/link';
import { getReviews, getReview } from '../../lib/data';
import { CATEGORIES, COMPANY_SIZES } from '../../data/mock';

export function generateStaticParams() {
    return getReviews().map((review) => ({ id: review.id.toString() }));
}

export default async function ReviewDetailEnPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const review = getReview(parseInt(id));

    if (!review) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Review not found</h1>
                <Link href="/reviews" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to list
                </Link>
            </div>
        );
    }

    const categoryLabel = CATEGORIES.find((c) => c.id === review.category)?.label;
    const companySizeLabel = COMPANY_SIZES.find((s) => s.id === review.companySize)?.label;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link href="/reviews" style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                ← Back to list
            </Link>

            <div className="card" style={{ marginBottom: '2rem' }}>
                {/* Header */}
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--primary)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    backgroundColor: 'var(--surface-hover)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '4px'
                                }}>{categoryLabel}</span>
                                {companySizeLabel && (
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: '600',
                                        backgroundColor: 'var(--surface-hover)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>{companySizeLabel}</span>
                                )}
                            </div>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{review.solution}</h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{review.company}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                {review.rating} <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>/ 5.0</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                        <div>
                            <span>Author: {review.author}</span> • <span>Date: {review.date}</span>
                        </div>
                        {review.coffeeChatAvailable && (
                            <a href={review.contactLink || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                ☕️ Coffee Chat
                            </a>
                        )}
                    </div>
                </div>

                {/* Problem Context */}
                {review.problemContext && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        <h3 style={{ marginBottom: '0.5rem', color: '#f87171' }}>Problem Definition</h3>
                        <p>{review.problemContext}</p>
                    </div>
                )}

                {/* Technical Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: 'var(--radius-md)', border: '1px solid #334155' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#a78bfa' }}>Technical Evaluation</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {['scalability', 'integration', 'documentation', 'maintainability'].map((key) => (
                            <div key={key}>
                                <span style={{ color: '#e2e8f0' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                {/* @ts-ignore */}
                                <div style={{ fontWeight: 'bold', color: '#a78bfa' }}>{review.technicalMetrics?.[key] ?? '-'} pts</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Business Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Business Evaluation</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {['usability', 'efficiency', 'costPerformance', 'vendorStability'].map((key) => (
                            <div key={key}>
                                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                {/* @ts-ignore */}
                                <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{review.metrics?.[key] ?? '-'} pts</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pros & Cons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                    <div>
                        <h4 style={{ color: '#4ade80' }}>Pros</h4>
                        <p>{review.pros}</p>
                    </div>
                    <div>
                        <h4 style={{ color: '#f87171' }}>Cons</h4>
                        <p>{review.cons}</p>
                    </div>
                </div>

                {/* Detailed Description */}
                <div>
                    <h3>Detailed Review</h3>
                    <p>{review.description}</p>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Want to hear more from this engineer?</p>
                    <Link
                        href={`/requests?author=${encodeURIComponent(review.author)}`}
                        className="btn btn-ghost"
                        style={{ border: '1px solid var(--border)' }}
                    >
                        Request more from {review.author}
                    </Link>
                </div>
            </div>
        </div>
    );
}
