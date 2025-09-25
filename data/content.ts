export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  size: string;
  region: string;
  theme: string[];
  results: string[];
  detail: {
    challenge: string[];
    solution: string[];
    outcome: string[];
  };
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: 'プレスリリース' | 'お知らせ' | 'イベント';
  excerpt: string;
};

export type JobPosting = {
  slug: string;
  title: string;
  department: string;
  location: string;
  workStyle: string;
  description: string[];
  requirements: string[];
  plus: string[];
};

export type PartnerTrendEntry = {
  date: string;
  prefecture: string;
  type: 'pharmacy' | 'hospital';
  count: number;
};

export const kpiCards = [
  {
    label: '加盟薬局・医療機関',
    value: '1,280施設',
    description: '薬局 980 / 医療機関 300'
  },
  {
    label: '共同配送ルート',
    value: '145ルート',
    description: '全国16エリアで日次稼働'
  },
  {
    label: '温度逸脱ゼロ率',
    value: '99.98%',
    description: 'GDP対応パッケージ＋AI監視'
  },
  {
    label: 'CO₂削減量',
    value: '3,200t',
    description: '共同配送とリターナブル資材で実現'
  }
];

export const partnerTrendData: PartnerTrendEntry[] = [
  { date: '2020-01-01', prefecture: '東京都', type: 'pharmacy', count: 120 },
  { date: '2020-01-01', prefecture: '東京都', type: 'hospital', count: 30 },
  { date: '2020-01-01', prefecture: '大阪府', type: 'pharmacy', count: 80 },
  { date: '2020-01-01', prefecture: '大阪府', type: 'hospital', count: 18 },
  { date: '2021-01-01', prefecture: '東京都', type: 'pharmacy', count: 220 },
  { date: '2021-01-01', prefecture: '東京都', type: 'hospital', count: 60 },
  { date: '2021-01-01', prefecture: '大阪府', type: 'pharmacy', count: 130 },
  { date: '2021-01-01', prefecture: '大阪府', type: 'hospital', count: 40 },
  { date: '2022-01-01', prefecture: '東京都', type: 'pharmacy', count: 360 },
  { date: '2022-01-01', prefecture: '東京都', type: 'hospital', count: 110 },
  { date: '2022-01-01', prefecture: '大阪府', type: 'pharmacy', count: 210 },
  { date: '2022-01-01', prefecture: '大阪府', type: 'hospital', count: 70 },
  { date: '2023-01-01', prefecture: '東京都', type: 'pharmacy', count: 520 },
  { date: '2023-01-01', prefecture: '東京都', type: 'hospital', count: 160 },
  { date: '2023-01-01', prefecture: '大阪府', type: 'pharmacy', count: 320 },
  { date: '2023-01-01', prefecture: '大阪府', type: 'hospital', count: 110 },
  { date: '2024-01-01', prefecture: '東京都', type: 'pharmacy', count: 650 },
  { date: '2024-01-01', prefecture: '東京都', type: 'hospital', count: 210 },
  { date: '2024-01-01', prefecture: '大阪府', type: 'pharmacy', count: 410 },
  { date: '2024-01-01', prefecture: '大阪府', type: 'hospital', count: 150 },
  { date: '2024-02-01', prefecture: '東京都', type: 'pharmacy', count: 670 },
  { date: '2024-02-01', prefecture: '東京都', type: 'hospital', count: 218 },
  { date: '2024-02-01', prefecture: '大阪府', type: 'pharmacy', count: 420 },
  { date: '2024-02-01', prefecture: '大阪府', type: 'hospital', count: 154 },
  { date: '2024-03-01', prefecture: '東京都', type: 'pharmacy', count: 690 },
  { date: '2024-03-01', prefecture: '東京都', type: 'hospital', count: 226 },
  { date: '2024-03-01', prefecture: '大阪府', type: 'pharmacy', count: 430 },
  { date: '2024-03-01', prefecture: '大阪府', type: 'hospital', count: 158 },
  { date: '2024-04-01', prefecture: '東京都', type: 'pharmacy', count: 720 },
  { date: '2024-04-01', prefecture: '東京都', type: 'hospital', count: 238 },
  { date: '2024-04-01', prefecture: '大阪府', type: 'pharmacy', count: 442 },
  { date: '2024-04-01', prefecture: '大阪府', type: 'hospital', count: 162 },
  { date: '2024-04-01', prefecture: '福岡県', type: 'pharmacy', count: 160 },
  { date: '2024-04-01', prefecture: '福岡県', type: 'hospital', count: 54 }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'urban-pharmacy-network',
    title: '都市型チェーン薬局：在庫最適化と在宅配達の両立',
    summary: 'チェーン薬局が不動在庫の買取と在宅配達代行を同時に導入し、棚卸コストと配送コストを削減。',
    industry: '薬局',
    size: '300店舗以上',
    region: '関東',
    theme: ['在宅医療', '不動在庫削減', '患者満足度向上'],
    results: ['不動在庫を年間12%削減', '配達リードタイムを35%短縮', 'NPS +18pt'],
    detail: {
      challenge: ['在宅訪問が急増し配達要件が多様化', '不動在庫の滞留により棚卸コストが膨張'],
      solution: ['ピークウェルConnectで在庫と配送を一元管理', 'AIルート最適化による温度帯別の配送スロット設計'],
      outcome: ['在庫回転率が1.4倍に改善', '配送コストを月次で18%削減']
    }
  },
  {
    slug: 'regional-hospital-alliance',
    title: '地域医療連携：共同配送でCO₂排出を45%削減',
    summary: '大学病院と地域クリニックの共同配送で医薬品調達を効率化。リードタイムと温度逸脱リスクを低減。',
    industry: '医療機関',
    size: '1,000床規模',
    region: '関西',
    theme: ['共同配送', '温度管理', 'CO₂削減'],
    results: ['リードタイムを平均6時間短縮', '温度逸脱ゼロを12ヶ月継続', 'CO₂排出量を年間45%削減'],
    detail: {
      challenge: ['施設ごとに物流要件がバラバラで非効率', '温度管理の記録作業が属人化'],
      solution: ['共同配送ネットワークを構築しAIでルート最適化', 'クラウド温度ログと権限管理で監査対応を自動化'],
      outcome: ['職員の業務時間を月160時間削減', '監査対応工数を70%削減']
    }
  },
  {
    slug: 'manufacturer-dc-optimization',
    title: '製薬メーカー：余剰在庫の再流通でキャッシュ創出',
    summary: '有効期限が迫った在庫を査定式で買取し、共同配送網で薬局へ再流通。廃棄コストとCO₂を削減。',
    industry: '製薬',
    size: '年商500億円規模',
    region: '全国',
    theme: ['不動在庫', 'サステナビリティ', '共同配送'],
    results: ['廃棄コストを年間3,000万円削減', 'CO₂排出を年間320t削減', '在庫評価損を半減'],
    detail: {
      challenge: ['在庫の陳腐化スピードが速く廃棄が多発', '各拠点で温度ログ形式がバラバラ'],
      solution: ['AI査定ロジックで買取可否を判定', 'ダッシュボードで温度ログとSLAを一元管理'],
      outcome: ['キャッシュフロー改善（2.4億円を創出）', '監査時の指摘事項ゼロを更新']
    }
  }
];

