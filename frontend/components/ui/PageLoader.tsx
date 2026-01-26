"use client";

import { useState, useEffect } from "react";
import { LoaderOne } from "./loader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (minimum 1.5 seconds for smooth experience)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoaderOne />;
    }

    return <>{children}</>;
}
