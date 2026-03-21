"use client";

import { Project, STATUS_LABELS, PRIORITY_LABELS } from "@/lib/types";

const statusColors: Record<string, string> = {
  not_started: "bg-gray-100 text-gray-700",
  in_progress: "bg-blue-100 text-blue-700",
  on_hold: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const priorityColors: Record<string, string> = {
  low: "bg-gray-100 text-gray-600",
  medium: "bg-blue-100 text-blue-600",
  high: "bg-orange-100 text-orange-600",
  urgent: "bg-red-100 text-red-600",
};

function daysUntil(dateStr: string): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function ProjectCard({ project }: { project: Project }) {
  const days = daysUntil(project.dueDate);
  const tasksDone = project.tasks.filter((t) => t.status === "done").length;
  const tasksTotal = project.tasks.length;

  return (
    <a
      href={`/projects/${project.id}`}
      className="block bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: project.color }}
          />
          <h3 className="font-semibold text-base truncate">{project.name}</h3>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${priorityColors[project.priority]}`}>
          {PRIORITY_LABELS[project.priority]}
        </span>
      </div>

      {project.description && (
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {project.description}
        </p>
      )}

      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>進捗</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all"
            style={{
              width: `${project.progress}%`,
              backgroundColor: project.color,
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className={`px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
          {STATUS_LABELS[project.status]}
        </span>
        <div className="flex items-center gap-3">
          {tasksTotal > 0 && (
            <span>
              タスク {tasksDone}/{tasksTotal}
            </span>
          )}
          {days !== null && (
            <span className={days < 0 ? "text-red-500 font-medium" : days <= 7 ? "text-orange-500" : ""}>
              {days < 0 ? `${Math.abs(days)}日超過` : days === 0 ? "今日期限" : `残${days}日`}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
