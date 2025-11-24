import { getReviews } from '../lib/data';
import ReviewsList from '../components/ReviewsList';

export const dynamic = 'force-dynamic'; // Ensure it re-renders on request to show new data

export default async function ReviewsPage() {
    const reviews = await getReviews();
    // In a real app, we might filter in the DB query, but for now we fetch all and filter in client or here.
    // Since ReviewsList takes initialReviews, let's pass them all.
    // But wait, ReviewsList filters client-side.

    return (
        <ReviewsList initialReviews={reviews} />
    );
}
