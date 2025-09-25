import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { jobPostings } from '@/data/content';

interface JobDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return jobPostings.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: JobDetailProps): Metadata {
  const job = jobPostings.find((item) => item.slug === params.slug);
  if (!job) {
    return { title: '採用情報' };
  }
  return {
    title: job.title,
    description: job.description.join(' / ')
  };
}

export default function JobDetailPage({ params }: JobDetailProps) {
  const job = jobPostings.find((item) => item.slug === params.slug);
  if (!job) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '採用情報', href: '/recruit' },
    { label: job.title, href: `/recruit/${job.slug}` }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>{job.title}</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 24 }}>{job.department} / {job.location} / {job.workStyle}</p>
      <div className="card" style={{ padding: 32, marginBottom: 24 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>仕事内容</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          {job.description.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </div>
      <div className="card" style={{ padding: 32, marginBottom: 24 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>応募条件</h2>
        <h3>必須</h3>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8, marginBottom: 16 }}>
          {job.requirements.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
        <h3>歓迎</h3>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          {job.plus.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </div>
      <div className="card" style={{ padding: 32 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>応募フォーム</h2>
        <form>
          <label>
            お名前
            <input type="text" name="name" required />
          </label>
          <label>
            メールアドレス
            <input type="email" name="email" required />
          </label>
          <label>
            職務経歴
            <textarea name="history" rows={5} required />
          </label>
          <label style={{ flexDirection: 'row', alignItems: 'center' }}>
            <input type="checkbox" required style={{ width: 20, height: 20 }} />
            <span style={{ marginLeft: 12 }}>個人情報保護方針に同意します。</span>
          </label>
          <button type="submit" className="button-primary" style={{ justifyContent: 'center' }}>
            応募する
          </button>
        </form>
      </div>
    </div>
  );
}
