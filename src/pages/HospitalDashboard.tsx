import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, BedDouble, DollarSign, Activity, Shield, FileText, BarChart3, Calendar, Bell, Settings, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const kpis = [
  { label: "Total Admissions", value: "1,247", change: "+12%", icon: Users },
  { label: "Bed Occupancy", value: "82%", change: "Stable", icon: BedDouble },
  { label: "Revenue (MTD)", value: "$2.4M", change: "+15%", icon: DollarSign },
  { label: "Active Staff", value: "186", change: "+3", icon: Activity },
];

const departments = [
  { name: "Cardiology", patients: 84, beds: "92%", status: "High" },
  { name: "Orthopedics", patients: 67, beds: "78%", status: "Normal" },
  { name: "Radiology", patients: 45, beds: "65%", status: "Normal" },
  { name: "Pediatrics", patients: 93, beds: "88%", status: "High" },
];

const recentAdmissions = [
  { name: "A. Lemma", dept: "Cardiology", time: "10 min ago" },
  { name: "T. Girma", dept: "Orthopedics", time: "45 min ago" },
  { name: "F. Hailu", dept: "Pediatrics", time: "2 hrs ago" },
];

const alerts = [
  { text: "ICU bed capacity at 95%", level: "error" },
  { text: "3 pending lab approvals", level: "warn" },
  { text: "Staff shift change in 2 hrs", level: "info" },
];

const HospitalDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Hospital Dashboard</h1>
            <p className="text-muted-foreground text-sm">Facility management & operations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Bell className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><Settings className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <Card key={i} className="border-block-border bg-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <kpi.icon className="h-5 w-5 text-primary dark:drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                  <span className="text-xs text-kpi-trend font-medium">{kpi.change}</span>
                </div>
                <p className="text-2xl font-bold dark:text-primary dark:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]">{kpi.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department Overview */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" /> Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                    <div className="grid grid-cols-4 text-[10px] text-muted-foreground font-medium uppercase tracking-wider px-3 pb-1">
                    <span>Department</span>
                    <span className="text-center">Admissions</span>
                    <span className="text-center">Beds</span>
                    <span className="text-right">Status</span>
                  </div>
                  {departments.map((dept, i) => (
                    <div key={i} className="grid grid-cols-4 items-center p-3 rounded-lg bg-block-bg border border-block-border hover:border-primary/30 dark:hover:shadow-[0_0_10px_hsl(var(--primary)/0.15)] transition-all">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-sm text-center">{dept.patients}</span>
                      <span className="text-sm text-center">{dept.beds}</span>
                      <span className={`text-right text-xs font-medium ${dept.status === "High" ? "text-destructive" : "text-accent"}`}>{dept.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reports */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" /> Reports & Analytics
                  </CardTitle>
                  <span className="verified-badge"><Shield className="h-3 w-3" /> Audited</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {["Financial Report", "Staff Report", "Admissions Report"].map((report, i) => (
                    <button key={i} className="p-4 rounded-lg border border-block-border bg-block-bg text-center hover:border-primary/40 dark:hover:shadow-[0_0_12px_hsl(var(--primary)/0.15)] transition-all">
                      <FileText className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium">{report}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Bell className="h-4 w-4 text-primary" /> Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {alerts.map((alert, i) => (
                  <div key={i} className={`p-3 rounded-lg border text-sm ${
                    alert.level === "error" ? "border-destructive/30 bg-destructive/5 text-destructive" :
                    alert.level === "warn" ? "border-yellow-500/30 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400" :
                    "border-block-border bg-block-bg text-muted-foreground"
                  }`}>
                    {alert.text}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Admissions */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> Recent Admissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentAdmissions.map((adm, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-block-bg border border-block-border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{adm.name}</p>
                      <p className="text-[10px] text-muted-foreground">{adm.dept}</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{adm.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" /> Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="hero" className="w-full">Add Admission</Button>
                <Button variant="hero-outline" className="w-full">Generate Report</Button>
                <Button variant="outline" className="w-full">Manage Staff</Button>
              </CardContent>
            </Card>

            {/* Ledger */}
            <div className="text-[10px] font-mono text-muted-foreground space-y-1 p-3 rounded-lg border border-dashed border-chain dark:border-primary/30 dark:shadow-[0_0_10px_hsl(var(--primary)/0.1)]">
              <p className="text-xs font-semibold text-foreground mb-1">Ledger feed</p>
              <p>TX#48295 — Admission recorded — 10m ago</p>
              <p>TX#48294 — Billing verified — 45m ago</p>
              <p>TX#48293 — Report generated — 2h ago</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalDashboard;
