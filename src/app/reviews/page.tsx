'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MOCK_REVIEWS } from '../data/mock';

export default function ReviewsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReviews = MOCK_REVIEWS.filter(review =>
        review.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.pros.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>솔루션 경험 둘러보기</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    다른 기업들은 어떤 솔루션을 어떻게 쓰고 있을까요?
                </p>

                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <input
                        type="text"
                        placeholder="솔루션 이름이나 내용으로 검색해보세요"
                        className="input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '1rem', fontSize: '1.1rem' }}
                    />
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {filteredReviews.map((review) => (
                    <Link href={`/reviews/${review.id}`} key={review.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem' }}>{review.solution}</h3>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>{review.company}</span>
                            </div>
                            <span style={{
                                backgroundColor: 'var(--surface-hover)',
                                padding: '0.25rem 0.5rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}>⭐️ {review.rating}</span>
                        </div>
                        <p style={{
                            marginBottom: '1.5rem',
                            color: 'var(--text-secondary)',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            "{review.pros}"
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                            <span>{review.author}</span>
                            <span>{review.date}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredReviews.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                    <p>검색 결과가 없습니다.</p>
                </div>
            )}
        </div>
    );
}
