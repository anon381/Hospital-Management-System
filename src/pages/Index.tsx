import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleFunnels from "@/components/RoleFunnels";
import KPIStrip from "@/components/KPIStrip";
import Features from "@/components/Features";
import WorkflowSnapshot from "@/components/WorkflowSnapshot";
import DashboardPreview from "@/components/DashboardPreview";
import SecurityCompliance from "@/components/SecurityCompliance";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <KPIStrip />
      <RoleFunnels />
      <Features />
      <WorkflowSnapshot />
      <DashboardPreview />
      <SecurityCompliance />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
