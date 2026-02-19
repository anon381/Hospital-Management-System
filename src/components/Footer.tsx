import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span className="font-display font-semibold text-foreground">MedBlock</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
        </nav>

        <div className="text-xs text-muted-foreground/50 font-mono">
          Sandbox v1.0 · All systems operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
