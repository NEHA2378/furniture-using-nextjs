import { productData } from "@/app/(with-header)/Data/ProductData";
import CategoryClient from "./CategoryClient";

export default async function Page({ params }) {
  const { slug } = await params;

  const categoryMap = {
    "1-seater-sofa": "1 Seater Sofa",
    "2-seater-sofa": "2 Seater Sofa",
    "3-seater-sofa": "3 Seater Sofa",
    "l-shape-sofa": "L Shape Sofa",
    "sofa-cover": "Sofa Cover",
    "sofa-cum-bed": "Wooden Sofa Cum Bed",
    "wooden-sofa-set": "Wooden Sofa Sets",
    "normal": "Normal",
  };

  const categoryTitle = categoryMap[slug];

  // Only category filtering on server (FAST)
  const categoryProducts = productData.filter(
    (product) => product.title === categoryTitle
  );

  return <CategoryClient products={categoryProducts} />;
}

// STATIC GENERATION (IMPORTANT)
export function generateStaticParams() {
  return [
    { slug: "1-seater-sofa" },
    { slug: "2-seater-sofa" },
    { slug: "3-seater-sofa" },
    { slug: "l-shape-sofa" },
    { slug: "sofa-cover" },
    { slug: "sofa-cum-bed" },
    { slug: "wooden-sofa-set" },
    { slug: "normal" },
  ];
}