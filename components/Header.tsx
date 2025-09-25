'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import classNames from 'classnames';

const navItems = [
  { href: '/business', label: '事業内容' },
  { href: '/solutions', label: 'ソリューション' },
  { href: '/cases', label: '導入事例' },
  { href: '/product', label: 'テクノロジー' },
  { href: '/pricing', label: '料金' },
  { href: '/company', label: '会社情報' },
  { href: '/news', label: 'ニュース' },
  { href: '/resources', label: '資料ダウンロード' }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(82, 96, 109, 0.12)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              display: 'inline-flex',
              width: 40,
              height: 40,
              borderRadius: '12px',
              background: 'var(--peakwell-blue)',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700
            }}
            aria-label="Peakwell"
          >
            P
          </span>
          <div>
            <span style={{ fontWeight: 700, fontSize: 18 }}>PEAKWELL</span>
            <div style={{ fontSize: 12, color: 'var(--peakwell-gray-600)' }}>医薬品流通を次のステージへ</div>
          </div>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={classNames({
                active: pathname === item.href
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link href="/contact" className="button-primary" style={{ padding: '10px 20px', fontSize: 15 }}>
            お問い合わせ
          </Link>
          <button
            type="button"
            aria-label="メニューを開閉"
            onClick={() => setOpen((prev) => !prev)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(82, 96, 109, 0.2)',
              borderRadius: 12,
              padding: 10
            }}
          >
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--peakwell-gray-900)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: -6, width: 24, height: 2, background: 'var(--peakwell-gray-900)' }} />
              <span style={{ position: 'absolute', top: 6, width: 24, height: 2, background: 'var(--peakwell-gray-900)' }} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="container" style={{ padding: '0 24px 24px' }}>
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'grid', gap: 16 }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ fontWeight: 600, color: pathname === item.href ? 'var(--peakwell-blue)' : 'var(--peakwell-gray-600)' }}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="button-primary" style={{ justifyContent: 'center' }}>
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          header button[aria-label='メニューを開閉'] {
            display: inline-flex !important;
          }
          header .button-primary {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
