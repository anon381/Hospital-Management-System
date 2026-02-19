import { CalendarPlus, CheckCircle2, Stethoscope, Receipt } from "lucide-react";

const steps = [
  {
    icon: CalendarPlus,
    title: "Book",
    desc: "User selects slot and submits request.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm",
    desc: "System verifies availability and locks slot.",
  },
  {
    icon: Stethoscope,
    title: "Consult",
    desc: "Doctor conducts visit; notes recorded on ledger.",
  },
  {
    icon: Receipt,
    title: "Bill",
    desc: "Invoice generated with full audit trail.",
  },
];

const WorkflowSnapshot = () => {
  return (
    <section className="py-20 bg-block-bg">
      <div className="container">
        <div className="text-center mb-12">
          <span className="block-number mb-3 inline-block">#WORKFLOW</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Every step recorded as an immutable transaction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto items-stretch">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="block-card text-center py-8 px-4 h-full glow-animate"
              style={{ animationDelay: `${i * 1.2}s`, animationDuration: `${steps.length * 1.2}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <div className="w-0.5 h-6 bg-chain chain-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSnapshot;
