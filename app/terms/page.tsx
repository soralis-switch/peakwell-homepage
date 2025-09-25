import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'ピークウェルのウェブサイトおよびサービス利用規約を掲載しています。'
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '利用規約', href: '/terms' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>利用規約</h1>
      <div className="card" style={{ padding: 32, display: 'grid', gap: 16 }}>
        <p>
          この利用規約（以下「本規約」）は、ピークウェル株式会社（以下「当社」）が提供するサービスの利用条件を定めるものです。
        </p>
        <h2>第1条（適用）</h2>
        <p>本規約は、ユーザーと当社との間のサービス利用に関わる一切の関係に適用されます。</p>
        <h2>第2条（利用登録）</h2>
        <p>登録希望者が当社の定める方法によって利用登録を申請し、当社が承認することで利用登録が完了します。</p>
        <h2>第3条（禁止事項）</h2>
        <p>法令または公序良俗に違反する行為、当社の運営を妨害する行為などは禁止します。</p>
        <h2>第4条（サービス提供の停止等）</h2>
        <p>当社は、システム保守、天災等によりサービス提供を一時停止する場合があります。</p>
        <h2>第5条（免責事項）</h2>
        <p>当社は、ユーザーの責に帰すべき事由により生じた損害について責任を負いません。</p>
        <h2>第6条（準拠法）</h2>
        <p>本規約は日本法を準拠法とし、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
      </div>
    </div>
  );
}
