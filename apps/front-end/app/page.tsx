import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { StyleSwitcher } from "@/components/style-switcher"
import DashboardPage from "@/app/examples/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative pb-10">
      <StyleSwitcher />

      <section className="hidden md:block">
        <div className="mt-4 overflow-hidden rounded-lg border bg-background shadow-xl">
          <DashboardPage />
        </div>
      </section>
    </div>
  )
}
