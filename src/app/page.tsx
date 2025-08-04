"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { DataTable } from "@/components/data-table"
import { DateRangePicker } from "@/components/date-range-picker"
import { MetricCard } from "@/components/metric-card"
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
    icon: "DollarSign",
    color: "text-blue-600"
  },
  {
    title: "Active Users",
    value: "34,345",
    change: 8.2,
    trend: "up" as const,
    icon: "Users",
    color: "text-green-600"
  },
  {
    title: "Conversion Rate",
    value: "23.5%",
    change: 4.3,
    trend: "up" as const,
    icon: "TrendingUp",
    color: "text-purple-600"
  },
  {
    title: "Growth %",
    value: "15.7%",
    change: 6.8,
    trend: "up" as const,
    icon: "Activity",
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Data into Actionable Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered analytics dashboard that makes data visualization simple for everyone. 
            Create professional, interactive dashboards without technical expertise.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} metric={metric} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleRefresh}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
          >
            <RefreshCw className={`h-5 w-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Generate Dashboard
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('csv')}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-medium"
          >
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </Button>
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

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Visualization</h3>
            <p className="text-gray-600">Automatically selects the most appropriate visualization types for different data sets based on data structure and best practices.</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Connectivity</h3>
            <p className="text-gray-600">Connect to a wide range of data sources including popular database systems, CSV uploads, and API integrations.</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">Dashboards automatically refresh with new data without manual intervention on your preferred schedule.</p>
          </div>
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
            <Card className="bg-white border border-gray-200 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">User Demographics</CardTitle>
                <p className="text-gray-600">Age distribution of users</p>
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
          <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">Revenue by Channel</CardTitle>
              <p className="text-gray-600">Revenue distribution by marketing channel</p>
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
          <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">Campaign Performance</CardTitle>
              <p className="text-gray-600">Top performing campaigns</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Social Media Campaign", value: "$2.4M", growth: "+15%", color: "bg-blue-500" },
                  { name: "Email Marketing", value: "$1.8M", growth: "+12%", color: "bg-green-500" },
                  { name: "Search Ads", value: "$1.2M", growth: "+8%", color: "bg-purple-500" },
                  { name: "Content Marketing", value: "$890K", growth: "+6%", color: "bg-orange-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${item.color} mr-4`}></div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
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
        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Campaign Data</CardTitle>
            <p className="text-gray-600">Detailed campaign performance with sorting and filtering</p>
          </CardHeader>
          <CardContent>
            <DataTable data={tableData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}