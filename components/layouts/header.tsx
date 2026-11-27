import React from "react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

const menus = [
  {
    title: "Home",
    link: "https://github.com/mui/base-ui",
  },
  {
    title: "About Me",
    link: "https://github.com/mui/base-ui",
  },
  {
    title: "Works",
    link: "https://github.com/mui/base-ui",
  },
  {
    title: "Services",
    link: "https://github.com/mui/base-ui",
  },
];

export default function Header() {
  return (
    <nav className=" bg-old-news text-gray-500">
      <div className=" container flex items-center justify-between min-h-20">
        <h3 className=" text-midnight font-bold text-lg lg:text-xl">
          <Link href={"/"}>P.</Link>
        </h3>
        <NavigationMenu.Root className={" hidden lg:block"}>
          <NavigationMenu.List className="relative flex gap-5">
            {menus.map((data) => (
              <NavigationMenu.Item
                key={data.title}
                className={" group hover:text-midnight"}
              >
                <Link href={data.link}>{data.title}</Link>
                <div className=" duration-500 group-hover:w-full h-0.5 w-0 bg-cyan-500"></div>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <MobileMenu />
      </div>
    </nav>
  );
}
