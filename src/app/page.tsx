import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        padding: '6rem 0',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--surface), var(--background))'
      }}>
        <div className="container">
          <h1 style={{ marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            기업 솔루션, <br />
            <span style={{ color: 'var(--primary)' }}>직접 써본 사람들의 이야기</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            우리 회사에 딱 맞는 솔루션을 찾고 계신가요? <br />
            실제 사용자들이 남긴 솔직한 리뷰를 확인해보세요.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/write" className="btn btn-primary">
              경험 쓰기
            </Link>
            <Link href="/reviews" className="btn btn-secondary">
              솔루션 둘러보기
            </Link>
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
                  <span>2024.03.15</span>
                </div>
              </div>
            ))}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Jira</h3>
                <span style={{
                  backgroundColor: 'var(--surface-hover)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>⭐️ 3.8</span>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                "기능은 강력하지만 무겁고 복잡합니다. 처음 적응하는데 시간이 좀 걸려요."
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                <span>PM 이OO님</span>
                <span>2024.03.14</span>
              </div>
            </div>
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Notion</h3>
                <span style={{
                  backgroundColor: 'var(--surface-hover)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>⭐️ 4.8</span>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                "문서 관리와 협업을 한 곳에서 할 수 있어 너무 편리합니다. 올인원 워크스페이스!"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                <span>디자이너 박OO님</span>
                <span>2024.03.12</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
