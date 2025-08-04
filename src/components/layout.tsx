"use client"

import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping" />
      </div>

      {/* Header */}
      <header className="backdrop-blur-xl bg-black/20 border-b border-cyan-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  ADmyBRAND Insights
                </h2>
              </div>
              <nav className="hidden md:flex space-x-1">
                {[
                  { name: "Dashboard", href: "#", active: true },
                  { name: "Analytics", href: "#" },
                  { name: "Campaigns", href: "#" },
                  { name: "Reports", href: "#" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      item.active
                        ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/30 border border-cyan-500/30"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" />
                <input
                  type="search"
                  placeholder="Search insights..."
                  className="pl-10 pr-4 py-2.5 w-64 border border-cyan-500/30 rounded-xl text-sm bg-black/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-cyan-100 placeholder-cyan-300/50 transition-all duration-300"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative hover:bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                <Bell className="h-5 w-5 text-cyan-400" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] font-medium text-white flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
                  3
                </span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  )
}