import { CalendarCheck, Users, Clock, Shield } from "lucide-react";

const kpis = [
  {
    label: "Appointments Today",
    value: "1,247",
    trend: "+12% from last week",
    icon: CalendarCheck,
  },
  {
    label: "Active Patients",
    value: "34,891",
    trend: "98.7% records verified",
    icon: Users,
  },
  {
    label: "Avg. Wait Time",
    value: "8 min",
    trend: "−23% this quarter",
    icon: Clock,
  },
];

const KPIStrip = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-block-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <kpi.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <p className="text-2xl font-bold font-display">{kpi.value}</p>
                <p className="text-xs text-kpi-trend flex items-center gap-1 mt-1">
                  <Shield className="h-3 w-3" /> {kpi.trend}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIStrip;
