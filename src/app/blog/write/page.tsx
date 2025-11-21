'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addBlogPost } from '../../lib/data';

export default function BlogWritePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        type: 'internal', // internal, external, youtube
        author: '',
        thumbnail: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would call a Server Action here
        // For demo, we'll simulate it client-side or use a simple wrapper if needed
        // But since addBlogPost is in lib/data which is server-side mostly, we should ideally use a server action.
        // However, for simplicity in this step, we'll assume we can't import server functions directly in client components without 'use server'.
        // Let's create a server action for this in the next step or use a workaround.
        // Actually, let's just use the existing pattern: create a server action wrapper.

        // For now, to keep it simple and working with the current setup, we will use a Server Action.
        // We need to update actions.ts to include submitBlogPost.

        // Let's assume submitBlogPost exists in actions.ts (we will add it next).
        const { submitBlogPost } = await import('../../actions');
        await submitBlogPost(formData);

        alert('Post submitted!');
        router.push('/blog');
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Share Your Insight</h1>

            <form onSubmit={handleSubmit} className="card">
                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Post Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="input">
                        <option value="internal">Internal Article</option>
                        <option value="external">External Link (Notion, Tistory, etc.)</option>
                        <option value="youtube">YouTube Video</option>
                    </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="input" required />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Summary</label>
                    <textarea name="summary" value={formData.summary} onChange={handleChange} className="input" rows={3} required />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">
                        {formData.type === 'internal' ? 'Content' : 'URL'}
                    </label>
                    {formData.type === 'internal' ? (
                        <textarea name="content" value={formData.content} onChange={handleChange} className="input" rows={10} placeholder="Write your article here..." required />
                    ) : (
                        <input type="url" name="content" value={formData.content} onChange={handleChange} className="input" placeholder={formData.type === 'youtube' ? "https://youtube.com/watch?v=..." : "https://notion.so/..."} required />
                    )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Thumbnail URL (Optional)</label>
                    <input type="url" name="thumbnail" value={formData.thumbnail} onChange={handleChange} className="input" placeholder="https://..." />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label className="label">Author Name</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} className="input" required />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
        </div>
    );
}
