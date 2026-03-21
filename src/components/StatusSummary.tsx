"use client";

import { Project } from "@/lib/types";

export default function StatusSummary({ projects }: { projects: Project[] }) {
  const total = projects.length;
  const inProgress = projects.filter((p) => p.status === "in_progress").length;
  const onHold = projects.filter((p) => p.status === "on_hold").length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const overdue = projects.filter((p) => {
    if (!p.dueDate || p.status === "completed" || p.status === "cancelled") return false;
    return new Date(p.dueDate) < new Date();
  }).length;

  const avgProgress = total > 0
    ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / total)
    : 0;

  const stats = [
    { label: "全プロジェクト", value: total, color: "text-gray-900" },
    { label: "進行中", value: inProgress, color: "text-blue-600" },
    { label: "保留", value: onHold, color: "text-yellow-600" },
    { label: "完了", value: completed, color: "text-green-600" },
    { label: "期限超過", value: overdue, color: "text-red-600" },
    { label: "平均進捗", value: `${avgProgress}%`, color: "text-purple-600" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
          <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
