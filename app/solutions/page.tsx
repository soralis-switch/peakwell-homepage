import { Breadcrumbs } from '@/components/Breadcrumbs';
import { personas } from '@/data/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ソリューション',
  description: '薬局・製薬/卸・医療機関それぞれの課題を解決するPeakwellのソリューションをご紹介します。'
};

export default function SolutionsPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'ソリューション', href: '/solutions' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>ペルソナ別ソリューション</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 40 }}>
        PEAKWELL Connectは、薬局・製薬/卸・医療機関それぞれのオペレーション課題を解決するモジュールを提供します。課題のヒアリングから成果創出まで伴走します。
      </p>
      <div className="card-grid">
        {personas.map((persona) => (
          <div key={persona.segment} className="card">
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>{persona.segment}</h2>
            <h3>課題</h3>
            <ul style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16, display: 'grid', gap: 8 }}>
              {persona.pains.map((pain) => (
                <li key={pain}>・{pain}</li>
              ))}
            </ul>
            <h3>解決策</h3>
            <ul style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16, display: 'grid', gap: 8 }}>
              {persona.solutions.map((solution) => (
                <li key={solution}>・{solution}</li>
              ))}
            </ul>
            <h3>成果</h3>
            <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
              {persona.outcomes.map((outcome) => (
                <li key={outcome}>・{outcome}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
