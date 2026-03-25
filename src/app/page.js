import Image from "next/image";
import BannerSection from "./components/Pages/home-components/BannerSection";
import CollectionSection from "./components/Pages/home-components/CollectionSection";
import ProductTabs from "./components/Pages/home-components/ProductTabs";

export default function Home() {
  return (
    <>
    <BannerSection/>
    <CollectionSection/>
    <ProductTabs/>
    </>
  );
}
