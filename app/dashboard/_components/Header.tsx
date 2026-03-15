"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white/80 px-6 backdrop-blur">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-bold">
          V
        </div>
        <span className="text-lg font-semibold tracking-tight text-gray-900">
          VidVerSea
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <Link
          href="/dashboard"
          className={clsx(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
            pathname === "/dashboard"
              ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Dashboard
        </Link>

        {/* User */}
        <div className="rounded-full border p-0.5">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
