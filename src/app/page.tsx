"use client";

import { useEffect, useState } from "react";
import { Project, ProjectStatus, Priority, STATUS_LABELS, PRIORITY_LABELS } from "@/lib/types";
import { loadProjects } from "@/lib/store";
import ProjectCard from "@/components/ProjectCard";
import StatusSummary from "@/components/StatusSummary";

type SortKey = "updatedAt" | "dueDate" | "priority" | "progress" | "name";

const SORT_LABELS: Record<SortKey, string> = {
  updatedAt: "更新日",
  dueDate: "期限",
  priority: "優先度",
  progress: "進捗",
  name: "名前",
};

const priorityOrder: Record<Priority, number> = {
  urgent: 0,
  high: 1,
  medium: 2,
  low: 3,
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filterStatus, setFilterStatus] = useState<ProjectStatus | "all">("all");
  const [sortKey, setSortKey] = useState<SortKey>("updatedAt");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProjects(loadProjects());
    setLoaded(true);
  }, []);

  const filtered = projects.filter(
    (p) => filterStatus === "all" || p.status === filterStatus
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortKey) {
      case "dueDate":
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.localeCompare(b.dueDate);
      case "priority":
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      case "progress":
        return b.progress - a.progress;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return b.updatedAt.localeCompare(a.updatedAt);
    }
  });

  if (!loaded) {
    return <div className="text-center py-20 text-gray-400">読み込み中...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">ダッシュボード</h1>
        <a
          href="/projects/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          + 新規プロジェクト
        </a>
      </div>

      <StatusSummary projects={projects} />

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm text-gray-500">ステータス:</span>
        <button
          onClick={() => setFilterStatus("all")}
          className={`text-xs px-3 py-1 rounded-full border transition ${
            filterStatus === "all"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
          }`}
        >
          すべて
        </button>
        {(Object.entries(STATUS_LABELS) as [ProjectStatus, string][]).map(
          ([key, label]) => (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                filterStatus === key
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
              }`}
            >
              {label}
            </button>
          )
        )}
        <span className="text-sm text-gray-500 ml-4">並び替え:</span>
        {(Object.entries(SORT_LABELS) as [SortKey, string][]).map(
          ([key, label]) => (
            <button
              key={key}
              onClick={() => setSortKey(key)}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                sortKey === key
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 mb-4">
            {projects.length === 0
              ? "プロジェクトがまだありません"
              : "該当するプロジェクトがありません"}
          </p>
          {projects.length === 0 && (
            <a
              href="/projects/new"
              className="text-blue-600 hover:underline text-sm"
            >
              最初のプロジェクトを作成する →
            </a>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
