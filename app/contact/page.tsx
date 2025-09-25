import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactFormTabs } from '@/components/ContactFormTabs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '法人向け、パートナー募集、メディア取材のお問い合わせフォームをご用意しています。'
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: 'お問い合わせ', href: '/contact' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>お問い合わせ</h1>
      <ContactFormTabs />
    </div>
  );
}
