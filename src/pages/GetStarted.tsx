import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Stethoscope, Building2, User, Shield, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Role = "doctor" | "hospital" | "patient" | null;

const roleConfig = {
  doctor: {
    icon: Stethoscope,
    title: "Doctor",
    subtitle: "Refer patients and access referral history",
    fields: [
      { name: "name", placeholder: "Full Name", type: "text" },
      { name: "license", placeholder: "License / ID Number", type: "text" },
      { name: "hospital", placeholder: "Hospital Affiliation", type: "text" },
      { name: "email", placeholder: "Email Address", type: "email" },
    ],
    cta: "Continue to Doctor Dashboard",
  },
  hospital: {
    icon: Building2,
    title: "Hospital",
    subtitle: "Manage facility records and patient data",
    fields: [
      { name: "facility", placeholder: "Facility Name", type: "text" },
      { name: "contact", placeholder: "Admin Contact Name", type: "text" },
      { name: "address", placeholder: "Address", type: "text" },
      { name: "email", placeholder: "Email Address", type: "email" },
    ],
    cta: "Continue to Hospital Dashboard",
  },
  patient: {
    icon: User,
    title: "Patient",
    subtitle: "Book appointments and access your records",
    fields: [
      { name: "name", placeholder: "Full Name", type: "text" },
      { name: "phone", placeholder: "Phone Number", type: "tel" },
      { name: "email", placeholder: "Email Address", type: "email" },
    ],
    cta: "Book Appointment",
  },
};

const GetStarted = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const role = searchParams.get("role");
    if (role && (role === "doctor" || role === "hospital" || role === "patient")) {
      setSelectedRole(role);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Started</h1>
          <p className="text-muted-foreground">Enter your information to continue</p>
        </div>

        {!submitted ? (
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left side info */}
            <div className="md:col-span-2 space-y-4">
              {!selectedRole && (
                <div className="block-card">
                  <p className="text-sm text-muted-foreground mb-2">Select a role from the right to see the form</p>
                  <div className="verified-badge">
                    <Shield className="h-3 w-3" /> Role-Based Access
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Choose your role to get started</p>
                </div>
              )}
              {selectedRole && (
                <div className="block-card animate-fade-in">
                  {(() => {
                    const config = roleConfig[selectedRole];
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <config.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{config.title}</h3>
                            <p className="text-xs text-muted-foreground">{config.subtitle}</p>
                          </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-3">
                          {config.fields.map((field) => (
                            <Input
                              key={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              required
                              className="bg-background"
                            />
                          ))}
                          <Link to={selectedRole === "doctor" ? "/doctor-dashboard" : selectedRole === "hospital" ? "/hospital-dashboard" : "#"}>
                            <Button type="submit" variant="hero" className="w-full mt-2">
                              {config.cta}
                            </Button>
                          </Link>
                        </form>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>

            {/* Right side role selector */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Choose your role</p>
              {(Object.keys(roleConfig) as Array<keyof typeof roleConfig>).map((role) => {
                const config = roleConfig[role];
                const isActive = selectedRole === role;
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-block-border hover:border-primary/30 bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-primary/15' : 'bg-muted'}`}>
                        <config.icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{config.title}</h3>
                        <p className="text-xs text-muted-foreground">{config.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="block-card text-center py-12 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">You're all set!</h2>
              <p className="text-sm text-muted-foreground mb-2">Your registration has been sealed on the ledger.</p>
              <span className="verified-badge mx-auto mb-6">
                <Shield className="h-3 w-3" /> Transaction Confirmed
              </span>
              <div className="pt-4">
                <Button variant="hero" size="lg">
                  Open Dashboard
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
