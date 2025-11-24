

import { Suspense } from 'react';
import RequestsClient from '../components/RequestsClient';
import { getRequests } from '../lib/data';

export const dynamic = 'force-dynamic';

export default async function RequestsPage() {
    const requests = await getRequests();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RequestsClient initialRequests={requests} />
        </Suspense>
    );
}
