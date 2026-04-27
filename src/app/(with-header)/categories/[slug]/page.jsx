"use client";

import { useParams } from "next/navigation";
import { productData } from "@/app/(with-header)/Data/ProductData";
import { useFilters } from "@/app/(with-header)/categories/FilterContext";

export default function CategoryPage() {

  const { filters } = useFilters();   // ✅ get from context
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
      filters?.titles?.length === 0 ||
      filters?.titles?.includes(product.title);

    const materialMatch =
      filters?.materials?.length === 0 ||
      filters?.materials?.includes(product.Material);

    const priceMatch = product.price <= (filters?.price ?? 100000);

    return categoryMatch && titleMatch && materialMatch && priceMatch;
  });

  return (
    <div>
      <div className='mb-5 p-2 flex lg:justify-end justify-center gap-3 items-center'>
        <label className='hidden md:block' htmlFor="">Sort By : </label>
        <select className='border border-1 border-gray-300 p-2'
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}>
          <option value="" className='bg-gray-200'>Sort By</option>
          <option value="featured">Featured Products</option>
          <option value="new">New Arrivals</option>
          <option value="sale">On Sale</option>
          <option value="low-high">Sort By Price: low to high</option>
          <option value="high-low">Sort By Price: high to low</option>
          <option value="a-z">Product Name: A to Z</option>
          <option value="z-a">Product Name: Z to A</option>
        </select>

        <p className='hidden md:block'>Showing {filteredProducts.length} results</p>
      </div>

      <div className='mb-10 max-w-[1320px] mx-auto'>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

          {filteredProducts.length === 0 ? (

            <div className='my-10 col-span-3'>
              <img
                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                className="rounded-md mx-auto"
                alt="No matches available"
              />
              <p className='text-center py-10'>
                No products found!
              </p>
            </div>

          ) : (

            filteredProducts.map((product) => (

              <div key={product.id} className="bg-neutral-primary-soft p-6 rounded-base shadow-md">

                <img
                  className="rounded-base w-full h-[200px] object-cover"
                  src={product.image}
                  alt={product.name}
                />

                <h6 className='mt-4 text-gray-500'>
                  {product.title}
                </h6>

                <h5 className="mt-2 text-xl font-semibold">
                  {product.name}
                </h5>

                <p className="text-gray-400 line-through">
                  Rs. {product.originalPrice}
                </p>

                <p className="text-lg font-bold">
                  Rs. {product.price}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <button className="p-2 border rounded-full hover:bg-gray-100">
                    <FaHeart />
                  </button>

                  <button
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
                  >
                    Add to Cart
                  </button>
                </div>

              </div>

            ))

          )}

        </div>
      </div>
    </div>
  );
}