import { MOCK_REVIEWS } from '../data/mock';

// In-memory store for reviews (initialized with mock data)
// Note: This will reset when the server restarts (e.g., on deployment or dev server restart)
let reviews = [...MOCK_REVIEWS];

export function getReviews() {
    return reviews;
}

export function getReview(id: number) {
    return reviews.find((r) => r.id === id);
}

export function addReview(review: any) {
    const newReview = {
        ...review,
        id: reviews.length + 1,
        date: new Date().toISOString().split('T')[0].replace(/-/g, '.'), // YYYY.MM.DD
        rating: (Math.random() * (5.0 - 3.0) + 3.0).toFixed(1), // Random rating for demo
    };
    reviews.unshift(newReview); // Add to beginning
    return newReview;
}
