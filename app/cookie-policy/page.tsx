import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'クッキーポリシー',
  description: 'ピークウェルのクッキーポリシーを掲載しています。'
};

export default function CookiePolicyPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'クッキーポリシー', href: '/cookie-policy' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>クッキーポリシー</h1>
      <div className="card" style={{ padding: 32, display: 'grid', gap: 16 }}>
        <p>当社ウェブサイトでは、利便性向上と利用状況の分析のためクッキーを使用しています。</p>
        <h2>1. 使用目的</h2>
        <p>サイトの改善、サービス案内、広告配信の最適化に活用します。</p>
        <h2>2. 取得情報</h2>
        <p>閲覧履歴、アクセス元、デバイス情報などを取得する場合があります。</p>
        <h2>3. 管理方法</h2>
        <p>ブラウザ設定によりクッキーの受け入れを拒否できます。拒否された場合、一部機能がご利用いただけないことがあります。</p>
        <h2>4. 第三者サービス</h2>
        <p>Google Analytics等の第三者サービスを利用する場合があります。詳細は各社のポリシーをご確認ください。</p>
      </div>
    </div>
  );
}
