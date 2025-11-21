import Link from 'next/link';
import { MOCK_REVIEWS, CATEGORIES } from '../../data/mock';

export function generateStaticParams() {
    return MOCK_REVIEWS.map((review) => ({
        id: review.id.toString(),
    }));
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const review = MOCK_REVIEWS.find((r) => r.id === parseInt(id));

    if (!review) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>리뷰를 찾을 수 없습니다.</h1>
                <Link href="/reviews" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    목록으로 돌아가기
                </Link>
            </div>
        );
    }

    const categoryLabel = CATEGORIES.find(c => c.id === review.category)?.label;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link href="/reviews" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                ← 목록으로 돌아가기
            </Link>

            <div className="card">
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--primary)',
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase'
                            }}>
                                {categoryLabel}
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

                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                        <span>작성자: {review.author}</span>
                        <span>작성일: {review.date}</span>
                    </div>
                </div>

                {/* Advanced Metrics */}
                <div style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>상세 평가</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {[
                            { id: 'usability', label: '사용자 편의성' },
                            { id: 'efficiency', label: '업무 개선률' },
                            { id: 'costPerformance', label: '가성비' },
                            { id: 'vendorStability', label: '기업 평판/연속성' }
                        ].map((metric) => (
                            <div key={metric.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: '600' }}>{metric.label}</span>
                                    <span style={{ color: 'var(--primary)' }}>
                                        {/* @ts-ignore */}
                                        {review.metrics?.[metric.id] || '-'}점
                                    </span>
                                </div>
                                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '100%',
                                        // @ts-ignore
                                        width: `${(review.metrics?.[metric.id] || 0) * 20}%`,
                                        backgroundColor: 'var(--primary)',
                                        transition: 'width 0.5s ease-out'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>장점</h3>
                        <p style={{ lineHeight: '1.6' }}>{review.pros}</p>
                    </div>
                    <div>
                        <h3 style={{ color: '#f87171', marginBottom: '1rem' }}>단점</h3>
                        <p style={{ lineHeight: '1.6' }}>{review.cons}</p>
                    </div>
                </div>

                {/* Detailed Stories */}
                {(review.implementationStory || review.automationStory) && (
                    <div style={{ marginBottom: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                        <h2 style={{ marginBottom: '2rem' }}>심층 경험 공유</h2>

                        {review.implementationStory && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    🛠️ 구축 경험
                                </h3>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', lineHeight: '1.7' }}>
                                    {review.implementationStory}
                                </div>
                            </div>
                        )}

                        {review.automationStory && (
                            <div>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    🤖 자동화/활용 사례
                                </h3>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', lineHeight: '1.7' }}>
                                    {review.automationStory}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <h3 style={{ marginBottom: '1rem' }}>상세 후기</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        {review.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
