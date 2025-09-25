import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メディアキット',
  description: 'ロゴ、カラー、タイポグラフィ、使用ガイドラインを掲載したメディアキットです。'
};

export default function BrandPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'メディアキット', href: '/brand' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>メディアキット</h1>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>ロゴ</h2>
        <div className="card" style={{ padding: 32, display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: '#00BFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 36,
              fontWeight: 700
            }}
          >
            P
          </div>
          <div>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>ロゴデータはSVG/PNGでご提供します。余白はロゴの1/2以上を確保してください。</p>
            <a href="#" className="button-primary" style={{ marginTop: 16, display: 'inline-flex' }}>
              ロゴをダウンロード
            </a>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>カラー</h2>
        <div className="card-grid">
          <div className="card" style={{ alignItems: 'flex-start' }}>
            <div style={{ width: '100%', height: 80, borderRadius: 'var(--radius-md)', background: '#00BFFF', marginBottom: 16 }} />
            <p style={{ fontWeight: 600 }}>Peakwell Blue</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>#00BFFF</p>
          </div>
          <div className="card">
            <div style={{ width: '100%', height: 80, borderRadius: 'var(--radius-md)', background: '#1F2933', marginBottom: 16 }} />
            <p style={{ fontWeight: 600 }}>Peakwell Gray 900</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>#1F2933</p>
          </div>
          <div className="card">
            <div style={{ width: '100%', height: 80, borderRadius: 'var(--radius-md)', background: '#F5F7FA', marginBottom: 16 }} />
            <p style={{ fontWeight: 600 }}>Peakwell Gray 100</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>#F5F7FA</p>
          </div>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>タイポグラフィと使用ガイド</h2>
        <div className="card" style={{ padding: 32 }}>
          <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 12 }}>
            フォントは「BIZ UDPゴシック」をベースとした丸みのあるサンセリフを推奨します。デジタル・印刷ともに視認性の高い書体です。
          </p>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・ロゴと併用する際は十分な余白を確保</li>
            <li>・アイコンはSVGで提供し、必要に応じて単色運用</li>
            <li>・アクセシビリティを考慮しコントラスト比4.5:1以上を確保</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
