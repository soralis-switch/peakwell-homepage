import Link from 'next/link';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { NewsList } from '@/components/NewsList';
import { TrendChart } from '@/components/TrendChart';
import { caseStudies, kpiCards, logos, newsItems, partnerTrendData, certifications } from '@/data/content';

const newsSchema = {
  '@context': 'https://schema.org',
  '@graph': newsItems.map((item) => ({
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    url: `https://www.peakwell.jp/news/${item.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Peakwell株式会社'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peakwell株式会社',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.peakwell.jp/logo.png'
      }
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <div className="tag">医薬品物流DXプラットフォーム</div>
          <h1>医薬品の買取・共同配送・在宅配達を一気通貫で</h1>
          <p>
            Peakwellは、GDP/GSP準拠の物流基盤とデジタルプロダクトで、医療従事者と患者さんに安心を届ける統合プラットフォームです。コアバリューは「責任ある供給」「データで磨く品質」「共創によるサステナビリティ」。
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/business" className="button-primary" style={{ padding: '14px 32px' }}>
              事業内容を見る
            </Link>
            <Link
              href="/resources"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 600, color: 'var(--peakwell-blue)' }}
            >
              資料ダウンロード
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: 'var(--peakwell-gray-600)', fontSize: 14 }}>主要KPI（2024年4月時点）</p>
              <h2 style={{ fontSize: 32, marginTop: 8 }}>加盟1,280施設 / 共同配送145ルート</h2>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge">温度逸脱ゼロ率 99.98%</span>
              <span className="badge">推計CO₂削減 3,200t</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>主要事業</h2>
          <div className="card-grid">
            <div className="card">
              <h3>医薬品買取</h3>
              <p>不動在庫や期限管理が難しい医薬品をAI査定で買取。GDP/GSP体制で再流通し、廃棄とキャッシュフローの課題を同時に解決します。</p>
              <ul style={{ marginTop: 16, display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
                <li>・査定ロジックを公開し透明性を担保</li>
                <li>・専任薬剤師による事前審査</li>
                <li>・コンプライアンスチェックと監査ログ保存</li>
              </ul>
              <Link href="/business#purchase" style={{ marginTop: 24, display: 'inline-flex', gap: 8, alignItems: 'center', fontWeight: 600, color: 'var(--peakwell-blue)' }}>
                詳しく見る
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="card">
              <h3>共同配送</h3>
              <p>マルチ温度帯・リードタイム最適化に対応した共同配送網。AIルーティングとIoTで温度逸脱ゼロを目指し、CO₂削減にも貢献します。</p>
              <ul style={{ marginTop: 16, display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
                <li>・15分単位のスロットとSLA通知</li>
                <li>・事故時の保険・責任分界点を明確化</li>
                <li>・CO₂モニタリングレポートを月次で提供</li>
              </ul>
              <Link href="/business#delivery" style={{ marginTop: 24, display: 'inline-flex', gap: 8, alignItems: 'center', fontWeight: 600, color: 'var(--peakwell-blue)' }}>
                詳しく見る
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="card">
              <h3>在宅配達代行</h3>
              <p>薬剤師監修の本人確認フローと温度管理を備えた在宅配達。訪問薬剤管理指導を支援し、患者体験とセキュリティを両立します。</p>
              <ul style={{ marginTop: 16, display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
                <li>・署名＋ワンタイムコードの二要素認証</li>
                <li>・温度帯別のパッケージングとトレーサビリティ</li>
                <li>・リアルタイム追跡と家族共有機能</li>
              </ul>
              <Link href="/business#home-delivery" style={{ marginTop: 24, display: 'inline-flex', gap: 8, alignItems: 'center', fontWeight: 600, color: 'var(--peakwell-blue)' }}>
                詳しく見る
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--peakwell-gray-100)' }}>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>数で見るピークウェル</h2>
          <div className="card-grid">
            {kpiCards.map((card) => (
              <div key={card.label} className="card" style={{ padding: 32 }}>
                <p className="badge">{card.label}</p>
                <p style={{ fontSize: 32, fontWeight: 700, marginTop: 16 }}>{card.value}</p>
                <p style={{ color: 'var(--peakwell-gray-600)', marginTop: 8 }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <TrendChart data={partnerTrendData} />
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ marginBottom: 16 }}>加盟店マップ（開発中）</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>
              CSVを差し替えるだけで日本地図の塗り分けや直近増分が更新されるモジュールを提供予定です。エリア別の開拓状況を可視化し、パートナーとの共創を促進します。
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--peakwell-gray-100)' }}>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>導入実績</h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {logos.map((logo) => (
              <span
                key={logo}
                style={{
                  padding: '18px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(82,96,109,0.15)',
                  background: '#fff',
                  fontWeight: 600
                }}
              >
                {logo}
              </span>
            ))}
          </div>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>※ NDAに基づき匿名表記。一言コメントや成功指標は資料でご覧いただけます。</p>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>導入事例</h2>
          <div className="case-slider" aria-label="導入事例スライダー">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} compact />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--peakwell-gray-100)' }}>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>信頼を支えるエビデンス</h2>
          <div className="card-grid">
            <div className="card">
              <h3>認証・許認可</h3>
              <ul style={{ display: 'grid', gap: 8, color: 'var(--peakwell-gray-600)' }}>
                {certifications.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>事故時の責任分界</h3>
              <p style={{ color: 'var(--peakwell-gray-600)' }}>
                事故種別（輸送事故・温度逸脱・本人確認不備）ごとに保険スキームと補償責任を図解。SLAを24時間以内の初動、72時間以内のレポート提出として明文化しています。
              </p>
            </div>
            <div className="card">
              <h3>監査・トレーサビリティ</h3>
              <p style={{ color: 'var(--peakwell-gray-600)' }}>
                温度ログ、ロット追跡、監査ログをPEAKWELL Connectで一元管理。監査用エクスポートとアクセス権限の履歴を自動保存します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          <h2>最新ニュース</h2>
          <NewsList items={newsItems} />
        </div>
      </section>

      <section style={{ background: 'var(--peakwell-gray-100)' }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <div className="tag">資料DL・商談・トライアル</div>
              <h2 style={{ marginTop: 12, fontSize: 32 }}>まずは15分で課題ヒアリングをご提案します</h2>
              <p style={{ color: 'var(--peakwell-gray-600)', marginTop: 12 }}>
                KPI、温度管理、SLA、CO₂削減など貴社の注力領域にあわせてデモと概算試算をご用意します。GA4イベント計測・CTAトラッキングも設定済みです。
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link href="/contact" className="button-primary">
                相談する
              </Link>
              <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--peakwell-blue)' }}>
                料金を試算する
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }} />
    </>
  );
}
