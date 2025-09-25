'use client';

import { useMemo, useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/content';

const industries = ['すべて', ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];
const sizes = ['すべて', ...Array.from(new Set(caseStudies.map((cs) => cs.size)))];
const regions = ['すべて', ...Array.from(new Set(caseStudies.map((cs) => cs.region)))];
const themes = ['すべて', ...Array.from(new Set(caseStudies.flatMap((cs) => cs.theme)))];

export default function CasesPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '導入事例', href: '/cases' }
  ];

  const [industry, setIndustry] = useState('すべて');
  const [size, setSize] = useState('すべて');
  const [region, setRegion] = useState('すべて');
  const [theme, setTheme] = useState('すべて');

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const industryMatch = industry === 'すべて' || cs.industry === industry;
      const sizeMatch = size === 'すべて' || cs.size === size;
      const regionMatch = region === 'すべて' || cs.region === region;
      const themeMatch = theme === 'すべて' || cs.theme.includes(theme);
      return industryMatch && sizeMatch && regionMatch && themeMatch;
    });
  }, [industry, size, region, theme]);

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>導入事例</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>
        業種・規模・地域・テーマでフィルタリングし、Peakwellの共創事例をご覧いただけます。
      </p>
      <div className="card" style={{ padding: 24, marginBottom: 32 }}>
        <div className="tabs" role="group" aria-label="フィルタ">
          <label>
            業種
            <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
              {industries.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            規模
            <select value={size} onChange={(event) => setSize(event.target.value)}>
              {sizes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            地域
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              {regions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            テーマ
            <select value={theme} onChange={(event) => setTheme(event.target.value)}>
              {themes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="card-grid">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
        {filtered.length === 0 && <p style={{ color: 'var(--peakwell-gray-600)' }}>該当する事例は現在準備中です。</p>}
      </div>
    </div>
  );
}
