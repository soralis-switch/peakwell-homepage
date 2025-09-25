# Peakwell Homepage

Peakwell株式会社の公式コーポレートサイトです。Next.js 14（App Router）で構築し、医薬品買取・共同配送・在宅配達を中心としたサービスや導入実績、品質管理体制、採用情報などを紹介しています。

## セットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くとトップページが表示されます。

## 本番ビルドと起動

```bash
npm run build
npm run start
```

`npm run start` はポート `3000` のHTTPサーバーを起動します。環境変数 `PORT` を指定すれば別ポートでも稼働できます。

## Dockerでの起動

Next.jsのスタンドアロン出力を利用した軽量コンテナイメージを同梱しています。

```bash
# ビルド
docker build -t peakwell-homepage .

# 起動（ホストの3000番で公開）
docker run --rm -p 3000:3000 peakwell-homepage
```

クラウドサービスへデプロイする場合は上記イメージを利用するか、Vercel等のNext.js対応プラットフォームにこのリポジトリを接続してデプロイしてください。

## 主なページ

- `/` トップページ（ヒーロー・KPI・加盟店推移グラフ・事例・ニュース・CTA）
- `/business` 事業内容（医薬品買取／共同配送／在宅配達）
- `/solutions` ペルソナ別ソリューション
- `/cases` 導入事例一覧とフィルタ、`/cases/[slug]` 各事例詳細
- `/product` PEAKWELL Connect（テクノロジー）
- `/quality` 品質・コンプライアンス体制
- `/sustainability` サステナビリティと年次レポート
- `/pricing` 料金・お取引条件、簡易試算フォーム
- `/company` 会社情報（代表挨拶・沿革・役員・アクセス）
- `/news` ニュース一覧とカテゴリタブ、`/news/[slug]` 詳細
- `/resources` 資料ダウンロード（DLフォーム）
- `/recruit` 採用情報と募集要項、`/recruit/[slug]` 応募フォーム
- `/contact` お問い合わせ（法人／パートナー／メディアのタブ切替）
- `/faq` よくある質問（JSON-LD対応）
- `/partners` パートナー募集
- `/brand` メディアキット（ロゴ・カラーガイド）
- `/privacy`, `/security-policy`, `/terms`, `/cookie-policy`, `/legal-disclosure`, `/sitemap`

## 構造化データ

Organization、BreadcrumbList、NewsArticle、FAQPage、JobPostingのJSON-LDを組み込み、SEO強化を図っています。

## ライセンス

本リポジトリ内のコンテンツはPeakwell株式会社向けのサンプル実装です。

## GitHubへの公開手順

ローカルの変更をGitHubで共有する場合は、以下の手順に従ってください。

1. GitHub上で新しい空のリポジトリを作成し、HTTPSまたはSSHのURLを控えます。
2. ローカルリポジトリにリモートを追加します。

   ```bash
   git remote add origin <your-github-repo-url>
   ```

   すでに`origin`が設定済みの場合は `git remote set-url origin <your-github-repo-url>` で更新できます。
3. mainブランチに最新のコミットが含まれていることを確認します。

   ```bash
   git checkout main
   git merge work
   ```

   プロジェクトを別ブランチで開発している場合は、GitHubに公開したいブランチを指定してください。
4. 初回のみGitHubへ履歴を送信します。

   ```bash
   git push -u origin main
   ```

   以降は `git push` だけで最新の変更を同期できます。

GitHub Actions等のCI/CDを設定する場合は、必要に応じて`.github/workflows`ディレクトリにワークフローを追加してください。
