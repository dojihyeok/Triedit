import Link from 'next/link';
import { MOCK_REVIEWS } from '../../data/mock';

export default function ReviewsEn() {
    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '1000px' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Explore Problem‑Solving Experiences</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1.5rem'
            }}>
                {MOCK_REVIEWS.slice(0, 5).map((review) => (
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
                        <Link href={`/en/reviews/${review.id}`} className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
