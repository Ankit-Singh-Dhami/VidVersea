"use client";

import EmptyState from "./_components/EmptyState";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-6">
      {" "}
      {/* Removed top/bottom padding, keeping horizontal padding */}
      {/* Header: Dashboard title + Create button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <Link
          href="/dashboard/create-new"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 transition-colors"
        >
          Create
        </Link>
      </div>
      {/* Content / Empty State */}
      <EmptyState />
    </div>
  );
}
