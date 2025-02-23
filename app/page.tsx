'use client'

import Link from "next/link"
import { Variable } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react"
import PageSparkles from "@/components/PageSparkle"
import WalkingRobot from "@/components/WalkingRobot"


export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSparkles />
      <WalkingRobot />
      {/* Cosmic dust following mouse */}
      <div 
        className="pointer-events-none fixed z-40 h-[300px] w-[300px] rounded-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-xl"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
          transform: 'translate(0, 0)',
          transition: 'all 0.2s ease',
        }}
      />
      {/* Add noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 h-screen" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.4,
        }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4">
          <div className="ml-[10%] flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-1 text-primary">
              <Variable className="h-4 w-4 animate-spin-slow" />
              <span className="text-lg font-bold">Charles Javelona</span>
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
        </div>
      </header>

      <main className="container pt-32 px-4">
        <div className="ml-[10%] max-w-4xl">
          <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.1] max-w-3xl mb-16">
            Building at the intersection of research and applied science
          </h1>

          <section className="mb-24">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-mono text-muted-foreground">CURRENTLY:</h2>
              <div className="text-lg">
                <p className="font-mono">
                  Accelerating the development of AI at <Link href="#" className="text-primary">Cosmic</Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-mono text-muted-foreground">PAST:</h2>
              <div className="text-lg">
                <p className="font-mono">
                  Accelerated robot adoption at <Link href="#" className="text-primary hover:underline transition-colors duration-200">TinyMile Robotics</Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-mono text-muted-foreground">READING:</h2>
              <div className="text-lg">
                <p className="font-mono">
                  <Link href="#" className="text-primary hover:underline transition-colors duration-200">"AI Engineering by Chip Huyen" & "Infrastructure as Code" by Kief Morris</Link>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

