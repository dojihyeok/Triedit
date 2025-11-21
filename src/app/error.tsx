'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Something went wrong!</h2>
            <p style={{ color: 'red', marginBottom: '1rem' }}>{error.message}</p>
            <button
                onClick={() => reset()}
                className="btn btn-primary"
            >
                Try again
            </button>
        </div>
    );
}
