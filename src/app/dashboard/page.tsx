"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";

// Mock data for the dashboard
const performanceData = [
  { name: 'Jan', spend: 4000, impressions: 2400, clicks: 2400 },
  { name: 'Feb', spend: 3000, impressions: 1398, clicks: 2210 },
  { name: 'Mar', spend: 2000, impressions: 9800, clicks: 2290 },
  { name: 'Apr', spend: 2780, impressions: 3908, clicks: 2000 },
  { name: 'May', spend: 1890, impressions: 4800, clicks: 2181 },
  { name: 'Jun', spend: 2390, impressions: 3800, clicks: 2500 },
];

// Mock data for recent campaigns
const recentCampaigns = [
  { id: '1', name: 'Acme.dev Campaign', status: 'Active', spend: '$100', impressions: '5,000', clicks: '250', ctr: '5.0%' },
  { id: '2', name: 'DevTools Pro', status: 'Paused', spend: '$50', impressions: '2,500', clicks: '125', ctr: '5.0%' },
  { id: '3', name: 'CodeMaster AI', status: 'Completed', spend: '$200', impressions: '10,000', clicks: '500', ctr: '5.0%' },
];

// Dashboard page component
function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button asChild>
            <Link href="/dashboard/campaigns/new">Create Campaign</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,250</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impressions</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50,000</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clicks</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,500</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CTR</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.0%</div>
              <p className="text-xs text-muted-foreground">+0.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="campaigns">Recent Campaigns</TabsTrigger>
          </TabsList>
          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spend" fill="#3b82f6" name="Spend" />
                    <Bar dataKey="impressions" fill="#10b981" name="Impressions" />
                    <Bar dataKey="clicks" fill="#f59e0b" name="Clicks" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="campaigns" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="hidden md:grid grid-cols-6 bg-gray-100 p-4 font-medium">
                    <div>Name</div>
                    <div>Status</div>
                    <div>Spend</div>
                    <div>Impressions</div>
                    <div>Clicks</div>
                    <div>CTR</div>
                  </div>
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="grid grid-cols-2 md:grid-cols-6 items-center p-4 border-t">
                      <div className="font-medium md:col-span-1">{campaign.name}</div>
                      <div className="md:col-span-1">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="md:col-span-1">{campaign.spend}</div>
                      <div className="md:col-span-1">{campaign.impressions}</div>
                      <div className="md:col-span-1">{campaign.clicks}</div>
                      <div className="md:col-span-1">{campaign.ctr}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default DashboardPage;