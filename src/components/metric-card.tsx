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
      "group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0",
      className
    )}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <CardTitle className="text-sm font-semibold text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
          {metric.title}
        </CardTitle>
        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
          <Icon className="h-4 w-4 text-blue-600" />
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-200">
          {metric.value}
        </div>
        <div className="flex items-center text-sm">
          {metric.trend === "up" ? (
            <div className="flex items-center px-2 py-1 rounded-full bg-green-50 text-green-700">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">+{metric.change.toFixed(1)}%</span>
            </div>
          ) : (
            <div className="flex items-center px-2 py-1 rounded-full bg-red-50 text-red-700">
              <ArrowDownIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">-{Math.abs(metric.change).toFixed(1)}%</span>
            </div>
          )}
          <span className="ml-2 text-slate-500 text-xs">from last month</span>
        </div>
      </CardContent>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-lg group-hover:blur-xl transition-all duration-500" />
    </Card>
  )
}