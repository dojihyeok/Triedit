import { MOCK_REVIEWS } from '../../data/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all mock reviews
export async function generateStaticParams() {
    return MOCK_REVIEWS.map((review) => ({
        id: review.id.toString(),
    }));
}

export default function ReviewDetailPage({ params }: { params: { id: string } }) {
    const review = MOCK_REVIEWS.find((r) => r.id.toString() === params.id);

    if (!review) {
        notFound();
    }

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link href="/reviews" className="btn btn-ghost" style={{ marginBottom: '2rem', paddingLeft: 0 }}>
                ← 목록으로 돌아가기
            </Link>

            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '2rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '1.5rem'
                }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{review.solution}</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{review.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: 'var(--primary)',
                            marginBottom: '0.25rem'
                        }}>
                            {review.rating} <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)', fontWeight: 'normal' }}>/ 5.0</span>
                        </div>
                        <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                            {review.date}
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--success)' }}>장점</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{review.pros}</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--error)' }}>단점</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{review.cons}</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>상세 후기</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{review.description}</p>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1.5rem',
                    marginTop: '3rem',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.875rem'
                }}>
                    작성자: {review.author}
                </div>
            </div>
        </div>
    );
}
