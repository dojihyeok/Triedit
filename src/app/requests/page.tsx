'use client';

import { Suspense } from 'react';
import RequestsClient from '../components/RequestsClient';
import { getRequests } from '../lib/data';

export const dynamic = 'force-dynamic';

export default function RequestsPage() {
    const initialRequests = getRequests();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RequestsClient initialRequests={initialRequests} />
        </Suspense>
    );
}
