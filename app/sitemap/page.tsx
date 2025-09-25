import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サイトマップ',
  description: 'ピークウェル公式サイトのサイトマップです。'
};

const siteLinks = [
  { label: 'トップ', href: '/' },
  { label: '事業内容', href: '/business' },
  { label: 'ソリューション', href: '/solutions' },
  { label: '導入事例', href: '/cases' },
  { label: 'テクノロジー', href: '/product' },
  { label: '品質・コンプライアンス', href: '/quality' },
  { label: 'サステナビリティ', href: '/sustainability' },
  { label: '料金・お取引条件', href: '/pricing' },
  { label: '会社情報', href: '/company' },
  { label: 'ニュース', href: '/news' },
  { label: '資料ダウンロード', href: '/resources' },
  { label: '採用情報', href: '/recruit' },
  { label: 'お問い合わせ', href: '/contact' },
  { label: 'よくある質問', href: '/faq' },
  { label: 'パートナー募集', href: '/partners' },
  { label: 'メディアキット', href: '/brand' },
  { label: '個人情報保護方針', href: '/privacy' },
  { label: '情報セキュリティ基本方針', href: '/security-policy' },
  { label: '利用規約', href: '/terms' },
  { label: 'クッキーポリシー', href: '/cookie-policy' },
  { label: '特定商取引法に基づく表記', href: '/legal-disclosure' }
];

export default function SitemapPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'サイトマップ', href: '/sitemap' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>サイトマップ</h1>
      <div className="card" style={{ padding: 32 }}>
        <ul style={{ display: 'grid', gap: 12 }}>
          {siteLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
