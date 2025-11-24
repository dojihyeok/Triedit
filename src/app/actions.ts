'use server';

import { revalidatePath } from 'next/cache';
import { addReview, addBlogPost, addRequest, voteRequest } from './lib/data';
import { redirect } from 'next/navigation';

export async function submitReview(formData: any) {
    // In a real app, validate formData here (e.g. using Zod)

    await addReview(formData);

    // Revalidate pages to show new data
    revalidatePath('/');
    revalidatePath('/reviews');
    revalidatePath('/ko');
    revalidatePath('/ko/reviews');

    // Redirect is handled in the client component usually, or here
    // If we return, we can handle redirect in client
    return { success: true };
}

export async function submitBlogPost(formData: any) {
    await addBlogPost(formData);
    revalidatePath('/blog');
    return { success: true };
}

export async function submitRequest(formData: any) {
    await addRequest(formData);
    revalidatePath('/requests');
    return { success: true };
}

export async function voteForRequest(id: number) {
    await voteRequest(id);
    revalidatePath('/requests');
    return { success: true };
}
