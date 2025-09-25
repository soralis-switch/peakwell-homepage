import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サステナビリティ',
  description: '不動在庫の再流通、共同配送でのCO₂削減、資材再利用ポリシー、年次レポートなどピークウェルのサステナビリティを紹介します。'
};

export default function SustainabilityPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'サステナビリティ', href: '/sustainability' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>サステナビリティ</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>
        医療資源を無駄にしない循環型の医薬品物流を目指し、不動在庫の再流通や共同配送によるCO₂削減、資材再利用に取り組んでいます。
      </p>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>不動在庫の再流通</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            査定式で価値を可視化し、在庫を必要な薬局・医療機関へ再流通。廃棄量削減とアクセス改善を両立します。
          </p>
        </div>
        <div className="card">
          <h3>共同配送によるCO₂削減</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            積載率最適化と車両電動化でCO₂排出を削減。削減量はダッシュボードで算出し、第三者検証を受けています。
          </p>
        </div>
        <div className="card">
          <h3>ダンボール再利用ポリシー</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            リターナブルボックスや再生ダンボールを採用。破損時は資源回収パートナーと連携し循環率を可視化しています。
          </p>
        </div>
      </div>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>年次レポート</h2>
        <div className="card" style={{ padding: 32 }}>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            直近のサステナビリティレポート（ダイジェスト）を公開中です。CO₂削減実績、廃棄削減、コミュニティ連携などをまとめています。
          </p>
          <a href="#" className="button-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
            2023年レポートをダウンロード
          </a>
        </div>
      </section>
    </div>
  );
}
