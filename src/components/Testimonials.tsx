import { Shield, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Reduced our administrative overhead by 40% in the first quarter.",
    name: "Dr. Emily Chen",
    role: "Chief Medical Officer",
    metric: "40% cost reduction",
  },
  {
    quote: "The audit trail gives us complete confidence during compliance reviews.",
    name: "Michael Torres",
    role: "Hospital Administrator",
    metric: "100% audit pass rate",
  },
  {
    quote: "Booking appointments is finally transparent and stress-free.",
    name: "Sarah Williams",
    role: "User",
    metric: "8 min avg. wait",
  },
];

const logos = ["Memorial Health", "City General", "Pacific Medical", "Northern Trust Hospital", "Unity Care"];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="block-number mb-3 inline-block">#TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Trusted by Healthcare Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="block-card">
              <Quote className="h-5 w-5 text-primary/30 mb-3" />
              <p className="text-sm mb-4 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="verified-badge text-[10px]">
                  <Shield className="h-2.5 w-2.5" /> {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo) => (
              <div key={logo} className="text-sm font-display font-medium text-muted-foreground/50 px-4 py-2 border border-border rounded-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
