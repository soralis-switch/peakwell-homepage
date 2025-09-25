import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社情報',
  description: 'ピークウェルのミッション・ビジョン、会社概要、沿革、役員紹介、アクセスをご覧いただけます。'
};

const timeline = [
  { year: '2018', event: 'ピークウェル創業、医薬品買取サービスを開始' },
  { year: '2020', event: '共同配送ネットワークを関東・関西で拡大' },
  { year: '2022', event: 'PEAKWELL Connectを正式リリース、全国16エリアに拡大' },
  { year: '2024', event: '在宅配達代行とCO₂削減プログラムをローンチ' }
];

const executives = [
  { name: '佐藤 真由', role: '代表取締役 CEO', bio: '総合商社と医療系スタートアップで物流DXを経験。ピークウェル創業者。' },
  { name: '中村 大樹', role: '取締役 COO', bio: '大手物流会社で医薬品輸配送を統括。SLA構築と品質マネジメントが専門。' },
  { name: '石井 花', role: '取締役 CTO', bio: 'ヘルスケアSaaSの開発責任者を経て参画。PEAKWELL Connectのアーキテクト。' }
];

export default function CompanyPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '会社情報', href: '/company' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>会社情報</h1>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>代表メッセージ</h2>
        <div className="card" style={{ padding: 32 }}>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            「医薬品が必要な人に、最適なタイミングで届けられる世界をつくる」。ピークウェルは医療従事者と患者さんに寄り添い、テクノロジーと現場力で医薬品物流の信頼性を高め続けます。
          </p>
          <p style={{ marginTop: 24, fontWeight: 600 }}>代表取締役 CEO 佐藤 真由</p>
        </div>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>ミッション・ビジョン</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Mission</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>医薬品物流を次のステージへ引き上げ、すべての患者に確実なアクセスを提供する。</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>医療資源の循環とサステナビリティを共創し、社会全体のQOL向上に貢献する。</p>
          </div>
          <div className="card">
            <h3>Value</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>責任・透明性・共創を軸に、ステークホルダーと共に信頼のサプライチェーンを築きます。</p>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>会社概要</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>会社名</th>
              <td>ピークウェル株式会社（Peakwell Inc.）</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>東京都中央区日本橋1-2-3</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2018年4月</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>5億円</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>医薬品買取、共同配送、在宅配達代行、SaaS提供</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>沿革</h2>
        <div className="card" style={{ padding: 32 }}>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 12 }}>
            {timeline.map((item) => (
              <li key={item.year}>
                <strong>{item.year}</strong> {item.event}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>役員紹介</h2>
        <div className="card-grid">
          {executives.map((member) => (
            <div key={member.name} className="card">
              <h3>{member.name}</h3>
              <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>{member.role}</p>
              <p style={{ color: 'var(--peakwell-gray-600)' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>アクセス</h2>
        <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16 }}>東京メトロ日本橋駅 徒歩2分</p>
        <iframe
          title="Peakwell本社アクセス"
          className="map-placeholder"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3407336842704!2d139.7720266761835!3d35.68390917259035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bebdfe63bbf%3A0x27dc702ce1ef6cd6!2z5pel5pys44CB44CSMTAzLTAwMjU!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
          loading="lazy"
        />
      </section>
    </div>
  );
}
