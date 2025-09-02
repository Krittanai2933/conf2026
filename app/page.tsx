import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <TeamSection />
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
      <FooterSection />
    </>
  );
}
