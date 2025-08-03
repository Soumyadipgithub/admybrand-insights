// Mock data for ADmyBRAND Insights Dashboard

export interface MetricData {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  growth?: number;
}

export interface TableData {
  id: string;
  campaign: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  roi: number;
  startDate: string;
  endDate: string;
}

// Key Metrics
export const metrics: MetricData[] = [
  {
    title: "Total Revenue",
    value: "$248,512",
    change: 12.5,
    trend: "up",
    icon: "DollarSign"
  },
  {
    title: "Active Users",
    value: "18,423",
    change: 8.2,
    trend: "up",
    icon: "Users"
  },
  {
    title: "Conversions",
    value: "3,847",
    change: -2.4,
    trend: "down",
    icon: "TrendingUp"
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: 4.3,
    trend: "up",
    icon: "Activity"
  }
];

// Line Chart Data - Revenue Over Time
export const revenueData = [
  { name: "Jan", value: 32400 },
  { name: "Feb", value: 38500 },
  { name: "Mar", value: 41200 },
  { name: "Apr", value: 38900 },
  { name: "May", value: 43500 },
  { name: "Jun", value: 45200 },
  { name: "Jul", value: 48100 },
  { name: "Aug", value: 51300 },
  { name: "Sep", value: 49800 },
  { name: "Oct", value: 53400 },
  { name: "Nov", value: 56200 },
  { name: "Dec", value: 58500 }
];

// Bar Chart Data - Campaign Performance
export const campaignData = [
  { name: "Social Media", value: 4200, growth: 15.3 },
  { name: "Email", value: 3800, growth: 8.7 },
  { name: "Search Ads", value: 5600, growth: 22.1 },
  { name: "Display", value: 2900, growth: -5.2 },
  { name: "Video", value: 4100, growth: 18.9 },
  { name: "Influencer", value: 3200, growth: 12.4 }
];

// Donut Chart Data - Traffic Sources
export const trafficData = [
  { name: "Direct", value: 35 },
  { name: "Organic Search", value: 28 },
  { name: "Social Media", value: 20 },
  { name: "Referral", value: 10 },
  { name: "Email", value: 7 }
];

// Table Data - Campaign Details
export const tableData: TableData[] = [
  {
    id: "1",
    campaign: "Summer Sale 2024",
    status: "active",
    budget: 15000,
    spent: 12453,
    impressions: 453289,
    clicks: 18932,
    conversions: 1247,
    ctr: 4.17,
    roi: 187,
    startDate: "2024-06-01",
    endDate: "2024-08-31"
  },
  {
    id: "2",
    campaign: "Brand Awareness Q3",
    status: "active",
    budget: 20000,
    spent: 8742,
    impressions: 892341,
    clicks: 24521,
    conversions: 892,
    ctr: 2.75,
    roi: 142,
    startDate: "2024-07-01",
    endDate: "2024-09-30"
  },
  {
    id: "3",
    campaign: "Product Launch - X",
    status: "completed",
    budget: 25000,
    spent: 24876,
    impressions: 1234567,
    clicks: 45678,
    conversions: 2341,
    ctr: 3.7,
    roi: 234,
    startDate: "2024-04-01",
    endDate: "2024-05-31"
  },
  {
    id: "4",
    campaign: "Holiday Special",
    status: "paused",
    budget: 30000,
    spent: 5432,
    impressions: 234567,
    clicks: 8765,
    conversions: 432,
    ctr: 3.74,
    roi: 156,
    startDate: "2024-11-15",
    endDate: "2024-12-31"
  },
  {
    id: "5",
    campaign: "Retargeting Campaign",
    status: "active",
    budget: 10000,
    spent: 6789,
    impressions: 345678,
    clicks: 15432,
    conversions: 987,
    ctr: 4.47,
    roi: 213,
    startDate: "2024-08-01",
    endDate: "2024-10-31"
  },
  {
    id: "6",
    campaign: "Email Nurture Series",
    status: "active",
    budget: 5000,
    spent: 3210,
    impressions: 98765,
    clicks: 5432,
    conversions: 543,
    ctr: 5.5,
    roi: 267,
    startDate: "2024-07-15",
    endDate: "2024-12-15"
  }
];

// Real-time simulation data
export const generateRealtimeData = () => {
  const baseValue = 1000;
  return Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: baseValue + Math.random() * 500 - 250
  }));
};