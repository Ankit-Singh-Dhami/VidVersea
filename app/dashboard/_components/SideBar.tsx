"use client";

import { LayoutDashboard, PlusCircle, Zap, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r bg-white px-4 py-6">
      <nav className="flex flex-col gap-1">
        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="/dashboard"
          active={pathname === "/dashboard"}
        />

        <SidebarItem
          icon={PlusCircle}
          label="Create New"
          href="/dashboard/create-new"
          active={pathname === "/dashboard/create-new"}
        />

        <SidebarItem
          icon={Zap}
          label="Upgrade"
          href="/upgrade"
          active={pathname === "/dashboard/upgrade"}
          highlight
        />

        <SidebarItem
          icon={User}
          label="Account"
          href="/account"
          active={pathname === "/dashboard/account"}
        />
      </nav>
    </aside>
  );
};

export default SideBar;

/* ---------- Sidebar Item ---------- */

const SidebarItem = ({
  icon: Icon,
  label,
  href,
  active,
  highlight = false,
}: {
  icon: any;
  label: string;
  href: string;
  active?: boolean;
  highlight?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
        active
          ? "bg-indigo-100 text-indigo-800" // Active background & text
          : highlight
          ? "text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700" // Highlighted item
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800" // Default
      )}
    >
      {/* Active indicator */}
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r bg-indigo-600" />
      )}

      {/* Icon */}
      <Icon
        size={20}
        className={clsx(
          "transition-transform duration-200 group-hover:scale-110",
          active
            ? "text-indigo-800"
            : highlight
            ? "text-indigo-600 group-hover:text-indigo-700"
            : "text-gray-500 group-hover:text-gray-700"
        )}
      />

      {/* Label */}
      <span className="transition-colors duration-200">{label}</span>
    </Link>
  );
};
