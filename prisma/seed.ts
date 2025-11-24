import { PrismaClient } from '@prisma/client';
import { MOCK_REVIEWS, MOCK_BLOG_POSTS, MOCK_REQUESTS } from '../src/app/data/mock';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    // Seed Reviews
    for (const review of MOCK_REVIEWS) {
        const { id, ...data } = review; // Exclude ID to let DB auto-increment or keep it if we want to preserve IDs
        // Let's preserve IDs for consistency with current URLs
        await prisma.review.upsert({
            where: { id: review.id },
            update: {},
            create: {
                id: review.id,
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
                date: review.date,
                contactLink: review.contactLink,
                coffeeChatAvailable: review.coffeeChatAvailable || false,
                implementationStory: review.implementationStory,
                automationStory: review.automationStory,
            },
        });
    }

    // Seed Blog Posts
    for (const post of MOCK_BLOG_POSTS) {
        await prisma.blogPost.upsert({
            where: { id: post.id },
            update: {},
            create: {
                id: post.id,
                title: post.title,
                summary: post.summary,
                content: post.content,
                type: post.type,
                author: post.author,
                date: post.date,
                likes: post.likes,
                thumbnail: post.thumbnail,
            },
        });
    }

    // Seed Requests
    for (const request of MOCK_REQUESTS) {
        await prisma.request.upsert({
            where: { id: request.id },
            update: {},
            create: {
                id: request.id,
                solutionName: request.solutionName,
                requestCount: request.requestCount,
                description: request.description,
                status: request.status,
                targetAuthor: request.targetAuthor,
            },
        });
    }

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
