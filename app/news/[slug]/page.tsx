import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { newsItems } from '@/data/content';

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsDetailProps): Metadata {
  const news = newsItems.find((item) => item.slug === params.slug);
  if (!news) {
    return {
      title: 'ニュース'
    };
  }
  return {
    title: news.title,
    description: news.excerpt
  };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const news = newsItems.find((item) => item.slug === params.slug);
  if (!news) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'ニュース', href: '/news' },
    { label: news.title, href: `/news/${news.slug}` }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    datePublished: news.date,
    articleBody: news.excerpt,
    publisher: {
      '@type': 'Organization',
      name: 'Peakwell株式会社'
    }
  };

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <p className="badge">{news.category}</p>
      <h1 style={{ fontSize: 40, margin: '16px 0' }}>{news.title}</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 24 }}>{new Date(news.date).toLocaleDateString('ja-JP')}</p>
      <div className="card" style={{ padding: 32 }}>
        <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 16 }}>{news.excerpt}</p>
        <p style={{ color: 'var(--peakwell-gray-600)' }}>
          詳細なリリース本文や添付資料はお問い合わせいただくとご案内します。取材・連携のご相談も歓迎しています。
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </div>
  );
}
