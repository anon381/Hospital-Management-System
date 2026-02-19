import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"doctor" | "hospital">("doctor");
  const [errors, setErrors] = useState<{ email?: string; password?: string; role?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!email) e.email = "Email is required";
    else if (!emailRegex.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    if (!role) e.role = "Select a role";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Mock auth delay
    setTimeout(() => {
      setSubmitting(false);
      // Route to role-specific dashboard
      if (role === "doctor") navigate("/doctor-dashboard");
      else navigate("/hospital-dashboard");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12 max-w-md">
        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
        <p className="text-sm text-muted-foreground mb-6">Welcome back — sign in to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs mb-1 block">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value as any)} className="w-full px-3 py-2 border rounded bg-card">
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital</option>
            </select>
            {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
          </div>
          <div>
            <label className="text-xs mb-1 block">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-xs mb-1 block">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            {errors.password && <p className="text-xs text-destructive mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <Link to="/auth/signup" className="text-sm text-primary hover:underline">Create account</Link>
            <Button type="submit" disabled={submitting} className="btn-dim">{submitting ? 'Signing in…' : 'Sign In'}</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
