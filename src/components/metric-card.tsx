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
    <Card className={cn("relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1", className)} style={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" style={{ color: 'hsl(var(--foreground))' }}>{metric.value}</div>
        <div className="flex items-center text-xs text-muted-foreground mt-2">
          {metric.trend === "up" ? (
            <ArrowUpIcon className="mr-1 h-3 w-3 text-green-500" />
          ) : (
            <ArrowDownIcon className="mr-1 h-3 w-3 text-red-500" />
          )}
          <span className={cn(
            "font-medium",
            metric.trend === "up" ? "text-green-500" : "text-red-500"
          )}>
            {Math.abs(metric.change)}%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
    </Card>
  )
}