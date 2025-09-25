import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { jobPostings } from '@/data/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '採用情報',
  description: '働く環境・制度・募集ポジション・応募方法についてご案内します。'
};

const jobSchema = {
  '@context': 'https://schema.org',
  '@graph': jobPostings.map((job) => ({
    '@type': 'JobPosting',
    title: job.title,
    datePosted: '2024-04-01',
    description: job.description.join('、'),
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Peakwell株式会社'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'JP',
        addressRegion: job.location
      }
    },
    validThrough: '2024-12-31'
  }))
};

export default function RecruitPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '採用情報', href: '/recruit' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>採用情報</h1>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>働く環境</h2>
        <div className="card-grid">
          <div className="card">
            <h3>ハイブリッドワーク</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>リモートと出社を組み合わせ、現場との連携に応じて柔軟に働けます。</p>
          </div>
          <div className="card">
            <h3>学習支援</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>書籍購入、カンファレンス参加、資格取得を支援。年間10万円まで補助します。</p>
          </div>
          <div className="card">
            <h3>ウェルビーイング</h3>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>ヘルスケア手当、メンタルケアプログラム、家族看護休暇を整備しています。</p>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>制度</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          <li>・フレックスタイム制（コアタイム11:00-15:00）</li>
          <li>・入社初日から有給付与</li>
          <li>・副業/兼業可（承認制）</li>
          <li>・育児・介護支援制度</li>
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>募集ポジション</h2>
        <div className="card-grid">
          {jobPostings.map((job) => (
            <div key={job.slug} className="card">
              <h3>{job.title}</h3>
              <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>{job.department}</p>
              <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>{job.location}</p>
              <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16 }}>{job.workStyle}</p>
              <Link href={`/recruit/${job.slug}`} className="button-primary" style={{ justifyContent: 'center' }}>
                募集要項を見る
              </Link>
            </div>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
    </div>
  );
}
