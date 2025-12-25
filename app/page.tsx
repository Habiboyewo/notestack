import CallToAction from "@/components/home/callToAction";
import FeaturesSection from "@/components/home/featuresSection";
import HeroSection from "@/components/home/herosection";
import { FooterComponent } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/navbar";


export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <CallToAction/>
      <FooterComponent/>
    </div>
  );
}
