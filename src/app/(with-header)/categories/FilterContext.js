// FilterContext.js
"use client";
import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        titles: [],       
        materials: [],
        price: 100000,
    });

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilters = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilters must be used within a FilterProvider");
    return context;
};