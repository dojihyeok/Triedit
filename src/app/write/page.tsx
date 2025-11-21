'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, COMPANY_SIZES } from '../data/mock';

export default function WritePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        solutionName: '',
        company: '',
        companySize: 'startup',
        category: 'productivity',
        metrics: {
            usability: 3,
            efficiency: 3,
            costPerformance: 3,
            vendorStability: 3
        },
        technicalMetrics: {
            scalability: 3,
            integration: 3,
            documentation: 3,
            maintainability: 3
        },
        pros: '',
        cons: '',
        description: '',
        problemContext: '',
        implementationStory: '',
        automationStory: '',
        coffeeChatAvailable: false,
        contactLink: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = e.target.checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
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

    const handleTechnicalMetricChange = (metric: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            technicalMetrics: {
                // @ts-ignore
                ...prev.technicalMetrics,
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
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>문제 해결 경험 공유하기</h1>

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

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div>
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
                        <div>
                            <label htmlFor="companySize" className="label">기업 규모 *</label>
                            <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                className="input"
                                required
                            >
                                {COMPANY_SIZES.map(s => (
                                    <option key={s.id} value={s.id}>{s.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Problem Context (New) */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'rgba(239, 68, 68, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#f87171' }}>🚨 문제 정의 (Problem)</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="problemContext" className="label">어떤 문제를 해결하려고 했나요? *</label>
                        <textarea
                            id="problemContext"
                            name="problemContext"
                            value={formData.problemContext}
                            onChange={handleChange}
                            className="input"
                            rows={3}
                            placeholder="예: 트래픽 폭주로 인한 서버 다운, 수동 배포의 비효율성 등"
                            required
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                </div>

                {/* Technical Evaluation (New) */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#1e293b', borderRadius: 'var(--radius-md)', border: '1px solid #334155' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#a78bfa' }}>📊 기술 평가 (Technical Evaluation)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[
                            { id: 'scalability', label: '확장성 (Scalability)' },
                            { id: 'integration', label: '연동성 (Integration)' },
                            { id: 'documentation', label: '문서화 (Documentation)' },
                            { id: 'maintainability', label: '유지보수성 (Maintainability)' }
                        ].map((metric) => (
                            <div key={metric.id}>
                                <label className="label" style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                                    {metric.label}
                                    <span style={{ color: '#a78bfa', fontWeight: 'bold' }}>
                                        {/* @ts-ignore */}
                                        {formData.technicalMetrics?.[metric.id] || 3}점
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={
                                        // @ts-ignore
                                        formData.technicalMetrics?.[metric.id] || 3
                                    }
                                    onChange={(e) => handleTechnicalMetricChange(metric.id, e.target.value)}
                                    style={{ width: '100%', accentColor: '#a78bfa' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
                                    <span>나쁨</span>
                                    <span>좋음</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>비즈니스 평가 (Business Evaluation)</h3>
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
                        <label htmlFor="implementationStory" className="label">🛠️ 해결 과정 (Solution)</label>
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
                        <label htmlFor="automationStory" className="label">📈 결과 및 자동화 (Result)</label>
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

                {/* Networking (Coffee Chat) */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>☕️ 네트워킹</h3>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <input
                            type="checkbox"
                            id="coffeeChatAvailable"
                            name="coffeeChatAvailable"
                            checked={formData.coffeeChatAvailable}
                            onChange={handleChange}
                            style={{ width: '20px', height: '20px', marginRight: '0.5rem', accentColor: 'var(--primary)' }}
                        />
                        <label htmlFor="coffeeChatAvailable" style={{ fontSize: '1rem', fontWeight: '500' }}>
                            이 경험에 대해 커피챗 요청을 받으시겠습니까?
                        </label>
                    </div>

                    {formData.coffeeChatAvailable && (
                        <div className="animate-fade-in">
                            <label htmlFor="contactLink" className="label">연락처 링크 (오픈카톡, 이메일 등) *</label>
                            <input
                                type="text"
                                id="contactLink"
                                name="contactLink"
                                value={formData.contactLink}
                                onChange={handleChange}
                                className="input"
                                placeholder="예: https://open.kakao.com/..."
                                required={formData.coffeeChatAvailable}
                            />
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                                * 연락처는 로그인한 사용자에게만 공개됩니다. (현재 데모 버전에서는 모두에게 공개됨)
                            </p>
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    등록하기
                </button>
            </form>
        </div>
    );
}
