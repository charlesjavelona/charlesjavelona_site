import Image from "next/image"
import Link from "next/link"
import { Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <Snowflake className="h-4 w-4" />
            <span className="text-lg font-medium">floguo</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button variant="ghost" size="sm" className="font-mono" asChild>
                  <Link href="/work">WORK</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" size="sm" className="font-mono" asChild>
                  <Link href="/about">ABOUT</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" size="sm" className="font-mono" asChild>
                  <Link href="https://twitter.com">TWITTER</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" size="sm" className="font-mono" asChild>
                  <Link href="https://github.com">GITHUB</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="container pt-32">
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.1] max-w-3xl mb-16">
          Independent creative technologist pursuing play with pixels.
        </h1>

        <section className="mb-24 space-y-6">
          <h2 className="text-sm font-mono text-muted-foreground">CURRENTLY</h2>
          <div className="space-y-2 text-lg">
            <p>Collaborating with companies from pre-seed to post-IPO.</p>
            <p>
              Studying{" "}
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="#">design and information systems</Link>
              </Button>{" "}
              at the University of Toronto.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="border-0 overflow-hidden">
              <AspectRatio ratio={1}>
                <Image
                  src="https://sjc.microlink.io/pkzANDXoNPDAC-WUpc_sOyED-baxqS-m9dQ1x96J_xypVgiXQ1SgH5q1WQDM4eSdSLW2wEdNIq35Kg_AAuOgBQ.jpeg"
                  alt={`Portfolio piece ${i}`}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </AspectRatio>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}

