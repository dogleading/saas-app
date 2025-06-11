"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Companions",
    href: "/companions",
  },
  {
    label: "My Journey",
    href: "/my-journey",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`${
            isActive(item.href)
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
