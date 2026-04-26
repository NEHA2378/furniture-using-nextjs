"use client"

import { useState } from "react";
import CategorySidebar from "@/app/components/common/CategorySidebar";
import Breadcrumb from "@/app/components/common/Breadcrumb";

export default function CategoryLayout({ children }) {

  const [filters, setFilters] = useState({
    titles: [],
    materials: [],
    price: 100000
  });

  return (
    <div className='mb-10 max-w-[1320px] mx-auto'>

      <div className="mb-5 text-center">
        <Breadcrumb title="Product Listing" />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[250px_auto] gap-4'>

        <CategorySidebar filters={filters} setFilters={setFilters} />

        <div className='p-4'>
          {children({ filters })}
        </div>

      </div>
    </div>
  );
}