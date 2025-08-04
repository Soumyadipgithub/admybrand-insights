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
    <Card className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-cyan-100">{title}</CardTitle>
        {description && <CardDescription className="text-cyan-300">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="glowEffect" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.5}/>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.5}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#06b6d4" strokeOpacity={0.2} />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: "#06b6d4" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: "#06b6d4" }}
                tickFormatter={(value) => `$${value / 1000}k`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                content={<CustomTooltip />}
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid #06b6d4',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  padding: '12px',
                  color: '#06b6d4'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#glowEffect)" 
                strokeWidth={4}
                dot={{ fill: '#06b6d4', strokeWidth: 3, r: 6, filter: 'drop-shadow(0 0 5px #06b6d4)' }}
                activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}