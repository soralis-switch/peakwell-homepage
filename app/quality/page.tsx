import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '品質・コンプライアンス',
  description: 'GDP/GSP体制、温度管理、CAPA、教育訓練、監査対応などピークウェルの品質マネジメントをご紹介します。'
};

export default function QualityPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '品質・コンプライアンス', href: '/quality' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>品質・コンプライアンス</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>
        GDP/GSP準拠の輸配送体制、温度管理、CAPA、教育訓練、監査対応など、医薬品物流に求められる品質とコンプライアンスを徹底しています。
      </p>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>GDP/GSP体制</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・GDP認証倉庫と温度帯別在庫管理</li>
            <li>・GSP準拠の流通プロセス</li>
            <li>・定期監査と是正計画</li>
          </ul>
        </div>
        <div className="card">
          <h3>温度管理</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            IoTセンサーで常時監視し、逸脱時はアラートと補償フローを自動起動。温度ログは監査用にエクスポート可能です。
          </p>
        </div>
        <div className="card">
          <h3>校正・記録</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            計測機器の校正履歴をSaaSで管理し、監査ログと紐づけて保存。ドキュメントは電子署名対応です。
          </p>
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <h3>CAPA</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            逸脱・クレームを起点に是正・予防措置をワークフロー化。リスク評価と改善策をダッシュボードで追跡します。
          </p>
        </div>
        <div className="card">
          <h3>教育訓練</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            GDP/GSP・セキュリティ・SLA対応のトレーニングをeラーニング化し、受講履歴を自動管理します。
          </p>
        </div>
        <div className="card">
          <h3>監査対応</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            内部監査・顧客監査に対応したテンプレートとチェックリストを提供。監査レポートをConnect上で共有可能です。
          </p>
        </div>
      </div>
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>事故対応ポリシー・保険・SLA</h2>
        <p style={{ color: 'var(--peakwell-gray-600)' }}>
          事故カテゴリに応じて保険適用・補償フロー・SLAを定義。温度逸脱・配達事故・本人確認不備など各ケースでの初動時間と報告義務を明確化しています。
        </p>
      </section>
    </div>
  );
}
