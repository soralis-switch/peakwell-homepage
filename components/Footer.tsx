import Link from 'next/link';

const footerNav = [
  {
    title: 'コアページ',
    links: [
      { label: 'トップ', href: '/' },
      { label: '事業内容', href: '/business' },
      { label: 'ソリューション', href: '/solutions' },
      { label: '導入事例', href: '/cases' },
      { label: 'テクノロジー', href: '/product' }
    ]
  },
  {
    title: 'リソース',
    links: [
      { label: '資料ダウンロード', href: '/resources' },
      { label: '料金・お取引条件', href: '/pricing' },
      { label: '採用情報', href: '/recruit' },
      { label: 'パートナー募集', href: '/partners' },
      { label: 'メディアキット', href: '/brand' }
    ]
  },
  {
    title: 'ポリシー',
    links: [
      { label: '個人情報保護方針', href: '/privacy' },
      { label: '情報セキュリティ基本方針', href: '/security-policy' },
      { label: '利用規約', href: '/terms' },
      { label: 'クッキーポリシー', href: '/cookie-policy' },
      { label: '特定商取引法に基づく表記', href: '/legal-disclosure' }
    ]
  }
];

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
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
                <div style={{ fontWeight: 700, fontSize: 18 }}>PEAKWELL</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>ヘルスケア物流の共創パートナー</div>
              </div>
            </div>
            <p style={{ color: 'rgba(216, 225, 235, 0.8)' }}>
              ピークウェルは、医薬品の買取・共同配送・在宅配達を統合したプラットフォームで、医療機関と患者さまに安全で持続可能な物流を提供します。
            </p>
          </div>
          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 style={{ marginBottom: 16 }}>{group.title}</h4>
              <ul style={{ display: 'grid', gap: 12 }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 style={{ marginBottom: 16 }}>お問い合わせ</h4>
            <p style={{ color: 'rgba(216, 225, 235, 0.8)', marginBottom: 12 }}>
              平日 9:00〜18:00（祝日除く）
            </p>
            <p style={{ fontSize: 20, fontWeight: 700 }}>03-1234-5678</p>
            <p style={{ color: 'rgba(216, 225, 235, 0.8)', marginTop: 8 }}>contact@peakwell.jp</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' }}>
            <span>© {new Date().getFullYear()} Peakwell Inc.</span>
            <Link href="/sitemap">サイトマップ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
