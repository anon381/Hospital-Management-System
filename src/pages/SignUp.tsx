import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirm?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!name) e.name = "Name is required";
    if (!email) e.email = "Email is required";
    else if (!emailRegex.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    if (confirm !== password) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate("/get-started");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12 max-w-md">
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-sm text-muted-foreground mb-6">Set up an account to access dashboards and tools.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs mb-1 block">Full name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="text-xs mb-1 block">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-xs mb-1 block">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choose a password" />
            {errors.password && <p className="text-xs text-destructive mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="text-xs mb-1 block">Confirm password</label>
            <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password" />
            {errors.confirm && <p className="text-xs text-destructive mt-1">{errors.confirm}</p>}
          </div>

          <div className="flex items-center justify-between">
            <Link to="/auth/signin" className="text-sm text-primary hover:underline">Already have an account?</Link>
            <Button type="submit" disabled={submitting} className="btn-dim">{submitting ? 'Creating…' : 'Create account'}</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
