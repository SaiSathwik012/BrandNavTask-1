import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import PricingCard from "./components/PricingCard";
import BrandNavDesign from "./components/BrandNavDesign";
import DataAttributesSection from "./components/DataAttributesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PricingCard />
      <BrandNavDesign />
      <DataAttributesSection />
      <BeforeAfterSection />
    </>
  );
};

export default Home;
