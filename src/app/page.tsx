import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import PricingCard from "./components/PricingCard";
import BrandNavDesign from "./components/BrandNavDesign";
import DataAttributesSection from "./components/DataAttributesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import PromoSection from "./components/PromoSection";
import Who from "./components/who";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PricingCard />
      <BrandNavDesign />
      <DataAttributesSection />
      <BeforeAfterSection />
      <Who />
      <Testimonials />
      <FAQ />
      <PromoSection />
    </>
  );
};

export default Home;
