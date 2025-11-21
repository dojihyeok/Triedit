export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 0',
            marginTop: 'auto',
            backgroundColor: 'var(--surface)'
        }}>
            <div className="container" style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                <p>© {new Date().getFullYear()} 난 써봤어! (Nan Sseobwasseo). All rights reserved.</p>
            </div>
        </footer>
    );
}
