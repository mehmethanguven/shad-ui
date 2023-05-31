"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import Logo from "./logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="w-6 h-6" /> */}
        <Logo />
        <span className="hidden font-semibold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/examples/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/examples/dashboard" || pathname === "/"
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/examples/cards"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples/cards")
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Cards
        </Link>
        <Link
          href="/examples/tasks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples/tasks")
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Tasks
        </Link>
        <Link
          href="/examples/forms"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples/forms")
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Forms
        </Link>
        <Link
          href="/examples/music"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples/music")
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Music
        </Link>
        <Link
          href="/examples/authentication"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples/authentication")
              ? "font-bold text-foreground"
              : "text-foreground/60"
          )}
        >
          Authentication
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
