'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '../data/mock';

interface Review {
    id: number;
    solution: string;
    category: string;
    company: string;
    companySize: string;
    rating: number | string;
    pros: string;
    author: string;
    date: string;
    [key: string]: any;
}

interface ReviewsListProps {
    initialReviews: Review[];
    isKorean?: boolean;
}

export default function ReviewsList({ initialReviews, isKorean = false }: ReviewsListProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredReviews = initialReviews.filter(review => {
        const matchesSearch = review.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.pros.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const basePath = isKorean ? '/ko/reviews' : '/reviews';

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {isKorean ? '문제 해결 경험 둘러보기' : 'Explore Problem‑Solving Experiences'}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {isKorean ? '다른 엔지니어들은 어떻게 문제를 해결했는지 확인해보세요.' : 'See how other engineers solved their problems.'}
                </p>

                <div style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                    <input
                        type="text"
                        placeholder={isKorean ? "솔루션 이름이나 내용으로 검색해보세요" : "Search by solution name or content"}
                        className="input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '1rem', fontSize: '1.1rem' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                {/* Category Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--border)'
                }}>
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-ghost'}`}
                            style={{
                                borderRadius: '2rem',
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.9rem',
                                backgroundColor: selectedCategory === category.id ? 'var(--primary)' : 'var(--surface)'
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Reviews Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredReviews.map((review) => (
                        <Link href={`${basePath}/${review.id}`} key={review.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--primary)',
                                        fontWeight: '600',
                                        marginBottom: '0.25rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {CATEGORIES.find(c => c.id === review.category)?.label}
                                    </div>
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
            </div>

            {filteredReviews.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                    <p>{isKorean ? '검색 결과가 없습니다.' : 'No results found.'}</p>
                </div>
            )}
        </div>
    );
}
