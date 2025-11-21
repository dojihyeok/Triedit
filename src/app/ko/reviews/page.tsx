import { getReviews } from '../../lib/data';
import ReviewsList from '../../components/ReviewsList';

export const dynamic = 'force-dynamic'; // Ensure it re-renders on request

export default function ReviewsKo() {
    const reviews = getReviews();
    return <ReviewsList initialReviews={reviews} isKorean={true} />;
}
