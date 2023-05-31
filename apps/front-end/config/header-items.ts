import { MainNavItem, SidebarNavItem } from "types/nav"

interface HeaderItemsConfig {
  mainNav: MainNavItem[]
}

export const headerItemsConfig: HeaderItemsConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/examples/dashboard",
    },
    {
      title: "Cards",
      href: "/examples/cards",
    },
    {
      title: "Tasks",
      href: "/examples/tasks",
    },
    {
      title: "Forms",
      href: "/examples/forms",
    },
    {
      title: "Music",
      href: "/examples/music",
    },
    {
      title: "Authentication",
      href: "/examples/authentication",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
}
