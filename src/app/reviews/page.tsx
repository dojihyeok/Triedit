import { getReviews } from '../lib/data';
import ReviewsList from '../components/ReviewsList';

export const dynamic = 'force-dynamic'; // Ensure it re-renders on request to show new data

export default function ReviewsEn() {
    const reviews = getReviews();
    return <ReviewsList initialReviews={reviews} />;
}
