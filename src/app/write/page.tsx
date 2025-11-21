'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WritePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        solutionName: '',
        company: '',
        rating: '5',
        pros: '',
        cons: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

                <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="rating" className="label">평점 *</label>
                    <select
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className="input"
                        required
                    >
                        <option value="5">⭐️⭐️⭐️⭐️⭐️ (5점 - 최고예요)</option>
                        <option value="4">⭐️⭐️⭐️⭐️ (4점 - 좋아요)</option>
                        <option value="3">⭐️⭐️⭐️ (3점 - 보통이에요)</option>
                        <option value="2">⭐️⭐️ (2점 - 별로예요)</option>
                        <option value="1">⭐️ (1점 - 최악이에요)</option>
                    </select>
                </div>

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

                <div style={{ marginBottom: '2rem' }}>
                    <label htmlFor="description" className="label">상세 후기</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input"
                        rows={5}
                        placeholder="자유롭게 경험을 작성해주세요."
                        style={{ resize: 'vertical' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    등록하기
                </button>
            </form>
        </div>
    );
}
