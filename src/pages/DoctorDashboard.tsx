import { Link } from "react-router-dom";
import { ArrowLeft, QrCode, Camera, Heart, ClipboardList, FileText, Upload, Search, Stethoscope, Shield, Clock, FlaskConical, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tasks = [
  { title: "Review MRI results", patient: "H. Tadesse", time: "Today", icon: FileText },
  { title: "Call back", patient: "S. Bekele lab clarification", time: "In 2 hrs", icon: ClipboardList },
  { title: "Sign referral", patient: "M. Kidane → Orthopedics", time: "By end of day", icon: ArrowRight },
];

const patients = [
  { name: "H. Tadesse", date: "2025-02-20", status: "Follow-up" },
  { name: "S. Bekele", date: "2025-02-15", status: "Lab review" },
  { name: "M. Kidane", date: "2025-02-12", status: "New consult" },
];

const referrals = [
  { name: "H. Tadesse", dest: "To Cardiology", date: "2025-02-20" },
  { name: "S. Bekele", dest: "To Radiology", date: "2025-02-15" },
];

const recentSearch = ["Kidane", "Bekele", "Tadesse", "Abebe"];

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Doctor Dashboard</h1>
          <p className="text-muted-foreground text-sm">Care tools</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* QR Scanner */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-primary" /> QR Scanner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-primary/10 dark:bg-primary/20 dark:shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex items-center justify-center mb-3">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium mb-1">Scan QR</p>
                  <p className="text-xs text-muted-foreground">Open the camera to scan a QR code.</p>
                </div>
                <Button variant="hero" className="w-full">
                  <Camera className="h-4 w-4" /> Open Scanner
                </Button>
              </CardContent>
            </Card>

            {/* Health Tip */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Heart className="h-4 w-4 text-accent" /> Health tip for clinicians
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-1">Protect your posture</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Alternate sitting and standing, and take a 2-minute stretch break every hour to avoid neck and back strain.
                </p>
                <p className="text-[10px] text-muted-foreground/60 mt-3 font-mono">Updated weekly.</p>
              </CardContent>
            </Card>

            {/* Record Search */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Search className="h-4 w-4 text-primary" /> Record search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Search records..." className="bg-background mb-3" />
                <p className="text-xs text-muted-foreground mb-2">Recent</p>
                <div className="flex flex-wrap gap-2">
                  {recentSearch.map((name) => (
                    <button key={name} className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 dark:hover:bg-primary/20 dark:hover:shadow-[0_0_8px_hsl(var(--primary)/0.2)] text-foreground transition-all">
                      {name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Tasks */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" /> Tasks & follow-ups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-block-bg border border-block-border hover:border-primary/30 dark:hover:shadow-[0_0_10px_hsl(var(--primary)/0.15)] transition-all">
                    <div className="w-8 h-8 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <task.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground truncate">Record: {task.patient}</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground shrink-0 mt-1">{task.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* KPI Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Referrals this week", value: "8" },
                { label: "Labs signed off", value: "14" },
                { label: "Avg. turnaround", value: "18h" },
              ].map((kpi, i) => (
                <Card key={i} className="border-block-border bg-card text-center">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-primary dark:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">{kpi.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{kpi.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Record Timeline */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" /> Record timeline
                </CardTitle>
                <span className="text-xs text-muted-foreground">Recent</span>
              </CardHeader>
              <CardContent className="space-y-3">
                {patients.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-block-bg border border-block-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-[10px] text-muted-foreground">Last seen: {p.date}</p>
                    </div>
                    <span className="verified-badge text-[10px]">{p.status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {/* Create Referral */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-primary" /> Create referral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-4">Start a new referral with destination, reason, and urgency.</p>
                <Button variant="hero" className="w-full">
                  <ArrowRight className="h-4 w-4" /> New referral
                </Button>
              </CardContent>
            </Card>

            {/* Upload Lab Results */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Upload className="h-4 w-4 text-primary" /> Upload lab results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-4">Attach PDF or images to the record.</p>
                <div className="border-2 border-dashed border-block-border rounded-lg p-6 text-center hover:border-primary/40 dark:hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all cursor-pointer">
                  <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Drop files or click to browse</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Referrals */}
            <Card className="border-block-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <FlaskConical className="h-4 w-4 text-primary" /> Recent referrals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {referrals.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-block-bg border border-block-border">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.name}</p>
                      <p className="text-[10px] text-muted-foreground">{r.dest} · {r.date}</p>
                    </div>
                    <Shield className="h-3 w-3 text-accent ml-auto" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mini Ledger */}
            <div className="text-[10px] font-mono text-muted-foreground space-y-1 p-3 rounded-lg border border-dashed border-chain dark:border-primary/30 dark:shadow-[0_0_10px_hsl(var(--primary)/0.1)]">
              <p className="text-xs font-semibold text-foreground mb-1">Ledger feed</p>
              <p>TX#48291 — Referral created — 2s ago</p>
              <p>TX#48290 — Lab signed — 15s ago</p>
              <p>TX#48289 — Record viewed — 1m ago</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