export const newsItems: NewsItem[] = [
  {
    slug: '20240415-new-route',
    title: '九州エリアで医療機関連携の共同配送を開始',
    date: '2024-04-15',
    category: 'プレスリリース',
    excerpt: '九州全域の薬局・医療機関向けにGDP準拠の共同配送ルートを新設しました。'
  },
  {
    slug: '20240330-award',
    title: 'ロジスティクス革新アワード2024を受賞',
    date: '2024-03-30',
    category: 'イベント',
    excerpt: '医薬品物流の脱炭素化とデジタル化が評価され、業界アワードを受賞しました。'
  },
  {
    slug: '20240310-whitepaper',
    title: '温度管理とSLA設計に関するホワイトペーパーを公開',
    date: '2024-03-10',
    category: 'お知らせ',
    excerpt: '共同配送における温度管理のベストプラクティスをまとめた資料を公開しました。'
  }
];

export const logos = ['製薬A社', '製薬B社', '卸C社', '薬局Dチェーン', '薬局Eグループ', '医療法人F'];

export const personas = [
  {
    segment: '薬局向け',
    pains: ['在宅対応で配送業務が逼迫', '不動在庫の陳腐化リスク', '冷蔵・冷凍の温度監視が煩雑'],
    solutions: ['買取と共同配送を組み合わせて在庫循環を可視化', '在宅配達代行で患者対応と温度管理を担保', 'ダッシュボードで温度ログとSLAを自動化'],
    outcomes: ['在庫回転率アップ', 'スタッフの残業40%削減', '患者満足度と監査対応力の両立']
  },
  {
    segment: '製薬・卸向け',
    pains: ['販路別の需要変動で供給調整が難しい', '返品・廃棄コストが高止まり', '協業先とのデータ連携が分断'],
    solutions: ['API/EDI連携で在庫と受注をリアルタイム同期', '査定アルゴリズムで買取価格を透明化', '共同配送でCO₂排出とコストを同時に削減'],
    outcomes: ['需給予測の精度向上', 'キャッシュフロー改善', 'ESG評価の向上']
  },
  {
    segment: '医療機関向け',
    pains: ['24時間対応の薬剤供給体制の構築', '麻薬・覚醒剤原料の管理責任', 'トレーサビリティと監査対応の負荷'],
    solutions: ['緊急配送SLAと事故時の保険スキームを明文化', '権限設計と監査ログで取扱品目を厳格管理', '温度・ロット追跡をダッシュボードで一元化'],
    outcomes: ['供給リスクを最小化', '医療安全の強化', '監査準備時間を半減']
  }
];

