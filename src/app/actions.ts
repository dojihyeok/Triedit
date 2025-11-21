'use server';

import { revalidatePath } from 'next/cache';
import { addReview } from './lib/data';
import { redirect } from 'next/navigation';

export async function submitReview(formData: any) {
    // In a real app, validate formData here (e.g. using Zod)

    addReview(formData);

    // Revalidate pages to show new data
    revalidatePath('/');
    revalidatePath('/reviews');
    revalidatePath('/ko');
    revalidatePath('/ko/reviews');

    // Redirect is handled in the client component usually, or here
    // If we return, we can handle redirect in client
    return { success: true };
}
