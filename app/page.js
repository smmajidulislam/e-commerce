import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Carosell from "@/components/page/homepage/Carosell";
import FeatureProductSection from "@/components/page/homepage/FeatureProduct";
import LatestProductSection from "@/components/page/homepage/LatestProduct";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carosell />
      <FeatureProductSection />
      <LatestProductSection />
      <Footer />
    </>
  );
}
