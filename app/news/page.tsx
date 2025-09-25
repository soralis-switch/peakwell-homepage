'use client';

import { useMemo, useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NewsList } from '@/components/NewsList';
import { newsItems } from '@/data/content';

const categories = ['すべて', 'プレスリリース', 'お知らせ', 'イベント'];

export default function NewsPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'ニュース', href: '/news' }
  ];

  const [category, setCategory] = useState<string>('すべて');

  const filtered = useMemo(() => {
    if (category === 'すべて') return newsItems;
    return newsItems.filter((item) => item.category === category);
  }, [category]);

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>ニュース</h1>
      <div className="tabs" role="tablist" aria-label="カテゴリ">
        {categories.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            className={category === option ? 'active' : ''}
            aria-selected={category === option}
            onClick={() => setCategory(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <NewsList items={filtered} />
    </div>
  );
}
