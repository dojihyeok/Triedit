'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isKorean = pathname?.startsWith('/ko');

  const toggleLanguage = (lang: 'en' | 'ko') => {
    setIsLangOpen(false);
    if (lang === 'en') {
      if (pathname?.startsWith('/ko')) {
        const newPath = pathname.replace('/ko', '') || '/';
        router.push(newPath);
      }
    } else {
      if (!pathname?.startsWith('/ko')) {
        const newPath = `/ko${pathname === '/' ? '' : pathname}`;
        router.push(newPath);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
        <Link href={isKorean ? "/ko" : "/"} style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          color: 'var(--primary)',
          letterSpacing: '-0.03em',
          fontFamily: 'var(--font-geist-sans)'
        }}>
          Triedit!
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href={isKorean ? "/ko/reviews" : "/reviews"} style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>
            {isKorean ? '문제 해결 경험' : 'Experiences'}
          </Link>
          <Link href="/blog" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>
            {isKorean ? '기술 블로그' : 'Tech Blog'}
          </Link>
          <Link href={isKorean ? "/ko/write" : "/write"} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            {isKorean ? '경험 쓰기' : 'Share Experience'}
          </Link>

          {/* Language Toggle */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-secondary)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>

            {isLangOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.5rem',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                minWidth: '120px',
                overflow: 'hidden',
                zIndex: 101
              }}>
                <button
                  onClick={() => toggleLanguage('ko')}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    background: isKorean ? 'var(--surface-hover)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isKorean ? 'var(--primary)' : 'var(--text-primary)',
                    fontWeight: isKorean ? '600' : '400'
                  }}
                >
                  Korean
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    background: !isKorean ? 'var(--surface-hover)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: !isKorean ? 'var(--primary)' : 'var(--text-primary)',
                    fontWeight: !isKorean ? '600' : '400'
                  }}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none', // Hidden by default, shown via CSS media query
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-primary)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            style={{
              position: 'absolute',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              backgroundColor: 'var(--background)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              zIndex: 99
            }}
          >
            <Link href={isKorean ? "/ko/reviews" : "/reviews"} style={{ padding: '0.5rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
              {isKorean ? '문제 해결 경험' : 'Experiences'}
            </Link>
            <Link href="/blog" style={{ padding: '0.5rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
              {isKorean ? '기술 블로그' : 'Tech Blog'}
            </Link>
            <Link href={isKorean ? "/ko/write" : "/write"} className="btn btn-primary" style={{ padding: '0.75rem', textAlign: 'center' }}>
              {isKorean ? '경험 쓰기' : 'Share Experience'}
            </Link>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Language</span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => toggleLanguage('ko')} style={{ fontWeight: isKorean ? 'bold' : 'normal', color: isKorean ? 'var(--primary)' : 'inherit', background: 'none', border: 'none' }}>KR</button>
                <button onClick={() => toggleLanguage('en')} style={{ fontWeight: !isKorean ? 'bold' : 'normal', color: !isKorean ? 'var(--primary)' : 'inherit', background: 'none', border: 'none' }}>EN</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
