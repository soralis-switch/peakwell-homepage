import Link from 'next/link';
import type { NewsItem } from '@/data/content';

interface NewsListProps {
  items: NewsItem[];
  showCategory?: boolean;
}

export function NewsList({ items, showCategory = true }: NewsListProps) {
  return (
    <div className="news-grid">
      {items.map((news) => (
        <article key={news.slug} className="card" style={{ padding: 24 }}>
          <p className="badge">{news.category}</p>
          <h3 style={{ fontSize: 20, margin: '12px 0' }}>
            <Link href={`/news/${news.slug}`}>{news.title}</Link>
          </h3>
          <p style={{ fontSize: 14, color: 'var(--peakwell-gray-600)' }}>{new Date(news.date).toLocaleDateString('ja-JP')}</p>
          <p style={{ color: 'var(--peakwell-gray-600)', marginTop: 12 }}>{news.excerpt}</p>
          {showCategory && (
            <Link href={`/news/${news.slug}`} style={{ marginTop: 16, display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--peakwell-blue)', fontWeight: 600 }}>
              詳細を見る
              <span aria-hidden>→</span>
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
