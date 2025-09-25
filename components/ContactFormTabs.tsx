'use client';

import { useState } from 'react';

const tabs = [
  { key: 'corporate', label: '法人向け' },
  { key: 'partner', label: 'パートナー募集' },
  { key: 'media', label: 'メディア取材' }
] as const;

type TabKey = (typeof tabs)[number]['key'];

const placeholder: Record<TabKey, string> = {
  corporate: '導入検討の背景やご希望の開始時期などをご記入ください。',
  partner: '協業のアイデアや代理店としての強みなどをご記入ください。',
  media: '取材テーマや掲載予定媒体、スケジュールをご記入ください。'
};

export function ContactFormTabs() {
  const [active, setActive] = useState<TabKey>('corporate');

  return (
    <>
      <div className="tabs" role="tablist" aria-label="お問い合わせ種別">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            className={active === tab.key ? 'active' : ''}
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="card" style={{ padding: 32 }}>
        <form>
          <input type="hidden" name="topic" value={active} />
          <label>
            会社・団体名
            <input type="text" name="company" required />
          </label>
          <label>
            ご担当者名
            <input type="text" name="name" required />
          </label>
          <label>
            メールアドレス
            <input type="email" name="email" required />
          </label>
          <label>
            お問い合わせ内容
            <textarea name="message" rows={6} placeholder={placeholder[active]} required />
          </label>
          <button type="submit" className="button-primary" style={{ justifyContent: 'center' }}>
            送信する
          </button>
        </form>
      </div>
    </>
  );
}
