import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

interface BreadcrumbsProps {
  items: readonly BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.peakwell.jp${item.href}`
    }))
  };

  return (
    <div style={{ marginBottom: 32 }}>
      <nav aria-label="パンくずリスト" style={{ fontSize: 14, color: 'var(--peakwell-gray-600)' }}>
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 && <span aria-hidden="true" style={{ margin: '0 6px' }}>/</span>}
            <Link href={item.href}>{item.label}</Link>
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
