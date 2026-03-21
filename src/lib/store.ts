"use client";

import { Project } from "./types";

const STORAGE_KEY = "peakwell-projects";

export function loadProjects(): Project[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function createProject(partial: Partial<Project>): Project {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    name: partial.name || "新規プロジェクト",
    description: partial.description || "",
    status: partial.status || "not_started",
    priority: partial.priority || "medium",
    progress: partial.progress || 0,
    startDate: partial.startDate || now.split("T")[0],
    dueDate: partial.dueDate || "",
    tasks: partial.tasks || [],
    memo: partial.memo || "",
    color: partial.color || "#3B82F6",
    createdAt: now,
    updatedAt: now,
  };
}