export const faqs = [
  {
    question: '医薬品の買取対象はどのように決まりますか？',
    answer: '有効期限・保管状態・需要データからAIが査定し、GDP/GSP体制を満たすもののみ買取します。特定生物由来製品や麻薬は専任チームが事前審査します。'
  },
  {
    question: '共同配送の温度管理はどのように担保されていますか？',
    answer: 'マルチ温度帯対応のボックスとIoTセンサーで輸送中の温度を常時監視し、逸脱時は即時アラートと補償プロセスが起動します。'
  },
  {
    question: '在宅配達代行での本人確認は可能ですか？',
    answer: '二要素認証（署名＋ワンタイムコード）と薬剤師リモート立ち合いの仕組みで本人確認を徹底します。'
  },
  {
    question: 'CSVで加盟店データを更新できますか？',
    answer: '管理画面からCSVを差し替えるだけでマップ・グラフに即時反映される運用設計です。非エンジニアでも扱えます。'
  }
];

export const jobPostings: JobPosting[] = [
  {
    slug: 'product-manager',
    title: 'プロダクトマネージャー（PEAKWELL Connect）',
    department: 'プロダクト本部',
    location: '東京（フルリモート可）',
    workStyle: '正社員 / フレックス',
    description: [
      '医薬品物流SaaS「PEAKWELL Connect」のプロダクト戦略策定',
      'ペルソナ課題の抽出とロードマップ策定',
      'KPI設計とグロース実行の推進'
    ],
    requirements: [
      'B2B SaaSでのPdM経験（3年以上）',
      'API/EDI連携プロジェクトの推進経験',
      '医療・物流領域への強い興味'
    ],
    plus: ['医薬品業界での業務経験', 'データプロダクト開発の経験']
  },
  {
    slug: 'logistics-operations',
    title: '共同配送オペレーションマネージャー',
    department: 'サプライチェーン本部',
    location: '大阪（リモート併用）',
    workStyle: '正社員 / シフト制',
    description: [
      '共同配送ネットワークの運営と改善',
      '事故時のエスカレーションと保険対応のマネジメント',
      '拠点横断でのSLAモニタリングと改善提案'
    ],
    requirements: [
      '物流・配送現場でのマネジメント経験',
      '温度管理やGDP/GSPに関する知識',
      'データに基づく改善活動の経験'
    ],
    plus: ['医薬品輸送の経験', 'AIルーティングツールの導入経験']
  }
];

export const resources = [
  {
    title: '会社パンフレット',
    description: 'ピークウェルの会社概要と事業全体像をまとめたパンフレットです。',
    format: 'PDF',
    size: '4.2MB'
  },
  {
    title: '事業紹介資料',
    description: '買取・共同配送・在宅配達のサービス詳細と導入効果をご紹介します。',
    format: 'PDF',
    size: '6.8MB'
  },
  {
    title: '導入事例集',
    description: '薬局・製薬・医療機関での導入事例をテーマ別にまとめた資料です。',
    format: 'PDF',
    size: '8.1MB'
  },
  {
    title: 'ホワイトペーパー：温度管理とSLA',
    description: 'GDP/GSP準拠の温度管理設計とSLA運用のベストプラクティスを解説。',
    format: 'PDF',
    size: '5.6MB'
  }
];

export const certifications = [
  'GDP/GSP準拠の輸配送品質マネジメント',
  '医薬品卸売販売業 許可（全国16エリア）',
  '麻薬・向精神薬・覚醒剤原料等 委託取扱い体制整備',
  'ISO/IEC 27001（情報セキュリティマネジメント）',
  'ISO 9001（品質マネジメントシステム）'
];
