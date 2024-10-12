"use client";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "../main-header-bg/main-header-bg";
import { usePathname } from "next/navigation";
import NavLink from "../nav-link/nav-link";

function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="a plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="meals">Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href="community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
