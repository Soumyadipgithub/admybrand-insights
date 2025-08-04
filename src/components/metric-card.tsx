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
      "bg-white border border-gray-200 p-6",
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{metric.title}</p>
          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
        </div>
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {metric.trend === "up" ? (
          <div className="flex items-center text-green-600">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+{metric.change.toFixed(1)}%</span>
          </div>
        ) : (
          <div className="flex items-center text-red-600">
            <ArrowDownIcon className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">-{Math.abs(metric.change).toFixed(1)}%</span>
          </div>
        )}
        <span className="ml-2 text-sm text-gray-500">from last month</span>
      </div>
    </Card>
  )
}