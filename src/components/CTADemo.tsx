import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle2 } from "lucide-react";

const CTADemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-block-bg">
      <div className="container max-w-lg">
        <div className="block-card">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <span className="block-number mb-3 inline-block">#DEMO REQUEST</span>
                <h2 className="text-2xl font-bold mb-2">Request a Demo</h2>
                <p className="text-sm text-muted-foreground">See MedBlock in action for your organization.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your name" required className="bg-background" />
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="email" placeholder="Email address" required className="bg-background" />
                <Button type="submit" variant="hero" className="w-full">
                  Request a Demo — {role === 'admin' ? 'Admin' : role === 'doctor' ? 'Doctor' : 'Patient'}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Request Received</h3>
                <p className="text-sm text-muted-foreground mb-4">Your demo has been sealed on the ledger.</p>
                <span className="verified-badge mx-auto">
                  <Shield className="h-3 w-3" /> Transaction Confirmed
                </span>
              </div>
              <Button variant="default" onClick={() => setSubmitted(false)} className="mt-4">
                Open Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTADemo;
