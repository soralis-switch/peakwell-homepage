import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '事業内容',
  description: '医薬品買取・共同配送・在宅配達代行などピークウェルの主要サービスをご紹介します。'
};

export default function BusinessPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '事業内容', href: '/business' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>事業内容</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 40 }}>
        Peakwellは「医薬品を必要とする人へ確実に届ける」ために、買取・共同配送・在宅配達代行を統合したオペレーションとテクノロジーを提供しています。
      </p>

      <section id="purchase" style={{ padding: '48px 0' }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>医薬品買取</h2>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>買取対象</h3>
          <p style={{ color: 'var(--peakwell-gray-600)', marginTop: 8 }}>
            期限残9か月以上で保管状態がGDP/GSP基準を満たす医療用医薬品。専任薬剤師が麻薬・覚醒剤原料等の取り扱い可否を判定します。
          </p>
        </div>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>価格ロジック</h3>
          <ul style={{ display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)', marginTop: 12 }}>
            <li>・AIが市場需要、期限、在庫回転率をスコアリング</li>
            <li>・原価と需要データから査定式を可視化し透明性を担保</li>
            <li>・査定結果と連動した再流通計画をレコメンド</li>
          </ul>
        </div>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>査定フロー</h3>
          <ol style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8, paddingLeft: 20 }}>
            <li>1. CSVまたはAPIで在庫リストを受領</li>
            <li>2. AI査定＋薬剤師チェック</li>
            <li>3. 条件合意後に集荷・検品</li>
            <li>4. 再流通先への共同配送手配</li>
          </ol>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <h3>よくある質問</h3>
          <ul style={{ display: 'grid', gap: 12, color: 'var(--peakwell-gray-600)' }}>
            <li>・査定結果は1営業日以内。緊急案件は即日対応。</li>
            <li>・返品不可品の処分は環境配慮型の委託先と連携。</li>
            <li>・麻薬等は専用SOPと監査ログを用意しています。</li>
          </ul>
        </div>
      </section>

      <section id="delivery" style={{ padding: '48px 0' }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>共同配送</h2>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>ルート最適化</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            温度帯（冷蔵・冷凍・常温）とリードタイム、CO₂削減目標を同時に満たすAIルーティング。異常時には即座に代替ルートを提示します。
          </p>
        </div>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>責任・保険・SLA</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            事故カテゴリごとに責任分界と補償内容を明文化。貨物保険・賠償責任保険・温度逸脱保険を組み合わせ、SLAは温度逸脱検知5分以内通知/24時間以内に初動完了を定義しています。
          </p>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <h3>CO₂削減</h3>
          <ul style={{ display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
            <li>・車両稼働率と積載率の自動最適化</li>
            <li>・再利用可能なリターナブル容器と段ボール再利用ポリシー</li>
            <li>・排出量レポートを国際基準に沿って提供</li>
          </ul>
        </div>
      </section>

      <section id="home-delivery" style={{ padding: '48px 0' }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>在宅配達代行</h2>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>セキュリティ・本人確認</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            二要素認証、電子サイン、薬剤師リモート立ち合い、配達員の身元確認を標準化。麻薬・向精神薬にも対応したSOPを提供します。
          </p>
        </div>
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <h3>温度管理</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            IoTセンサーと開封防止タグで温度逸脱を監視。患者さま・家族向けに到着前の温度ログを共有し、逸脱時は補償プロセスを即時発動します。
          </p>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <h3>追跡とレポート</h3>
          <ul style={{ display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
            <li>・配送状況を家族とケアマネに共有</li>
            <li>・服薬指導と紐づくイベント計測</li>
            <li>・監査ログと事故報告書をダッシュボードに集約</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
