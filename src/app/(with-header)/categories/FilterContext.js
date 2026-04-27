// FilterContext.js
"use client";
import { createContext, useContext } from "react";

export const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);