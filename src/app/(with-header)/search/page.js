// search/page.js
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { productData } from "@/app/(with-header)/Data/ProductData";
import SearchClient from "./SearchClient";
import CategoryLayout from "../categories/layout";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const results = productData.filter((p) => {
        const q = query.toLowerCase();
        return (
            p.name.toLowerCase().includes(q) ||
            p.title.toLowerCase().includes(q) ||
            (p.Material && p.Material.toLowerCase().includes(q)) ||
            p.category.toLowerCase().includes(q)
        );
    });

    return <SearchClient products={results} query={query} />;
}

export default function SearchPage() {
    return (
        <CategoryLayout>
            <Suspense fallback={<div className="text-center py-20 text-gray-500">Searching...</div>}>
                <SearchContent />
            </Suspense>
        </CategoryLayout>
    );
}