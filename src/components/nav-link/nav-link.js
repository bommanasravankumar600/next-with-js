"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "../main-header/main-header.module.css";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <div>
      <Link
        className={path.startsWith(`/${href}`) ? classes.active : undefined}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLink;
