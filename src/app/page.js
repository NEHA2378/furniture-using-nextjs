import Image from "next/image";
import BannerSection from "./components/Pages/home-components/BannerSection";
import CollectionSection from "./components/Pages/home-components/CollectionSection";
import ProductTabs from "./components/Pages/home-components/ProductTabs";
import BestSellingProducts from "./components/Pages/home-components/BestSellingProducts";
import CollestionBanner from "./components/Pages/home-components/CollestionBanner";
import ServiceSection from "./components/Pages/home-components/ServiceSection";
import UserVoiceSection from "./components/Pages/home-components/UserVoiceSection";
import NewsletterSection from "./components/Pages/home-components/NewsletterSection";

export default function Home() {
  return (
    <>
    <BannerSection/>
    <CollectionSection/>
    <ProductTabs/>
    <CollestionBanner/>
    <BestSellingProducts/>
    <ServiceSection/>
    <UserVoiceSection/>
    <NewsletterSection/>
    </>
  );
}
