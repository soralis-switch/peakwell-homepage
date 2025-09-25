import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'テクノロジー | PEAKWELL Connect',
  description: 'PEAKWELL Connectのアーキテクチャ、主要機能、連携、ダッシュボードをご紹介します。'
};

export default function ProductPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'テクノロジー', href: '/product' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <div className="tag">PEAKWELL Connect</div>
      <h1 style={{ fontSize: 40, margin: '16px 0' }}>医薬品物流を統合するデジタルプラットフォーム</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>
        買取・共同配送・在宅配達を1つのUIで管理し、API/EDI連携とリアルタイム可視化で業務を効率化。監査ログ・権限・温度データを網羅的に管理できます。
      </p>
      <div className="card" style={{ padding: 32, marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>全体像</h2>
        <p style={{ color: 'var(--peakwell-gray-600)' }}>
          SaaSとして提供するConnectと倉庫・配送の現場システムが連携。データレイヤはクラウド上で暗号化され、各種API/EDIで既存システムと接続します。
        </p>
      </div>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>主要機能</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・在庫・配送・温度データの統合ダッシュボード</li>
            <li>・SLA/事故対応の自動ワークフロー</li>
            <li>・ジョブ管理と配達員アプリのリアルタイム連携</li>
          </ul>
        </div>
        <div className="card">
          <h3>API / EDI</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            REST/GraphQL/EDI（医療BMS）をサポート。Webhookとイベントログで在庫情報や配達状況をリアルタイム同期します。
          </p>
        </div>
        <div className="card">
          <h3>ダッシュボードUI</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            KPIカード、トレンドグラフ、温度マップ、アラートタイムラインを備えたモックを提供。ユーザーテストで継続的に改善しています。
          </p>
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <h3>セキュリティ</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・データ保護：AES-256暗号化とリージョン限定</li>
            <li>・監査ログ：全操作を99年間保管</li>
            <li>・権限設計：RBACとABACを組み合わせた細粒度制御</li>
          </ul>
        </div>
        <div className="card">
          <h3>可観測性と運用</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            <li>・99.95%アップタイム保証</li>
            <li>・SOC2準拠の運用監査</li>
            <li>・GA4/BigQueryでイベント計測を実装</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
