import { Breadcrumbs } from '@/components/Breadcrumbs';
import { faqs } from '@/data/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問',
  description: '医薬品買取、共同配送、在宅配達代行、データ更新などに関するFAQをご紹介します。'
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function FaqPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'よくある質問', href: '/faq' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>よくある質問</h1>
      <div className="accordion">
        {faqs.map((faq) => (
          <details key={faq.question} className="accordion-item">
            <summary className="accordion-summary">{faq.question}</summary>
            <div className="accordion-details">{faq.answer}</div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
