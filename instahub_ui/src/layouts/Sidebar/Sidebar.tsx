"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, House, Plus, Search, Send, SquarePlay } from "lucide-react";
import { InstagramIcon } from "@/assets/icon";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Reels",
    href: "/reels",
    icon: SquarePlay,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: Send,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Heart,
  },
  {
    label: "Create",
    href: "/create",
    icon: Plus,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="group/sidebar fixed top-0 left-0 z-50 flex h-screen w-18 flex-col overflow-hidden px-3 py-6 text-(--text-white) transition-[width] duration-300 ease-in-out hover:w-64">
      {/* Logo */}
      <Link
        href="/"
        className="flex h-13 w-13 items-center justify-center rounded-[10px] transition-colors duration-200 hover:bg-(--hover-color)"
      >
        <InstagramIcon size={24} />
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 items-center">
        <ul className="flex w-full flex-col gap-1">
          {menuItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex h-13 w-full items-center gap-4 rounded-[10px] px-3 transition-colors duration-200 hover:bg-(--hover-color) ${
                    active ? "bg-(--hover-color)" : ""
                  }`}
                >
                  <Icon size={27} className="shrink-0" />

                  <span className="translate-x-2 text-base whitespace-nowrap opacity-0 transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}

          {/* Profile */}
          <li>
            <Link
              href="/profile"
              className={`flex h-13 w-full items-center gap-4 rounded-[10px] px-3 transition-colors duration-200 hover:bg-(--hover-color) ${
                isActive("/profile") ? "bg-(--hover-color)" : ""
              }`}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1GqxHajibRl6Ote8SwM9DhdYNN2NuWLSwXP2pn8F-fpKxd5S1sLWQU&s=10"
                alt="Profile"
                width={27}
                height={27}
                className={`shrink-0 rounded-full object-cover ${
                  isActive("/profile") ? "ring-2 ring-(--text-white)" : ""
                }`}
              />

              <span className="translate-x-2 text-base whitespace-nowrap opacity-0 transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100">
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
