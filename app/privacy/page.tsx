import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '個人情報保護方針',
  description: 'ピークウェルの個人情報保護方針を掲載しています。'
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '個人情報保護方針', href: '/privacy' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>個人情報保護方針</h1>
      <div className="card" style={{ padding: 32, display: 'grid', gap: 16 }}>
        <p>
          ピークウェル株式会社（以下「当社」）は、医薬品物流事業において取り扱う個人情報を適切に保護するため、以下の方針を定めます。
        </p>
        <h2>1. 法令遵守</h2>
        <p>当社は個人情報保護法、関連法令、ガイドラインを遵守します。</p>
        <h2>2. 利用目的</h2>
        <p>収集した個人情報は、サービス提供、サポート対応、採用活動、広報活動の目的で利用します。</p>
        <h2>3. 安全管理</h2>
        <p>アクセス制御、暗号化、監査ログにより個人情報を保護します。</p>
        <h2>4. 第三者提供</h2>
        <p>法令に基づく場合を除き、本人の同意なく第三者に提供しません。</p>
        <h2>5. 開示・訂正・利用停止</h2>
        <p>本人からの請求に応じ、適切に対応します。</p>
        <h2>6. お問い合わせ窓口</h2>
        <p>privacy@peakwell.jp（個人情報保護管理責任者）</p>
      </div>
    </div>
  );
}
