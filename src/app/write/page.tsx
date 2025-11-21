'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '../data/mock';

export default function WritePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        solutionName: '',
        company: '',
        category: 'productivity',
        metrics: {
            usability: 3,
            efficiency: 3,
            costPerformance: 3,
            vendorStability: 3
        },
        pros: '',
        cons: '',
        description: '',
        implementationStory: '',
        automationStory: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleMetricChange = (metric: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            metrics: {
                ...prev.metrics,
                [metric]: parseInt(value)
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('경험이 등록되었습니다! (데모)');
        router.push('/reviews');
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>솔루션 경험 공유하기</h1>

            <form onSubmit={handleSubmit} className="card">
                {/* Basic Info */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>기본 정보</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="category" className="label">카테고리 *</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="input"
                            required
                        >
                            {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                                <option key={c.id} value={c.id}>{c.label}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="solutionName" className="label">솔루션 이름 *</label>
                        <input
                            type="text"
                            id="solutionName"
                            name="solutionName"
                            value={formData.solutionName}
                            onChange={handleChange}
                            className="input"
                            placeholder="예: Slack, Notion"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="company" className="label">사용 회사 (선택)</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="input"
                            placeholder="예: 삼성전자, 스타트업"
                        />
                    </div>
                </div>

                {/* Detailed Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>상세 평가 (1-5점)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[
                            { id: 'usability', label: '사용자 편의성' },
                            { id: 'efficiency', label: '업무 개선률' },
                            { id: 'costPerformance', label: '가성비' },
                            { id: 'vendorStability', label: '기업 평판/연속성' }
                        ].map((metric) => (
                            <div key={metric.id}>
                                <label className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {metric.label}
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                                        {/* @ts-ignore */}
                                        {formData.metrics[metric.id]}점
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={
                                        // @ts-ignore
                                        formData.metrics[metric.id]
                                    }
                                    onChange={(e) => handleMetricChange(metric.id, e.target.value)}
                                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                                    <span>나쁨</span>
                                    <span>좋음</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pros & Cons */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>장단점</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="pros" className="label">장점 *</label>
                        <textarea
                            id="pros"
                            name="pros"
                            value={formData.pros}
                            onChange={handleChange}
                            className="input"
                            rows={3}
                            placeholder="어떤 점이 좋았나요?"
                            required
                            style={{ resize: 'vertical' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="cons" className="label">단점 *</label>
                        <textarea
                            id="cons"
                            name="cons"
                            value={formData.cons}
                            onChange={handleChange}
                            className="input"
                            rows={3}
                            placeholder="어떤 점이 아쉬웠나요?"
                            required
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                </div>

                {/* Detailed Stories */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>심층 경험 공유</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="implementationStory" className="label">구축 경험 (선택)</label>
                        <textarea
                            id="implementationStory"
                            name="implementationStory"
                            value={formData.implementationStory}
                            onChange={handleChange}
                            className="input"
                            rows={4}
                            placeholder="도입 과정, 마이그레이션, 초기 설정 등의 경험을 공유해주세요."
                            style={{ resize: 'vertical' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="automationStory" className="label">자동화/활용 사례 (선택)</label>
                        <textarea
                            id="automationStory"
                            name="automationStory"
                            value={formData.automationStory}
                            onChange={handleChange}
                            className="input"
                            rows={4}
                            placeholder="API 연동, 워크플로우 자동화 등 구체적인 활용 사례를 공유해주세요."
                            style={{ resize: 'vertical' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="description" className="label">기타 상세 후기</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="input"
                            rows={4}
                            placeholder="자유롭게 경험을 작성해주세요."
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    등록하기
                </button>
            </form>
        </div>
    );
}
