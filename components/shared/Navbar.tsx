"use client";

import { navbarLists, navbarListsIcons } from "@/constants";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex-between container h-[108px]">
      <Link
        href="/"
        className="font-causten text-4xl font-semibold text-light-400"
      >
        Logo
      </Link>
      <div className="flex-between gap-10">
        {navbarLists.map((list) => {
          const isActive = pathname === list.route;

          return (
            <Link
              href={list.route}
              key={list.label}
              className={`${
                isActive
                  ? "text-lg  font-bold text-light-400"
                  : "text-lg font-medium text-light-500"
              }`}
            >
              {list.label}
            </Link>
          );
        })}
      </div>

      <Search />
      <div className="flex-between gap-3">
        {navbarListsIcons.map((listIcon) => (
          <Link
            href={listIcon.route}
            key={listIcon.label}
            className="rounded-lg bg-light-850 p-3"
          >
            <Image
              src={listIcon.iconImage}
              alt={listIcon.label}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
