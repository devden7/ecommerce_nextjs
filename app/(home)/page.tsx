"use client";

import DealslSection from "@/components/home/DealslSection";
import { HeroSection } from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DealslSection />
      <NewArrival />
    </>
  );
}
