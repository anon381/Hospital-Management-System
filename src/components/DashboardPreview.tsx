import { Shield, Calendar, BarChart3, ArrowRight } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="block-number mb-3 inline-block">#DASHBOARDS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Dashboard Previews</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Role-specific views with real-time ledger activity.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Doctor Dashboard */}
          <div className="block-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Doctor Schedule
              </h3>
              <span className="verified-badge"><Shield className="h-3 w-3" /> Live</span>
            </div>

            <div className="space-y-2">
              {["09:00 — Sarah K. (Follow-up)", "10:30 — James M. (New Appointment)", "14:00 — Lisa R. (Telehealth)"].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm p-2.5 rounded bg-block-bg border border-block-border">
                  <span>{item}</span>
                  <span className="text-xs text-accent">✓</span>
                </div>
              ))}
            </div>

            <button className="text-xs text-primary flex items-center gap-1 hover:underline">
              Inspect audit trail <ArrowRight className="h-3 w-3" />
            </button>

            {/* Mini ledger feed */}
            <div className="text-[10px] font-mono text-muted-foreground space-y-1 border-t border-border pt-3">
              <p>TX#48291 — Appointment confirmed — 2s ago</p>
              <p>TX#48290 — Record accessed — 15s ago</p>
            </div>
          </div>

          {/* Hospital Reports */}
          <div className="block-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Hospital Reports
              </h3>
              <span className="verified-badge"><Shield className="h-3 w-3" /> Audited</span>
            </div>

            <div className="space-y-2">
              {[
                { label: "Admissions", value: "347", change: "+8%" },
                { label: "Bed Occupancy", value: "82%", change: "Stable" },
                { label: "Revenue (MTD)", value: "$2.4M", change: "+15%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm p-2.5 rounded bg-block-bg border border-block-border">
                  <span>{item.label}</span>
                  <div className="text-right">
                    <span className="font-semibold">{item.value}</span>
                    <span className="text-xs text-kpi-trend ml-2">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-xs text-primary flex items-center gap-1 hover:underline">
              Inspect audit trail <ArrowRight className="h-3 w-3" />
            </button>

            <div className="text-[10px] font-mono text-muted-foreground space-y-1 border-t border-border pt-3">
              <p>TX#48289 — Report generated — 5s ago</p>
              <p>TX#48288 — Billing verified — 32s ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
