"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { TrendingUp, Users, DollarSign, Activity, ArrowUp, ArrowDown } from "lucide-react"

// New mock data matching the image style
const newMetrics = [
  {
    title: "New Deal Amount",
    value: "$9,125,100",
    change: 12.5,
    trend: "up" as const,
    icon: DollarSign,
    color: "text-blue-600"
  },
  {
    title: "Deals Won",
    value: "34,345",
    change: 8.2,
    trend: "up" as const,
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "New Customers",
    value: "1,234",
    change: 15.3,
    trend: "up" as const,
    icon: Users,
    color: "text-purple-600"
  },
  {
    title: "Conversion Rate",
    value: "23.5%",
    change: 4.3,
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

const customerData = [
  { name: "New Leads", value: 45 },
  { name: "Engaged", value: 30 },
  { name: "Converted", value: 20 },
  { name: "Churned", value: 5 }
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {newMetrics.map((metric, index) => (
          <Card key={metric.title} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
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
                  +{metric.change}%
                </span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sales Chart */}
        <div className="lg:col-span-2">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Sales Performance</CardTitle>
              <p className="text-sm text-gray-600">Monthly sales trends</p>
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

        {/* Customer Engagement */}
        <div>
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Customer Engagement</CardTitle>
              <p className="text-sm text-gray-600">Customer lifecycle distribution</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <DonutChart
                  data={customerData}
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
        {/* Customer Satisfaction */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Customer Satisfaction</CardTitle>
            <p className="text-sm text-gray-600">Overall satisfaction score</p>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-sm text-gray-600">out of 5.0</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Top Performers</CardTitle>
            <p className="text-sm text-gray-600">Best performing campaigns</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Social Media Campaign", value: "$2.4M", growth: "+15%" },
                { name: "Email Marketing", value: "$1.8M", growth: "+12%" },
                { name: "Search Ads", value: "$1.2M", growth: "+8%" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.value}</div>
                  </div>
                  <div className="text-green-500 font-medium">{item.growth}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}