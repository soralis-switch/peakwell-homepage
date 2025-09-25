import { Breadcrumbs } from '@/components/Breadcrumbs';
import { resources } from '@/data/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '資料ダウンロード',
  description: '会社パンフレット、事業紹介資料、導入事例PDF、ホワイトペーパーなどの資料をダウンロードいただけます。'
};

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '資料ダウンロード', href: '/resources' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>資料ダウンロード</h1>
      <div className="card-grid" style={{ marginBottom: 40 }}>
        {resources.map((resource) => (
          <div key={resource.title} className="card">
            <h3>{resource.title}</h3>
            <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 12 }}>{resource.description}</p>
            <p style={{ color: 'var(--peakwell-gray-600)', fontSize: 14 }}>
              {resource.format} / {resource.size}
            </p>
            <a href="#download" className="button-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
              ダウンロード申請
            </a>
          </div>
        ))}
      </div>
      <section id="download">
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>DLフォーム</h2>
        <div className="card" style={{ padding: 32 }}>
          <form>
            <label>
              会社名
              <input type="text" name="company" required />
            </label>
            <label>
              ご担当者名
              <input type="text" name="name" required />
            </label>
            <label>
              メールアドレス
              <input type="email" name="email" required />
            </label>
            <label>
              ダウンロード希望資料
              <select name="resource">
                {resources.map((resource) => (
                  <option key={resource.title} value={resource.title}>
                    {resource.title}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ flexDirection: 'row', alignItems: 'center' }}>
              <input type="checkbox" required style={{ width: 20, height: 20 }} />
              <span style={{ marginLeft: 12 }}>
                個人情報保護方針と情報セキュリティ基本方針に同意します。
              </span>
            </label>
            <button type="submit" className="button-primary" style={{ justifyContent: 'center' }}>
              同意して送信
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
