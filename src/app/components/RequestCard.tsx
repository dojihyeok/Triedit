'use client';

import { useState } from 'react';

interface Request {
    id: number;
    solutionName: string;
    requestCount: number;
    description: string;
    status: string;
}

export default function RequestCard({ request, onVote }: { request: Request, onVote: (id: number) => void }) {
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!hasVoted) {
            onVote(request.id);
            setHasVoted(true);
        }
    };

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{request.solutionName}</h3>
                <span style={{
                    fontSize: '0.8rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '1rem',
                    backgroundColor: request.status === 'answered' ? 'var(--primary)' : 'var(--surface-hover)',
                    color: request.status === 'answered' ? 'white' : 'var(--text-secondary)'
                }}>
                    {request.status === 'answered' ? 'Answered' : 'Open'}
                </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {request.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <span style={{ fontWeight: '600', color: 'var(--primary)' }}>
                    {request.requestCount + (hasVoted ? 1 : 0)} Requests
                </span>
                <button
                    onClick={handleVote}
                    disabled={hasVoted || request.status === 'answered'}
                    className={`btn ${hasVoted ? 'btn-ghost' : 'btn-primary'}`}
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                    {hasVoted ? 'Voted' : 'I want this too!'}
                </button>
            </div>
        </div>
    );
}
