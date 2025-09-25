'use client';

import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { PartnerTrendEntry } from '@/data/content';

interface TrendChartProps {
  data: PartnerTrendEntry[];
}

type ViewMode = 'yearly' | 'monthly';

type FacilityType = 'all' | 'pharmacy' | 'hospital';

const prefectureOptions = ['すべて', '東京都', '大阪府', '福岡県'];

export function TrendChart({ data }: TrendChartProps) {
  const [view, setView] = useState<ViewMode>('yearly');
  const [prefecture, setPrefecture] = useState<string>('すべて');
  const [facilityType, setFacilityType] = useState<FacilityType>('all');

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const prefectureMatch = prefecture === 'すべて' || item.prefecture === prefecture;
      const typeMatch = facilityType === 'all' || item.type === facilityType;
      return prefectureMatch && typeMatch;
    });
  }, [data, prefecture, facilityType]);

  const aggregated = useMemo(() => {
    const map = new Map<string, { pharmacy: number; hospital: number; total: number }>();

    filtered.forEach((entry) => {
      const key = view === 'yearly' ? entry.date.slice(0, 4) : entry.date.slice(0, 7);
      if (!map.has(key)) {
        map.set(key, { pharmacy: 0, hospital: 0, total: 0 });
      }
      const current = map.get(key)!;
      current[entry.type] += entry.count;
      current.total += entry.count;
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([key, value]) => ({
        period: key,
        ...value
      }));
  }, [filtered, view]);

  const latest = aggregated[aggregated.length - 1];
  const prev = aggregated[aggregated.length - 2];
  const yoy = latest && prev ? (((latest.total - prev.total) / prev.total) * 100).toFixed(1) : '—';
  const cagr = useMemo(() => {
    if (aggregated.length < 2) return '—';
    const first = aggregated[0];
    const last = aggregated[aggregated.length - 1];
    const years = Math.max(1, aggregated.length - 1) / (view === 'yearly' ? 1 : 12);
    if (!first || !last || first.total === 0) return '—';
    const rate = Math.pow(last.total / first.total, 1 / years) - 1;
    return `${(rate * 100).toFixed(1)}%`;
  }, [aggregated, view]);

  const ChartComponent = view === 'yearly' ? AreaChart : BarChart;

  return (
    <div className="card" style={{ padding: 32, background: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="tag">加盟店推移</div>
            <h3 style={{ marginTop: 12, fontSize: 26 }}>エリア別・施設種別で見る成長トレンド</h3>
          </div>
          <div className="tabs" role="tablist" aria-label="表示粒度">
            <button
              type="button"
              role="tab"
              className={view === 'yearly' ? 'active' : ''}
              aria-selected={view === 'yearly'}
              onClick={() => setView('yearly')}
            >
              年次
            </button>
            <button
              type="button"
              role="tab"
              className={view === 'monthly' ? 'active' : ''}
              aria-selected={view === 'monthly'}
              onClick={() => setView('monthly')}
            >
              月次
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <label style={{ width: '200px', flex: '1 1 200px' }}>
            都道府県
            <select value={prefecture} onChange={(event) => setPrefecture(event.target.value)}>
              {prefectureOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label style={{ width: '200px', flex: '1 1 200px' }}>
            施設種別
            <select value={facilityType} onChange={(event) => setFacilityType(event.target.value as FacilityType)}>
              <option value="all">薬局＋医療機関</option>
              <option value="pharmacy">薬局</option>
              <option value="hospital">医療機関</option>
            </select>
          </label>
        </div>
        <div style={{ width: '100%', height: 340 }}>
          <ResponsiveContainer>
            <ChartComponent data={aggregated}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(82,96,109,0.2)" />
              <XAxis dataKey="period" />
              <YAxis allowDecimals={false} />
              <Tooltip
                labelFormatter={(label) => `${label.replace('-', '年')} 時点`}
                formatter={(value: number, name: string) => {
                  const labels: Record<string, string> = {
                    total: '合計',
                    pharmacy: '薬局',
                    hospital: '医療機関'
                  };
                  return [`${value.toLocaleString()}施設`, labels[name] ?? name];
                }}
              />
              <Legend />
              {view === 'yearly' ? (
                <>
                  <Area type="monotone" dataKey="pharmacy" stackId="1" stroke="#00bfff" fill="rgba(0,191,255,0.35)" name="薬局" />
                  <Area type="monotone" dataKey="hospital" stackId="1" stroke="#0284c7" fill="rgba(2,132,199,0.35)" name="医療機関" />
                  <Area type="monotone" dataKey="total" stroke="#0ea5e9" fill="rgba(14,165,233,0.15)" name="合計" />
                </>
              ) : (
                <>
                  <Bar dataKey="pharmacy" stackId="1" fill="rgba(0,191,255,0.7)" name="薬局" />
                  <Bar dataKey="hospital" stackId="1" fill="rgba(2,132,199,0.7)" name="医療機関" />
                </>
              )}
            </ChartComponent>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <div className="card" style={{ padding: 24 }}>
            <p style={{ fontWeight: 600, color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>最新スナップショット</p>
            <p style={{ fontSize: 28, fontWeight: 700 }}>{latest ? `${latest.total.toLocaleString()}施設` : '—'}</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>薬局 {latest ? latest.pharmacy.toLocaleString() : '—'} / 医療機関 {latest ? latest.hospital.toLocaleString() : '—'}</p>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <p style={{ fontWeight: 600, color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>前年同月比</p>
            <p style={{ fontSize: 28, fontWeight: 700 }}>{yoy}%</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>キャンペーン効果や連携強化の注記をホバーで表示</p>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <p style={{ fontWeight: 600, color: 'var(--peakwell-gray-600)', marginBottom: 8 }}>CAGR</p>
            <p style={{ fontSize: 28, fontWeight: 700 }}>{cagr}</p>
            <p style={{ color: 'var(--peakwell-gray-600)' }}>CSV差し替えでデータ更新可能</p>
          </div>
        </div>
      </div>
    </div>
  );
}
