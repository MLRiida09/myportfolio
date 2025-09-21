"use client";
import React, { useEffect, useState } from "react";
import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

const ResponsiveServices = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const toggleFlip = (serviceId: number) => {
    setFlippedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen text-white p-6">
      {isMobile ? (
        <ServicesMobile  />
      ) : (
        <ServicesDesktop  />
      )}
    </main>
  );
};

export default ResponsiveServices;
