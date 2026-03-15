"use client";

import Link from "next/link";
import { Video } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Icon */}
      <div className="mb-4 rounded-full bg-indigo-100 p-4 text-indigo-600">
        <Video size={40} />
      </div>

      {/* Message */}
      <h2 className="mb-2 text-xl font-semibold text-gray-900">
        You don’t have any videos yet
      </h2>
      <p className="mb-6 text-gray-500">
        Start creating your first video to share it with the world.
      </p>

      {/* Create Button */}
      <Link
        href="/dashboard/create-new"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-700 transition-colors"
      >
        Create New Video
      </Link>
    </div>
  );
};

export default EmptyState;
