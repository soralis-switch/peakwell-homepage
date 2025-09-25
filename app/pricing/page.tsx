import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '料金・お取引条件',
  description: '医薬品買取・共同配送・在宅配達代行の料金モデルと試算フォームをご案内します。'
};

export default function PricingPage() {
  const breadcrumbs = [
    { label: 'トップ', href: '/' },
    { label: '料金・お取引条件', href: '/pricing' }
  ];

  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <Breadcrumbs items={breadcrumbs} />
      <h1 style={{ fontSize: 40, marginBottom: 24 }}>料金・お取引条件</h1>
      <p style={{ color: 'var(--peakwell-gray-600)', marginBottom: 32 }}>
        プロジェクト規模・取扱品目・エリアに応じて最適な料金プランをご提案します。概算の試算フォームもご用意しました。
      </p>
      <div className="card-grid" style={{ marginBottom: 32 }}>
        <div className="card">
          <h3>医薬品買取</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            査定式で単価を算出（市場需要、期限、状態）。ボリュームディスカウントや共同配送利用時の優遇も可能です。
          </p>
        </div>
        <div className="card">
          <h3>共同配送</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            ボリューム階段式（1日当たりの配送数・温度帯・エリア数）。SLA追加や専用車両はオプション設定。
          </p>
        </div>
        <div className="card">
          <h3>在宅配達代行</h3>
          <p style={{ color: 'var(--peakwell-gray-600)' }}>
            配達件数・本人確認要件・時間帯指定で段階的に料金を設定。緊急配達はスポット料金で対応します。
          </p>
        </div>
      </div>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>取引条件</h2>
        <ul style={{ color: 'var(--peakwell-gray-600)', display: 'grid', gap: 8 }}>
          <li>・最短1か月のトライアル、3か月から本契約</li>
          <li>・契約期間：12か月／24か月（途中解約条項あり）</li>
          <li>・支払い条件：月末締め翌月末払い</li>
          <li>・個人情報・機微情報の取扱い契約を締結</li>
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>簡易試算フォーム</h2>
        <div className="card" style={{ padding: 32 }}>
          <form>
            <label>
              企業・施設名
              <input type="text" name="company" placeholder="例：ピークウェル薬局" required />
            </label>
            <label>
              月間配送件数（概算）
              <input type="number" name="volume" min="0" placeholder="例：200" />
            </label>
            <label>
              ご相談メニュー
              <select name="menu">
                <option value="purchase">医薬品買取</option>
                <option value="delivery">共同配送</option>
                <option value="home">在宅配達代行</option>
              </select>
            </label>
            <label>
              ご相談内容
              <textarea name="message" rows={4} placeholder="要件やスケジュールをお知らせください。" />
            </label>
            <button type="submit" className="button-primary" style={{ justifyContent: 'center' }}>
              概算見積りを依頼する
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
