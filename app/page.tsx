'use client'

import Link from "next/link"
import { Variable, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react"
import PageSparkles from "@/components/PageSparkle"
import WalkingRobot from "@/components/WalkingRobot"

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigationItems = [
    { label: "TWITTER", href: "https://twitter.com/charlesjavelona" },
    { label: "GITHUB", href: "https://github.com/charlesjavelona" },
    { label: "POSTS", href: "/posts" },
    { label: "EXPERIMENTS & PROJECTS", href: "/#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSparkles />
      <WalkingRobot />
      
      {/* Cosmic dust following mouse - hidden on mobile for performance */}
      <div 
        className="pointer-events-none fixed z-40 hidden md:block h-[300px] w-[300px] rounded-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-xl"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
          transform: 'translate(0, 0)',
          transition: 'all 0.2s ease',
        }}
      />
      
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 h-screen" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.4,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 text-primary">
              <Variable className="h-4 w-4 animate-spin-slow" />
              <span className="text-lg font-bold">Charles Javelona</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Button variant="ghost" size="sm" className="font-mono text-xs" asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-background/95 backdrop-blur">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-mono text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto pt-28 sm:pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] tracking-tight max-w-4xl mb-16 sm:mb-20">
            Building at the intersection of research and applied science
          </h1>

          {/* Info Section */}
          <section className="mb-16 sm:mb-24 space-y-6 sm:space-y-8">
            {/* Currently */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <h2 className="text-xs font-mono text-muted-foreground/80 whitespace-nowrap">CURRENTLY:</h2>
              <div className="text-base sm:text-lg">
                <p className="font-mono">
                  Accelerating the development of AI at <Link href="#" className="text-primary hover:underline transition-colors">Cosmic</Link>
                </p>
              </div>
            </div>

            {/* Past */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <h2 className="text-xs font-mono text-muted-foreground/80 whitespace-nowrap">PAST:</h2>
              <div className="text-base sm:text-lg">
                <p className="font-mono">
                  Accelerated robot adoption at <Link href="#" className="text-primary hover:underline transition-colors duration-200">TinyMile Robotics</Link>
                </p>
              </div>
            </div>

            {/* Reading */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <h2 className="text-xs font-mono text-muted-foreground/80 whitespace-nowrap">READING:</h2>
              <div className="text-base sm:text-lg">
                <p className="font-mono">
                  <Link href="#" className="text-primary hover:underline transition-colors duration-200">
                    &ldquo;AI Engineering by Chip Huyen&rdquo; & &ldquo;Infrastructure as Code&rdquo; by Kief Morris
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}