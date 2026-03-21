import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "プロジェクト管理 | Peakwell",
  description: "複数プロジェクト管理ダッシュボード",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <a href="/" className="text-lg font-bold text-blue-600">
                Peakwell PM
              </a>
              <nav className="flex gap-4 text-sm">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  ダッシュボード
                </a>
                <a href="/projects/new" className="text-gray-600 hover:text-gray-900">
                  + 新規プロジェクト
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
