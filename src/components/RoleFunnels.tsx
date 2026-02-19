import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Building2, Shield, CalendarCheck, FileText, ClipboardList } from "lucide-react";

const roles = [
  {
    title: "Doctor",
    icon: Stethoscope,
    promise: "Refer records and access referral history.",
    actions: ["View Schedule", "Manage Referrals", "Access EHR"],
    cta: "Open Dashboard",
    ctaLink: "/get-started?role=doctor",
    badge: "Verified Provider",
  },
  {
    title: "Hospital",
    icon: Building2,
    promise: "Manage facility records and clinical data.",
    actions: ["Admin Dashboard", "Audit Reports", "Staff Management"],
    cta: "Get Started",
    ctaLink: "/get-started?role=hospital",
    badge: "Enterprise Ready",
  },
];

const RoleFunnels = () => {
  return (
    <section className="py-20 bg-block-bg">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Role-Based Access</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Choose your role to get started with the right tools and permissions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className="block-card hover-scale group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <role.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{role.title}</h3>
                  <span className="verified-badge text-[10px]">
                    <Shield className="h-2.5 w-2.5" /> {role.badge}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{role.promise}</p>

              <ul className="space-y-2 mb-6">
                {role.actions.map((action) => (
                  <li key={action} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {action}
                  </li>
                ))}
              </ul>

              <Link to={role.ctaLink}>
                <Button variant="default" className="w-full" size="sm">
                  {role.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleFunnels;
