import { getReviews } from '../../lib/data';
import ReviewsList from '../../components/ReviewsList';

export const dynamic = 'force-dynamic'; // Ensure it re-renders on request

export default async function ReviewsKo() {
    const reviews = await getReviews();
    return <ReviewsList initialReviews={reviews} />;
}
