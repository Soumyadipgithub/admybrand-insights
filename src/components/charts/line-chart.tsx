"use client"

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface LineChartProps {
  data: any[]
  title: string
  description?: string
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-bold text-muted-foreground">
              {formatCurrency(payload[0].value)}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export function LineChart({ data, title, description }: LineChartProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        {description && <CardDescription className="text-gray-600">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="glowEffect" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5}/>
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.5}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: "#6b7280" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: "#6b7280" }}
                tickFormatter={(value) => `$${value / 1000}k`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                content={<CustomTooltip />}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  padding: '12px',
                  color: '#374151'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#glowEffect)" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}