import Image from "next/image";
import Link from "next/link";
import { getReviews } from "../lib/data";

// @ts-ignore // suppress any type warnings for MOCK_REVIEWS mapping

export default async function Home() {
  const reviews = await getReviews();
  const recentReviews = reviews.slice(0, 5);
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
            <Link href="/ko/reviews" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              문제 해결 경험 둘러보기
            </Link>
            <Link href="/ko/write" className="btn btn-ghost" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              나의 경험 공유하기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>깊이 있는 문제 정의</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                문제 정의가 명확할수록 해결책의 가치는 높아집니다.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem', animationDelay: '0.1s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛠️</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>검증된 해결책</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                실전 노하우와 자동화 사례를 공유합니다.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '1rem', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤝</div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>가치 있는 네트워킹</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                엔지니어와 연결하고 새로운 기회를 발견하세요.
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Mock Data Cards */}
            {recentReviews.map((review) => (
              <div key={review.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem' }}>{review.solution}</h3>
                  <span style={{
                    backgroundColor: 'var(--surface-hover)',
                    padding: '0.2rem 0.4rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>⭐️ {review.rating}</span>
                </div>
                <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {review.pros}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
