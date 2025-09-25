import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { caseStudies } from '@/data/content';

interface CaseDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: CaseDetailProps): Metadata {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    return {
      title: '導入事例'
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary
  };
}

export default function CaseDetailPage({ params }: CaseDetailProps) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '導入事例', href: '/cases' },
    { label: caseStudy.title, href: `/cases/${caseStudy.slug}` }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <p className="badge">{caseStudy.industry}</p>
      <h1 style={{ fontSize: 40, margin: '16px 0' }}>{caseStudy.title}</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>{caseStudy.summary}</p>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>規模</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>{caseStudy.size}</p>
        </div>
        <div className="card">
          <h3>地域</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>{caseStudy.region}</p>
        </div>
        <div className="card">
          <h3>成果</h3>
          <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
            {caseStudy.results.map((result) => (
              <li key={result}>・{result}</li>
            ))}
          </ul>
        </div>
      </div>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>課題</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          {caseStudy.detail.challenge.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>解決策</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          {caseStudy.detail.solution.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>成果</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          {caseStudy.detail.outcome.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
