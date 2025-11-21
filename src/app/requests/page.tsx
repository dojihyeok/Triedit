'use client';

import { useState, useEffect } from 'react';
import RequestCard from '../components/RequestCard';
import { submitRequest, voteForRequest } from '../actions';

// Since we need client-side interactivity for voting and real-time updates (simulated),
// we'll make this a client component that fetches initial data or uses server actions.
// For simplicity and to match the pattern, let's fetch data via a Server Action or pass it as props.
// But wait, we can use a Server Component for the initial render and Client Components for interactivity.
// However, for the "Vote" to update the list immediately without full reload, client-side state is easier.
// Let's make the whole page a Client Component for this demo to handle the "optimistic" UI updates easily.
// Actually, let's stick to the pattern: Server Component fetches data, Client Component displays it.
// But for "Requests", the list order might change on vote.
// Let's try a hybrid approach: Server Component fetches initial data, Client Component takes it as prop.

// Re-thinking: To keep it simple and consistent with Reviews, let's make it a Server Component that renders a Client List.
// But I'll just make the whole page client-side for the "Request New Solution" form convenience in this demo.
// Wait, I can't export 'dynamic' from a client component.
// So I'll make a separate Client Component for the content.

import RequestsClient from '../components/RequestsClient';
import { getRequests } from '../lib/data';

export const dynamic = 'force-dynamic';

export default function RequestsPage() {
    const initialRequests = getRequests();
    return <RequestsClient initialRequests={initialRequests} />;
}
