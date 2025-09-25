import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パートナー募集',
  description: '代理店・協業の仕組み、要件、問い合わせCTAをご案内します。'
};

export default function PartnersPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'パートナー募集', href: '/partners' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>パートナー募集</h1>
      <div className="card" style={{ padding: 32, marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>協業の仕組み</h2>
        <p style={{ color: 'var(--peakwell-gray-600)' }}>
          代理店・協業パートナーとして、医薬品買取、共同配送、在宅配達のいずれかまたは全体を提供いただける企業さまを募集しています。
        </p>
      </div>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>パートナー要件</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・医療/物流領域での実績</li>
            <li>・品質・コンプライアンス基準を満たす体制</li>
            <li>・共創のための情報連携体制</li>
          </ul>
        </div>
        <div className="card">
          <h3>提供リソース</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・PEAKWELL Connectの共同販促素材</li>
            <li>・テクニカルトレーニングとSOP</li>
            <li>・共催セミナー・イベントの企画支援</li>
          </ul>
        </div>
        <div className="card">
          <h3>成功指標</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・導入案件数と継続率</li>
            <li>・CO₂削減量や温度逸脱ゼロ率</li>
            <li>・共創レポートの発行</li>
          </ul>
        </div>
      </div>
      <div className="cta-banner">
        <div>
          <div className="tag">パートナープログラム</div>
          <h2 style={{ marginTop: 12, fontSize: 32 }}>共に医薬品物流の未来を創りましょう</h2>
          <p style={{ color: 'var(--peakwell-gray-600)', marginTop: 12 }}>
            代理店契約、共同プロダクト開発、地域連携など多様なスキームをご用意しています。まずはお打ち合わせから。
          </p>
        </div>
        <a href="/contact" className="button-primary">
          協業の相談をする
        </a>
      </div>
    </div>
  );
}
