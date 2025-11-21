import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '6rem 0',
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
      }}>
        <div className="container">
          <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            당신의 <span className="text-gradient">문제 해결 경험</span>이<br />
            누군가의 이정표가 됩니다.
          </h1>
          <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
            단순한 도구 리뷰가 아닙니다.<br />
            문제를 정의하고 기술로 해결한 과정을 공유하여<br />
            당신의 엔지니어링 가치를 증명하세요.
          </p>
          <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/reviews" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              문제 해결 경험 둘러보기
            </Link>
            <Link href="/write" className="btn btn-ghost" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              나의 경험 공유하기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid" style={{ gap: '2rem' }}>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ marginBottom: '1rem' }}>깊이 있는 문제 정의</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                어떤 상황에서 어떤 문제가 발생했나요?<br />
                명확한 문제 정의는 해결책의 가치를 높여줍니다.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '2rem', animationDelay: '0.1s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
              <h3 style={{ marginBottom: '1rem' }}>검증된 해결책</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                직접 구축하고 운영하며 얻은<br />
                실전 노하우와 자동화 사례를 공유합니다.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '2rem', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ marginBottom: '1rem' }}>가치 있는 네트워킹</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                비슷한 고민을 하는 엔지니어들과 연결되고<br />
                새로운 기회를 발견하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>최근 올라온 경험</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Mock Data Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>Slack</h3>
                  <span style={{
                    backgroundColor: 'var(--surface-hover)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>⭐️ 4.5</span>
                </div>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  "팀 커뮤니케이션의 표준. 연동성이 정말 좋아서 개발팀에게 필수적입니다."
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                  <span>개발팀 김OO님</span>
                  <span>2025.03.15</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
