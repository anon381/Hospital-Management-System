import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Lock, Activity, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--chain)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="verified-badge w-fit">
              <Shield className="h-3 w-3" />
              <span>Verified & Auditable</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Secure, auditable hospital operations
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-lg">
              Scheduling, records, billing — all on an immutable ledger.
              Built for admins, doctors, and patients who demand transparency.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/get-started">
                <Button variant="accent" size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#dashboard-preview">
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Doctor Dashboard Demo
                </Button>
              </a>
            </div>

            {/* Role micro-benefits */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Admin: Full audit control</span>
              <span className="flex items-center gap-1.5"><Activity className="h-3.5 w-3.5" /> Doctor: Real-time schedules</span>
              <span className="flex items-center gap-1.5"><FileText className="h-3.5 w-3.5" /> Patient: Transparent records</span>
            </div>
          </div>

          {/* Right glass card */}
          <div className="hidden lg:block animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 space-y-4 border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-lg rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="block-number">#BLOCK 48291</span>
                <span className="verified-badge"><Shield className="h-3 w-3" /> Signed</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Appointment Confirmed", time: "09:15 AM", status: "verified" },
                  { label: "Lab Results Uploaded", time: "10:42 AM", status: "verified" },
                  { label: "Prescription Issued", time: "11:08 AM", status: "pending" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                    <div>
                      <p className="text-sm font-medium text-primary-foreground">{item.label}</p>
                      <p className="text-xs text-primary-foreground/50">{item.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'verified' ? 'bg-accent/20 text-accent' : 'bg-primary-foreground/10 text-primary-foreground/50'}`}>
                      {item.status === 'verified' ? '✓ Verified' : '⏳ Pending'}
                    </span>
                  </div>
                ))}
              </div>
              {/* Chain animation bar */}
              <div className="h-1 rounded-full bg-primary-foreground/10 overflow-hidden">
                <div className="h-full w-2/3 bg-accent/60 rounded-full tx-flow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
