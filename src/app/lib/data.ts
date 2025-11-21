import { MOCK_REVIEWS, MOCK_BLOG_POSTS, MOCK_REQUESTS } from '../data/mock';

// In-memory store for reviews (initialized with mock data)
let reviews = [...MOCK_REVIEWS];
let blogPosts = [...MOCK_BLOG_POSTS];
let requests = [...MOCK_REQUESTS];

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

// Blog Functions
export function getBlogPosts() {
    return blogPosts;
}

export function addBlogPost(post: any) {
    const newPost = {
        ...post,
        id: blogPosts.length + 1,
        date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
        likes: 0,
        thumbnail: post.thumbnail || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' // Default thumbnail
    };
    blogPosts.unshift(newPost);
    return newPost;
}

// Request Functions
export function getRequests() {
    return requests.sort((a, b) => b.requestCount - a.requestCount);
}

export function addRequest(request: any) {
    const newRequest = {
        ...request,
        id: requests.length + 1,
        requestCount: 1,
        status: 'open'
    };
    requests.push(newRequest);
    return newRequest;
}

export function voteRequest(id: number) {
    const request = requests.find(r => r.id === id);
    if (request) {
        request.requestCount += 1;
    }
    return request;
}
