import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'ピークウェルの特定商取引法に基づく表記を掲載しています。'
};

export default function LegalDisclosurePage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '特定商取引法に基づく表記', href: '/legal-disclosure' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>特定商取引法に基づく表記</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>事業者</th>
            <td>ピークウェル株式会社</td>
          </tr>
          <tr>
            <th>運営責任者</th>
            <td>代表取締役 CEO 佐藤 真由</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>東京都中央区日本橋1-2-3</td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>03-1234-5678 / contact@peakwell.jp</td>
          </tr>
          <tr>
            <th>提供価格</th>
            <td>個別見積り（料金ページをご覧ください）</td>
          </tr>
          <tr>
            <th>代金の支払い時期</th>
            <td>月末締め翌月末払い（契約により異なる場合あり）</td>
          </tr>
          <tr>
            <th>返品・キャンセル</th>
            <td>サービスの性質上、提供後のキャンセルは不可。個別契約による。</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
