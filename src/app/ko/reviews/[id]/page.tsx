import Link from 'next/link';
import { MOCK_REVIEWS, CATEGORIES, COMPANY_SIZES } from '../../../data/mock';

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
                <Link href="/ko/reviews" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    목록으로 돌아가기
                </Link>
            </div>
        );
    }

    const categoryLabel = CATEGORIES.find(c => c.id === review.category)?.label;
    // @ts-ignore
    const companySizeLabel = COMPANY_SIZES.find(s => s.id === review.companySize)?.label;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link href="/ko/reviews" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                ← 목록으로 돌아가기
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
                                }}>
                                    {categoryLabel}
                                </span>
                                {companySizeLabel && (
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: '600',
                                        backgroundColor: 'var(--surface-hover)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>
                                        {companySizeLabel}
                                    </span>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span>작성자: {review.author}</span>
                            <span>작성일: {review.date}</span>
                        </div>
                        {/* @ts-ignore */}
                        {review.coffeeChatAvailable && (
                            <a
                                // @ts-ignore
                                href={review.contactLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                ☕️ 커피챗 요청하기
                            </a>
                        )}
                    </div>
                </div>

                {/* Problem Context (New) */}
                {/* @ts-ignore */}
                {review.problemContext && (
                    <div style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            🚨 직면했던 문제 (Problem)
                        </h3>
                        <p style={{ lineHeight: '1.7' }}>
                            {/* @ts-ignore */}
                            {review.problemContext}
                        </p>
                    </div>
                )}

                {/* Technical Evaluation Report (New) */}
                <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#1e293b', borderRadius: 'var(--radius-md)', border: '1px solid #334155' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a78bfa' }}>
                        📊 기술 평가 리포트 (Technical Report)
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {[
                            { id: 'scalability', label: '확장성 (Scalability)' },
                            { id: 'integration', label: '연동성 (Integration)' },
                            { id: 'documentation', label: '문서화 (Documentation)' },
                            { id: 'maintainability', label: '유지보수성 (Maintainability)' }
                        ].map((metric) => (
                            <div key={metric.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: '500', color: '#e2e8f0' }}>{metric.label}</span>
                                    <span style={{ color: '#a78bfa', fontWeight: 'bold' }}>
                                        {/* @ts-ignore */}
                                        {review.technicalMetrics?.[metric.id] || '-'}점
                                    </span>
                                </div>
                                <div style={{ width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '100%',
                                        // @ts-ignore
                                        width: `${(review.technicalMetrics?.[metric.id] || 0) * 20}%`,
                                        backgroundColor: '#a78bfa',
                                        transition: 'width 0.5s ease-out'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Basic Metrics */}
                <div style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>비즈니스 평가</h3>
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

                {/* Detailed Stories */}
                {(review.implementationStory || review.automationStory) && (
                    <div style={{ marginBottom: '3rem' }}>

                        {review.implementationStory && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa' }}>
                                    🛠️ 해결 과정 (Solution)
                                </h3>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', lineHeight: '1.7' }}>
                                    {review.implementationStory}
                                </div>
                            </div>
                        )}

                        {review.automationStory && (
                            <div>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80' }}>
                                    📈 결과 및 자동화 (Result)
                                </h3>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', lineHeight: '1.7' }}>
                                    {review.automationStory}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <div>
                        <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>장점</h3>
                        <p style={{ lineHeight: '1.6' }}>{review.pros}</p>
                    </div>
                    <div>
                        <h3 style={{ color: '#f87171', marginBottom: '1rem' }}>단점</h3>
                        <p style={{ lineHeight: '1.6' }}>{review.cons}</p>
                    </div>
                </div>

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
