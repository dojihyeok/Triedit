'use client';

import { useState } from 'react';
import RequestCard from './RequestCard';
import { submitRequest, voteForRequest } from '../actions';

export default function RequestsClient({ initialRequests }: { initialRequests: any[] }) {
    const [requests, setRequests] = useState(initialRequests);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newRequest, setNewRequest] = useState({ solutionName: '', description: '' });

    const handleVote = async (id: number) => {
        // Optimistic update
        setRequests(prev => prev.map(r =>
            r.id === id ? { ...r, requestCount: r.requestCount + 1 } : r
        ).sort((a, b) => b.requestCount - a.requestCount));

        await voteForRequest(id);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitRequest(newRequest);
        alert('Request submitted!');
        setIsFormOpen(false);
        setNewRequest({ solutionName: '', description: '' });
        // In a real app, we'd re-fetch or receive the new item. 
        // For demo, we'll just reload or wait for revalidation (which might need a router.refresh())
        window.location.reload();
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Solution Requests</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Vote for solutions you want to hear about.
                </p>
                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="btn btn-primary"
                    style={{ marginTop: '1.5rem' }}
                >
                    {isFormOpen ? 'Close Form' : 'Request New Solution'}
                </button>
            </div>

            {isFormOpen && (
                <div className="card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label className="label">Solution Name</label>
                            <input
                                type="text"
                                className="input"
                                value={newRequest.solutionName}
                                onChange={e => setNewRequest({ ...newRequest, solutionName: e.target.value })}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label className="label">What are you curious about?</label>
                            <textarea
                                className="input"
                                rows={3}
                                value={newRequest.description}
                                onChange={e => setNewRequest({ ...newRequest, description: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
                    </form>
                </div>
            )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {requests.map((request) => (
                    <RequestCard key={request.id} request={request} onVote={handleVote} />
                ))}
            </div>
        </div>
    );
}
