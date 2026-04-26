"use client"

import { useParams } from "next/navigation";
import { productData } from "@/app/(with-header)/Data/ProductData";

export default function CategoryPage({ filters }) {

  const { slug } = useParams();

  const categoryMap = {
    "1-seater-sofa": "1 Seater Sofa",
    "2-seater-sofa": "2 Seater Sofa",
    "3-seater-sofa": "3 Seater Sofa",
    "l-shape-sofa": "L Shape Sofa",
    "sofa-cover": "Sofa Cover",
    "sofa-cum-bed": "Wooden Sofa Cum Bed",
    "wooden-sofa-set": "Wooden Sofa Sets",
    "normal": "Normal"
  };

  const categoryTitle = categoryMap[slug];

  const filteredProducts = productData.filter((product) => {

    const categoryMatch = product.title === categoryTitle;

    const titleMatch =
      filters.titles.length === 0 ||
      filters.titles.includes(product.title);

    const materialMatch =
      filters.materials.length === 0 ||
      filters.materials.includes(product.Material);

    const priceMatch = product.price <= filters.price;

    return categoryMatch && titleMatch && materialMatch && priceMatch;
  });

  return (
    <div>
      <p className="mb-4">Showing {filteredProducts.length} results</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="border p-4">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}