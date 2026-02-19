import { Calendar, FileHeart, Video, ArrowRightLeft, CreditCard, Shield } from "lucide-react";

const features = [
  {
    title: "Scheduling",
    benefit: "Automated appointment management with conflict detection.",
    bullets: ["Real-time slot availability", "Multi-provider calendars"],
    icon: Calendar,
  },
  {
    title: "EHR & Records",
    benefit: "Immutable electronic health records with full audit trails.",
    bullets: ["Version-controlled records", "Role-based access control"],
    icon: FileHeart,
  },
  {
    title: "Telehealth",
    benefit: "Secure virtual consultations with integrated notes.",
    bullets: ["End-to-end encrypted", "In-session prescriptions"],
    icon: Video,
  },
  {
    title: "Referrals",
    benefit: "Streamlined provider-to-provider referral workflows.",
    bullets: ["Trackable referral chains", "Automated follow-ups"],
    icon: ArrowRightLeft,
  },
  {
    title: "Billing",
    benefit: "Transparent billing with verifiable transaction logs.",
    bullets: ["Itemized audit trails", "Insurance claim automation"],
    icon: CreditCard,
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="block-number mb-3 inline-block">#FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything You Need</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each feature is backed by an immutable ledger — every action recorded, every change traceable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div key={feature.title} className="block-card group hover-scale">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{feature.benefit}</p>
              <ul className="space-y-1.5">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-foreground/70">
                    <Shield className="h-3 w-3 text-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
