import { Lock, ScrollText, UserCheck } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Encrypted Records",
    desc: "All patient data encrypted at rest and in transit with AES-256.",
  },
  {
    icon: ScrollText,
    title: "Auditable Logs",
    desc: "Immutable audit trails for every action — tamper-proof and verifiable.",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    desc: "Granular permissions ensure the right people see the right data.",
  },
];

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-block-bg">
      <div className="container">
        <div className="text-center mb-12">
          <span className="block-number mb-3 inline-block">#SECURITY</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Security & Compliance</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every record is an immutable block — verified, signed, and traceable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map((point) => (
            <div key={point.title} className="block-card text-center py-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
