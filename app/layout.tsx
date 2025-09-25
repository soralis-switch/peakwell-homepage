import './globals.css';
import type { Metadata } from 'next';
import { BIZ_UDPGothic } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Peakwell | 医薬品物流をアップデートする統合プラットフォーム',
    template: '%s | Peakwell'
  },
  description:
    'ピークウェルは医薬品の買取・共同配送・在宅配達を統合し、温度管理とコンプライアンスを両立する物流DXプラットフォームです。',
  openGraph: {
    title: 'Peakwell | 医薬品物流をアップデートする統合プラットフォーム',
    description:
      '医薬品の買取・共同配送・在宅配達を一体化したPeakwell。温度管理・監査ログ・CO₂削減を支援します。',
    url: 'https://www.peakwell.jp',
    siteName: 'Peakwell',
    locale: 'ja_JP',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

const bizUdpGothic = BIZ_UDPGothic({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Peakwell株式会社',
  legalName: 'Peakwell Inc.',
  url: 'https://www.peakwell.jp',
  logo: 'https://www.peakwell.jp/logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+81-3-1234-5678',
      contactType: 'customer service',
      areaServed: 'JP',
      availableLanguage: ['Japanese']
    }
  ],
  sameAs: ['https://www.linkedin.com/company/peakwell']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`
          }}
        />
      </head>
      <body className={bizUdpGothic.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
