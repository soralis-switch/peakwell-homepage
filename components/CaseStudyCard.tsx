import Link from 'next/link';
import type { CaseStudy } from '@/data/content';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ caseStudy, compact = false }: CaseStudyCardProps) {
  return (
    <article className="card" style={{ padding: compact ? 24 : 32, minHeight: compact ? undefined : 320 }}>
      <p className="badge">{caseStudy.industry}</p>
      <h3 style={{ fontSize: 22, margin: '12px 0' }}>
        <Link href={`/cases/${caseStudy.slug}`}>{caseStudy.title}</Link>
      </h3>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16 }}>{caseStudy.summary}</p>
      <div className="tag-grid" style={{ marginBottom: 16 }}>
        <span className="tag">規模: {caseStudy.size}</span>
        <span className="tag">エリア: {caseStudy.region}</span>
      </div>
      <ul style={{ display: 'grid', gap: 8 }}>
        {caseStudy.results.map((result) => (
          <li key={result} style={{ color: 'var(--peakwell-gray-600)' }}>
            ・{result}
          </li>
        ))}
      </ul>
      <Link
        href={`/cases/${caseStudy.slug}`}
        style={{ marginTop: 24, display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--peakwell-blue)', fontWeight: 600 }}
      >
        詳細を見る
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
