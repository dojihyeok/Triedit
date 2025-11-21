import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      borderBottom: '1px solid var(--border)', 
      backgroundColor: 'var(--background)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        height: 'var(--header-height)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <Link href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: '800', 
          color: 'var(--primary)',
          letterSpacing: '-0.03em'
        }}>
          난 써봤어!
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/reviews" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>
            둘러보기
          </Link>
          <Link href="/write" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            경험 쓰기
          </Link>
        </div>
      </div>
    </nav>
  );
}
