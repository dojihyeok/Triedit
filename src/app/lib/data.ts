import { prisma } from './prisma';

// Review Functions
export async function getReviews() {
    return await prisma.review.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function getReview(id: number) {
    return await prisma.review.findUnique({
        where: { id },
    });
}

export async function addReview(review: any) {
    // Map the incoming review object to the Prisma schema
    // Note: In a real app, we should validate 'review' properly
    return await prisma.review.create({
        data: {
            solution: review.solution,
            category: review.category,
            company: review.company,
            companySize: review.companySize,
            rating: typeof review.rating === 'string' ? parseFloat(review.rating) : review.rating,
            pros: review.pros,
            cons: review.cons,
            description: review.description,
            problemContext: review.problemContext,
            technicalMetrics: review.technicalMetrics,
            businessMetrics: review.metrics, // Map 'metrics' to 'businessMetrics'
            author: review.author,
            date: new Date().toISOString().split('T')[0].replace(/-/g, '.'), // YYYY.MM.DD
            contactLink: review.contactLink,
            coffeeChatAvailable: review.coffeeChatAvailable || false,
        },
    });
}

// Blog Functions
export async function getBlogPosts() {
    return await prisma.blogPost.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function addBlogPost(post: any) {
    return await prisma.blogPost.create({
        data: {
            title: post.title,
            summary: post.summary,
            content: post.content,
            type: post.type,
            author: post.author,
            date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
            likes: 0,
            thumbnail: post.thumbnail || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
    });
}

// Request Functions
export async function getRequests() {
    return await prisma.request.findMany({
        orderBy: { requestCount: 'desc' },
    });
}

export async function addRequest(request: any) {
    return await prisma.request.create({
        data: {
            solutionName: request.solutionName,
            requestCount: 1,
            description: request.description,
            status: 'open',
            targetAuthor: request.targetAuthor || null,
        },
    });
}

export async function voteRequest(id: number) {
    return await prisma.request.update({
        where: { id },
        data: {
            requestCount: {
                increment: 1,
            },
        },
    });
}
