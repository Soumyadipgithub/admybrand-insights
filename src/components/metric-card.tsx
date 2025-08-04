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
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200",
      className
    )}>
      {/* Subtle Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <CardTitle className="text-sm font-semibold text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
          {metric.title}
        </CardTitle>
        <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-all duration-200">
          <Icon className="h-4 w-4 text-blue-600" />
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200">
          {metric.value}
        </div>
        <div className="flex items-center text-sm">
          {metric.trend === "up" ? (
            <div className="flex items-center px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">+{metric.change.toFixed(1)}%</span>
            </div>
          ) : (
            <div className="flex items-center px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
              <ArrowDownIcon className="mr-1 h-3 w-3" />
              <span className="font-medium">-{Math.abs(metric.change).toFixed(1)}%</span>
            </div>
          )}
          <span className="ml-2 text-gray-500 text-xs">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}