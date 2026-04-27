"use client";

import { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import CategorySidebar from "../components/common/CategorySidebar";
import { FilterContext } from "./FilterContext";

export default function CategoryLayout({ children }) {

  const [filters, setFilters] = useState({
    titles: [],
    materials: [],
    price: 100000
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>

      <div className='mb-10 max-w-[1320px] mx-auto'>

        {/* Breadcrumb */}
        <div className="mb-5 text-center">
          <Breadcrumb title="Product Listing" />
        </div>

        {/* Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-[250px_auto] gap-4'>

          {/* Sidebar */}
          <CategorySidebar
            filters={filters}
            setFilters={setFilters}
          />

          {/* Page Content */}
          <div className='p-4 order-1 lg:order-2'>
            {children}
          </div>

        </div>
      </div>
      
    </FilterContext.Provider>
    
  );
}