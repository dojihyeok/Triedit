'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, COMPANY_SIZES } from '../../data/mock';

export default function WritePageEn() {
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
        const checked = (e.target as HTMLInputElement).checked;
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
                ...prev.technicalMetrics,
                [metric]: parseInt(value)
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Experience submitted! (demo)');
        router.push('/en/reviews');
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Share Your Problem‑Solving Experience</h1>
            <form onSubmit={handleSubmit} className="card">
                {/* Basic Info */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Basic Info</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="category" className="label">Category *</label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange} className="input" required>
                            {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                                <option key={c.id} value={c.id}>{c.label}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="solutionName" className="label">Solution Name *</label>
                        <input type="text" id="solutionName" name="solutionName" value={formData.solutionName} onChange={handleChange} className="input" placeholder="e.g., Slack, Notion" required />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label htmlFor="company" className="label">Company (optional)</label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="input" placeholder="e.g., Samsung, Startup" />
                        </div>
                        <div>
                            <label htmlFor="companySize" className="label">Company Size *</label>
                            <select id="companySize" name="companySize" value={formData.companySize} onChange={handleChange} className="input" required>
                                {COMPANY_SIZES.map(s => (
                                    <option key={s.id} value={s.id}>{s.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Problem Context */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'rgba(239, 68, 68, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#f87171' }}>🚨 Problem Definition (Problem)</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="problemContext" className="label">What problem are you solving? *</label>
                        <textarea id="problemContext" name="problemContext" value={formData.problemContext} onChange={handleChange} className="input" rows={3} placeholder="e.g., server downtime due to traffic spikes, manual deployment inefficiency" required style={{ resize: 'vertical' }} />
                    </div>
                </div>

                {/* Technical Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#1e293b', borderRadius: 'var(--radius-md)', border: '1px solid #334155' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#a78bfa' }}>📊 Technical Evaluation</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[{ id: 'scalability', label: 'Scalability' }, { id: 'integration', label: 'Integration' }, { id: 'documentation', label: 'Documentation' }, { id: 'maintainability', label: 'Maintainability' }].map(metric => (
                            <div key={metric.id}>
                                {/* @ts-ignore */}
                                <label className="label" style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>{metric.label}<span style={{ color: '#a78bfa', fontWeight: 'bold' }}>{formData.technicalMetrics?.[metric.id] || 3} pts</span></label>
                                {/* @ts-ignore */}
                                <input type="range" min="1" max="5" value={formData.technicalMetrics?.[metric.id] || 3} onChange={e => handleTechnicalMetricChange(metric.id, e.target.value)} style={{ width: '100%', accentColor: '#a78bfa' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}><span>Bad</span><span>Good</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Business Evaluation */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Business Evaluation</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[{ id: 'usability', label: 'Usability' }, { id: 'efficiency', label: 'Efficiency' }, { id: 'costPerformance', label: 'Cost Performance' }, { id: 'vendorStability', label: 'Vendor Stability' }].map(metric => (
                            <div key={metric.id}>
                                {/* @ts-ignore */}
                                <label className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>{metric.label}<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{formData.metrics[metric.id]} pts</span></label>
                                {/* @ts-ignore */}
                                <input type="range" min="1" max="5" value={formData.metrics[metric.id]} onChange={e => handleMetricChange(metric.id, e.target.value)} style={{ width: '100%', accentColor: 'var(--primary)' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}><span>Bad</span><span>Good</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pros & Cons */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Pros & Cons</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="pros" className="label">Pros *</label>
                        <textarea id="pros" name="pros" value={formData.pros} onChange={handleChange} className="input" rows={3} placeholder="What did you like?" required style={{ resize: 'vertical' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="cons" className="label">Cons *</label>
                        <textarea id="cons" name="cons" value={formData.cons} onChange={handleChange} className="input" rows={3} placeholder="What could be improved?" required style={{ resize: 'vertical' }} />
                    </div>
                </div>

                {/* Deep Experience Sharing */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Deep Experience Sharing</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="implementationStory" className="label">🛠️ Solution Process</label>
                        <textarea id="implementationStory" name="implementationStory" value={formData.implementationStory} onChange={handleChange} className="input" rows={4} placeholder="Share implementation, migration, setup experiences..." style={{ resize: 'vertical' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="automationStory" className="label">📈 Result & Automation</label>
                        <textarea id="automationStory" name="automationStory" value={formData.automationStory} onChange={handleChange} className="input" rows={4} placeholder="Share API integration, workflow automation, concrete use cases..." style={{ resize: 'vertical' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="description" className="label">Other Detailed Review</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="input" rows={4} placeholder="Write freely about your experience." style={{ resize: 'vertical' }} />
                    </div>
                </div>

                {/* Networking (Coffee Chat) */}
                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>☕️ Networking</h3>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <input type="checkbox" id="coffeeChatAvailable" name="coffeeChatAvailable" checked={formData.coffeeChatAvailable} onChange={handleChange} style={{ width: '20px', height: '20px', marginRight: '0.5rem', accentColor: 'var(--primary)' }} />
                        <label htmlFor="coffeeChatAvailable" style={{ fontSize: '1rem', fontWeight: '500' }}>Would you like to receive coffee‑chat requests for this experience?</label>
                    </div>
                    {formData.coffeeChatAvailable && (
                        <div className="animate-fade-in">
                            <label htmlFor="contactLink" className="label">Contact Link (OpenKakao, Email, etc.) *</label>
                            <input type="text" id="contactLink" name="contactLink" value={formData.contactLink} onChange={handleChange} className="input" placeholder="e.g., https://open.kakao.com/..." required={formData.coffeeChatAvailable} />
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>* Contact info is only visible to logged‑in users. (Demo version shows to everyone)</p>
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
        </div>
    );
}
