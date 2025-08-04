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
import { TableData } from "@/lib/mock-data"

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
  {
    id: "1",
    campaign: "Summer Sale",
    status: "active" as const,
    budget: 150000,
    spent: 125000,
    impressions: 45000,
    clicks: 2340,
    conversions: 234,
    ctr: 5.2,
    roi: 83.3,
    startDate: "2024-06-01",
    endDate: "2024-08-31"
  },
  {
    id: "2",
    campaign: "Holiday Special",
    status: "active" as const,
    budget: 100000,
    spent: 89500,
    impressions: 32000,
    clicks: 1560,
    conversions: 156,
    ctr: 4.9,
    roi: 89.5,
    startDate: "2024-11-01",
    endDate: "2024-12-31"
  },
  {
    id: "3",
    campaign: "New Product Launch",
    status: "active" as const,
    budget: 250000,
    spent: 203000,
    impressions: 78000,
    clicks: 4450,
    conversions: 445,
    ctr: 5.7,
    roi: 81.2,
    startDate: "2024-09-01",
    endDate: "2024-11-30"
  },
  {
    id: "4",
    campaign: "Email Newsletter",
    status: "paused" as const,
    budget: 80000,
    spent: 67200,
    impressions: 25000,
    clicks: 1230,
    conversions: 123,
    ctr: 4.9,
    roi: 84.0,
    startDate: "2024-07-01",
    endDate: "2024-09-30"
  },
  {
    id: "5",
    campaign: "Social Media Ads",
    status: "active" as const,
    budget: 180000,
    spent: 156800,
    impressions: 55000,
    clicks: 2890,
    conversions: 289,
    ctr: 5.3,
    roi: 87.1,
    startDate: "2024-08-01",
    endDate: "2024-10-31"
  }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
              Dashboard Overview
            </h1>
            <p className="text-slate-600 text-lg">Welcome back! Here's what's happening with your campaigns today.</p>
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
                  className="bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 rounded-xl"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('csv')}
                  className="bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 rounded-xl"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('pdf')}
                  className="bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 rounded-xl"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <MetricCardSkeleton key={index} />
            ))
          ) : (
            currentMetrics.map((metric, index) => (
              <MetricCard key={metric.title} metric={metric} />
            ))
          )}
        </div>

        {/* Charts Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Revenue Trend */}
          <div className="lg:col-span-2">
            <LineChart
              data={salesData}
              title="Revenue Trend"
              description="Monthly revenue performance over time"
            />
          </div>

          {/* User Demographics */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">User Demographics</CardTitle>
                <p className="text-slate-600">Age distribution of users</p>
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
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Revenue by Channel */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-slate-900">Revenue by Channel</CardTitle>
              <p className="text-slate-600">Revenue distribution by marketing channel</p>
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
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-slate-900">Campaign Performance</CardTitle>
              <p className="text-slate-600">Top performing campaigns</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Social Media Campaign", value: "$2.4M", growth: "+15%", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                  { name: "Email Marketing", value: "$1.8M", growth: "+12%", color: "bg-gradient-to-r from-green-500 to-green-600" },
                  { name: "Search Ads", value: "$1.2M", growth: "+8%", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                  { name: "Content Marketing", value: "$890K", growth: "+6%", color: "bg-gradient-to-r from-orange-500 to-orange-600" }
                ].map((item, index) => (
                  <div key={index} className="group flex items-center justify-between p-4 bg-slate-50/50 rounded-xl hover:bg-slate-100/50 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${item.color} mr-4 shadow-sm`}></div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors">{item.name}</div>
                        <div className="text-sm text-slate-600">{item.value}</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">{item.growth}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-slate-900">Campaign Data</CardTitle>
            <p className="text-slate-600">Detailed campaign performance with sorting and filtering</p>
          </CardHeader>
          <CardContent>
            <DataTable data={tableData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}