export type ProjectStatus = "not_started" | "in_progress" | "on_hold" | "completed" | "cancelled";
export type Priority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate?: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: Priority;
  progress: number; // 0-100
  startDate: string;
  dueDate: string;
  tasks: Task[];
  memo: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  not_started: "未着手",
  in_progress: "進行中",
  on_hold: "保留",
  completed: "完了",
  cancelled: "中止",
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "低",
  medium: "中",
  high: "高",
  urgent: "緊急",
};

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "未着手",
  in_progress: "作業中",
  done: "完了",
};

export const PROJECT_COLORS = [
  "#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6",
  "#EC4899", "#06B6D4", "#F97316", "#6366F1", "#14B8A6",
];
