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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search insights..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-200"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
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