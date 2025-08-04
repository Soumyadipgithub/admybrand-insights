"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Users, TrendingUp, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { MetricData } from "@/lib/mock-data"

const iconMap = {
  DollarSign: DollarSign,
  Users: Users,
  TrendingUp: TrendingUp,
  Activity: Activity,
}

interface MetricCardProps {
  metric: MetricData
  className?: string
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap]
  
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-black/40 backdrop-blur-xl border border-cyan-500/30",
      className
    )}>
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <CardTitle className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200">
          {metric.title}
        </CardTitle>
        <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300 border border-cyan-500/30">
          <Icon className="h-4 w-4 text-cyan-400" />
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-cyan-100 mb-3 group-hover:text-cyan-50 transition-colors duration-200">
          {metric.value}
        </div>
        <div className="flex items-center text-sm">
          {metric.trend === "up" ? (
            <div className="flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">+{metric.change.toFixed(1)}%</span>
            </div>
          ) : (
            <div className="flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
              <ArrowDownIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">-{Math.abs(metric.change).toFixed(1)}%</span>
            </div>
          )}
          <span className="ml-2 text-gray-400 text-xs">from last month</span>
        </div>
      </CardContent>
      
      {/* Floating Glow Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse" />
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
    </Card>
  )
}