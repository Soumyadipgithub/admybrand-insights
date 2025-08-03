"use client"

import * as React from "react"
import { MetricCard } from "@/components/metric-card"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { DataTable } from "@/components/data-table"
import { MetricCardSkeleton, ChartSkeleton, TableSkeleton } from "@/components/loading-skeleton"
import { metrics, revenueData, campaignData, trafficData, tableData } from "@/lib/mock-data"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening with your campaigns today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <MetricCardSkeleton key={i} />
            ))
          : metrics.map((metric, index) => (
              <div
                key={metric.title}
                className="animate-in slide-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MetricCard metric={metric} />
              </div>
            ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <>
            <div className="lg:col-span-2">
              <ChartSkeleton />
            </div>
            <ChartSkeleton />
          </>
        ) : (
          <>
            <div
              className="lg:col-span-2 animate-in slide-in duration-500"
              style={{ animationDelay: "400ms" }}
            >
              <LineChart
                data={revenueData}
                title="Revenue Trend"
                description="Monthly revenue performance over the last year"
              />
            </div>
            <div
              className="animate-in slide-in duration-500"
              style={{ animationDelay: "500ms" }}
            >
              <DonutChart
                data={trafficData}
                title="Traffic Sources"
                description="Distribution of traffic by source"
              />
            </div>
          </>
        )}
      </div>

      {/* Bar Chart */}
      <div className="grid gap-6">
        {isLoading ? (
          <ChartSkeleton />
        ) : (
          <div
            className="animate-in slide-in duration-500"
            style={{ animationDelay: "600ms" }}
          >
            <BarChart
              data={campaignData}
              title="Campaign Performance"
              description="Conversion rates by campaign type"
            />
          </div>
        )}
      </div>

      {/* Data Table */}
      <div className="grid gap-6">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <div
            className="animate-in slide-in duration-500"
            style={{ animationDelay: "700ms" }}
          >
            <DataTable data={tableData} />
          </div>
        )}
      </div>
    </div>
  )
}