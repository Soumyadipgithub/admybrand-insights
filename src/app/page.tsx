"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { DataTable } from "@/components/data-table"
import { DateRangePicker } from "@/components/date-range-picker"
import { MetricCardSkeleton, ChartSkeleton, TableSkeleton, FilterSkeleton } from "@/components/loading-skeleton"
import { TrendingUp, Users, DollarSign, Activity, ArrowUp, ArrowDown, Download, Filter, RefreshCw } from "lucide-react"
import { DateRange } from "react-day-picker"
import { exportToCSV, exportToPDF } from "@/components/export-utils"

// Enhanced mock data with real-time simulation
const initialMetrics = [
  {
    title: "Total Revenue",
    value: "$9,125,100",
    change: 12.5,
    trend: "up" as const,
    icon: DollarSign,
    color: "text-blue-600"
  },
  {
    title: "Active Users",
    value: "34,345",
    change: 8.2,
    trend: "up" as const,
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Conversion Rate",
    value: "23.5%",
    change: 4.3,
    trend: "up" as const,
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    title: "Growth %",
    value: "15.7%",
    change: 6.8,
    trend: "up" as const,
    icon: Activity,
    color: "text-orange-600"
  }
]

const salesData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1800 },
  { name: "Mar", value: 1400 },
  { name: "Apr", value: 2200 },
  { name: "May", value: 1900 },
  { name: "Jun", value: 2800 },
  { name: "Jul", value: 2400 },
  { name: "Aug", value: 3200 },
  { name: "Sep", value: 2900 },
  { name: "Oct", value: 3600 },
  { name: "Nov", value: 3400 },
  { name: "Dec", value: 4200 }
]

const revenueByChannel = [
  { name: "Social Media", value: 45 },
  { name: "Email Marketing", value: 25 },
  { name: "Search Ads", value: 20 },
  { name: "Direct Traffic", value: 10 }
]

const userDemographics = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 }
]

const tableData = [
  { id: 1, campaign: "Summer Sale", revenue: "$125,000", conversions: 234, ctr: "3.2%", status: "Active" },
  { id: 2, campaign: "Holiday Special", revenue: "$89,500", conversions: 156, ctr: "2.8%", status: "Active" },
  { id: 3, campaign: "New Product Launch", revenue: "$203,000", conversions: 445, ctr: "4.1%", status: "Active" },
  { id: 4, campaign: "Email Newsletter", revenue: "$67,200", conversions: 123, ctr: "2.1%", status: "Paused" },
  { id: 5, campaign: "Social Media Ads", revenue: "$156,800", conversions: 289, ctr: "3.5%", status: "Active" }
]

export default function DashboardPage() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
  const [isLoading, setIsLoading] = React.useState(false)
  const [currentMetrics, setCurrentMetrics] = React.useState(initialMetrics)

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => 
        prev.map(metric => ({
          ...metric,
          value: metric.title === "Total Revenue" 
            ? `$${(Math.random() * 1000000 + 8000000).toFixed(0)}`
            : metric.title === "Active Users"
            ? `${Math.floor(Math.random() * 5000 + 30000)}`
            : metric.value,
          change: Math.random() * 20 + 5
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleExport = (type: 'csv' | 'pdf') => {
    if (type === 'csv') {
      exportToCSV(tableData, 'dashboard-data')
    } else {
      exportToPDF(tableData, 'dashboard-report', 'ADmyBRAND Insights Dashboard Report')
    }
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header with Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {isLoading ? (
            <FilterSkeleton />
          ) : (
            <>
              <DateRangePicker
                date={dateRange}
                onDateChange={setDateRange}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport('csv')}
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExport('pdf')}
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <MetricCardSkeleton key={index} />
          ))
        ) : (
          currentMetrics.map((metric, index) => (
            <Card key={metric.title} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="flex items-center text-sm">
                  {metric.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`font-medium ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    +{metric.change.toFixed(1)}%
                  </span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Revenue Trend */}
        <div className="lg:col-span-2">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Revenue Trend</CardTitle>
              <p className="text-sm text-gray-600">Monthly revenue performance over time</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart
                  data={salesData}
                  title=""
                  description=""
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Demographics */}
        <div>
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">User Demographics</CardTitle>
              <p className="text-sm text-gray-600">Age distribution of users</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <DonutChart
                  data={userDemographics}
                  title=""
                  description=""
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue by Channel */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Revenue by Channel</CardTitle>
            <p className="text-sm text-gray-600">Revenue distribution by marketing channel</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <BarChart
                data={revenueByChannel}
                title=""
                description=""
              />
            </div>
          </CardContent>
        </Card>

        {/* Campaign Performance */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Campaign Performance</CardTitle>
            <p className="text-sm text-gray-600">Top performing campaigns</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Social Media Campaign", value: "$2.4M", growth: "+15%", color: "bg-blue-500" },
                { name: "Email Marketing", value: "$1.8M", growth: "+12%", color: "bg-green-500" },
                { name: "Search Ads", value: "$1.2M", growth: "+8%", color: "bg-purple-500" },
                { name: "Content Marketing", value: "$890K", growth: "+6%", color: "bg-orange-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.value}</div>
                    </div>
                  </div>
                  <div className="text-green-500 font-medium">{item.growth}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Campaign Data</CardTitle>
          <p className="text-sm text-gray-600">Detailed campaign performance with sorting and filtering</p>
        </CardHeader>
        <CardContent>
          <DataTable data={tableData} />
        </CardContent>
      </Card>
    </div>
  )
}