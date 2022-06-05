import Link from "next/link";
import React from "react";

const menuItems = [
  {
    text: "Projects",
    icon: null,
    href: "#",
  },
  {
    text: "Issues",
    icon: null,
    href: "#",
  },
  {
    text: "Alerts",
    icon: null,
    href: "#",
  },
  {
    text: "Users",
    icon: null,
    href: "#",
  },
  {
    text: "Settings",
    icon: null,
    href: "#",
  },
];

export const SidebarNavigation = () => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ text, href }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href={""}>Support</Link>
        </li>
        <li>
          <Link href={""}>Support</Link>
        </li>
      </ul>
    </nav>
  );
};
