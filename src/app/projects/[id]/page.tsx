"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Project,
  Task,
  ProjectStatus,
  Priority,
  TaskStatus,
  STATUS_LABELS,
  PRIORITY_LABELS,
  TASK_STATUS_LABELS,
  PROJECT_COLORS,
} from "@/lib/types";
import { loadProjects, saveProjects, generateId } from "@/lib/store";

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [editing, setEditing] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const projects = loadProjects();
    const found = projects.find((p) => p.id === params.id);
    if (found) setProject(found);
    setLoaded(true);
  }, [params.id]);

  function save(updated: Project) {
    updated.updatedAt = new Date().toISOString();
    // Auto-calculate progress from tasks
    if (updated.tasks.length > 0) {
      const done = updated.tasks.filter((t) => t.status === "done").length;
      updated.progress = Math.round((done / updated.tasks.length) * 100);
    }
    setProject({ ...updated });
    const projects = loadProjects();
    const idx = projects.findIndex((p) => p.id === updated.id);
    if (idx >= 0) {
      projects[idx] = updated;
      saveProjects(projects);
    }
  }

  function addTask() {
    if (!project || !newTaskTitle.trim()) return;
    const task: Task = {
      id: generateId(),
      title: newTaskTitle.trim(),
      status: "todo",
      createdAt: new Date().toISOString(),
    };
    save({ ...project, tasks: [...project.tasks, task] });
    setNewTaskTitle("");
  }

  function updateTaskStatus(taskId: string, status: TaskStatus) {
    if (!project) return;
    const tasks = project.tasks.map((t) =>
      t.id === taskId ? { ...t, status } : t
    );
    save({ ...project, tasks });
  }

  function deleteTask(taskId: string) {
    if (!project) return;
    save({ ...project, tasks: project.tasks.filter((t) => t.id !== taskId) });
  }

  function deleteProject() {
    if (!project) return;
    if (!confirm("このプロジェクトを削除しますか？")) return;
    const projects = loadProjects().filter((p) => p.id !== project.id);
    saveProjects(projects);
    router.push("/");
  }

  if (!loaded) {
    return <div className="text-center py-20 text-gray-400">読み込み中...</div>;
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 mb-4">プロジェクトが見つかりません</p>
        <a href="/" className="text-blue-600 hover:underline text-sm">
          ダッシュボードに戻る
        </a>
      </div>
    );
  }

  const tasksDone = project.tasks.filter((t) => t.status === "done").length;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <a href="/" className="text-gray-400 hover:text-gray-600 text-sm">
          ← ダッシュボード
        </a>
      </div>

      {/* Project Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            {editing ? (
              <input
                value={project.name}
                onChange={(e) => setProject({ ...project, name: e.target.value })}
                className="text-xl font-bold border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <h1 className="text-xl font-bold">{project.name}</h1>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (editing) save(project);
                setEditing(!editing);
              }}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              {editing ? "保存" : "編集"}
            </button>
            <button
              onClick={deleteProject}
              className="text-xs px-3 py-1.5 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition"
            >
              削除
            </button>
          </div>
        </div>

        {editing ? (
          <div className="space-y-4">
            <textarea
              value={project.description}
              onChange={(e) => setProject({ ...project, description: e.target.value })}
              rows={2}
              placeholder="説明"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">ステータス</label>
                <select
                  value={project.status}
                  onChange={(e) =>
                    setProject({ ...project, status: e.target.value as ProjectStatus })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  {Object.entries(STATUS_LABELS).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">優先度</label>
                <select
                  value={project.priority}
                  onChange={(e) =>
                    setProject({ ...project, priority: e.target.value as Priority })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  {Object.entries(PRIORITY_LABELS).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">開始日</label>
                <input
                  type="date"
                  value={project.startDate}
                  onChange={(e) => setProject({ ...project, startDate: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">期限</label>
                <input
                  type="date"
                  value={project.dueDate}
                  onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">カラー</label>
              <div className="flex gap-2">
                {PROJECT_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setProject({ ...project, color: c })}
                    className={`w-7 h-7 rounded-full transition-all ${
                      project.color === c ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : ""
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                進捗 (タスクがない場合の手動設定): {project.progress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={project.progress}
                onChange={(e) =>
                  setProject({ ...project, progress: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>
          </div>
        ) : (
          <>
            {project.description && (
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-xs text-gray-400">ステータス</span>
                <div className="font-medium">{STATUS_LABELS[project.status]}</div>
              </div>
              <div>
                <span className="text-xs text-gray-400">優先度</span>
                <div className="font-medium">{PRIORITY_LABELS[project.priority]}</div>
              </div>
              <div>
                <span className="text-xs text-gray-400">開始日</span>
                <div className="font-medium">{project.startDate || "—"}</div>
              </div>
              <div>
                <span className="text-xs text-gray-400">期限</span>
                <div className="font-medium">{project.dueDate || "—"}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>進捗</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: `${project.progress}%`,
                    backgroundColor: project.color,
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tasks Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">
            タスク
            {project.tasks.length > 0 && (
              <span className="text-sm text-gray-400 ml-2">
                {tasksDone}/{project.tasks.length}
              </span>
            )}
          </h2>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="新しいタスクを追加..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            追加
          </button>
        </div>

        {project.tasks.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            タスクがまだありません
          </p>
        ) : (
          <div className="space-y-2">
            {(["todo", "in_progress", "done"] as TaskStatus[]).map((status) => {
              const tasks = project.tasks.filter((t) => t.status === status);
              if (tasks.length === 0) return null;
              return (
                <div key={status}>
                  <div className="text-xs text-gray-400 uppercase mb-1 mt-3">
                    {TASK_STATUS_LABELS[status]} ({tasks.length})
                  </div>
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 group"
                    >
                      <select
                        value={task.status}
                        onChange={(e) =>
                          updateTaskStatus(task.id, e.target.value as TaskStatus)
                        }
                        className={`text-xs px-2 py-0.5 rounded border ${
                          task.status === "done"
                            ? "bg-green-50 border-green-200 text-green-700"
                            : task.status === "in_progress"
                            ? "bg-blue-50 border-blue-200 text-blue-700"
                            : "bg-gray-50 border-gray-200 text-gray-600"
                        }`}
                      >
                        {Object.entries(TASK_STATUS_LABELS).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                      <span
                        className={`flex-1 text-sm ${
                          task.status === "done" ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {task.title}
                      </span>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Memo Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold mb-3">メモ</h2>
        <textarea
          value={project.memo}
          onChange={(e) => {
            const updated = { ...project, memo: e.target.value };
            setProject(updated);
            save(updated);
          }}
          rows={6}
          placeholder="自由にメモを記入..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}
