import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '情報セキュリティ基本方針',
  description: 'ピークウェルの情報セキュリティ基本方針を掲載しています。'
};

export default function SecurityPolicyPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '情報セキュリティ基本方針', href: '/security-policy' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>情報セキュリティ基本方針</h1>
      <div className="card" style={{ padding: 32, display: 'grid', gap: 16 }}>
        <p>
          当社は医薬品物流に関する情報資産を保護し、安心・安全なサービスを提供するため、以下の方針を定めます。
        </p>
        <h2>1. 情報資産の特定と評価</h2>
        <p>情報資産を分類し、リスク評価を実施して管理策を策定します。</p>
        <h2>2. セキュリティ体制</h2>
        <p>情報セキュリティ委員会を設置し、ポリシーの策定・運用・改善を行います。</p>
        <h2>3. 教育・啓発</h2>
        <p>従業員・委託先に対し、定期的に教育・訓練を実施します。</p>
        <h2>4. 事故対応</h2>
        <p>インシデント発生時は迅速に報告・対処し、再発防止策を実施します。</p>
        <h2>5. 継続的改善</h2>
        <p>内部監査や外部評価を踏まえ、情報セキュリティマネジメントを継続的に改善します。</p>
      </div>
    </div>
  );
}
