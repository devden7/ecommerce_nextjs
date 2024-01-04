"use  client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div
                  className={`bg-cover font-coresans ${
                    index + 1 === 1
                      ? "bg-[url('/assets/img/hero-image.jpg')]"
                      : "bg-[url('/assets/img/hero-image-2.jpg')]"
                  } h-full w-full p-6`}
                >
                  <div className="pb-32 pl-44 pr-[600px] pt-24 2xl:pb-80 2xl:pl-80 2xl:pr-[1100px]">
                    <h5 className="mb-10 text-3xl font-medium tracking-widest text-light-900">
                      TShirt Tops
                    </h5>
                    <h1 className="mb-10 text-7xl font-extrabold tracking-[0.3px] text-light-900">
                      Summer Value Pack
                    </h1>
                    <h4 className="mb-10 text-3xl font-medium tracking-[0.3px] text-light-900">
                      cool , colorful , comfy
                    </h4>
                    <Button className="bg-light-900 px-16 py-4 font-causten text-2xl font-bold text-light-400">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute left-2/4 top-[95%]  py-2 text-center text-sm">
            <div className="flex gap-[2px]">
              <div
                className={`h-2 w-14 rounded-l-xl bg-light-900 ${
                  current === 1 ? "opacity-100" : "opacity-50"
                }`}
              ></div>

              <div
                className={`h-2 w-14 rounded-r-xl bg-light-900 ${
                  current === 2 ? "opacity-100" : "opacity-50"
                }`}
              ></div>
            </div>
          </div>
          <CarouselPrevious className="left-0 top-2/4 border-none bg-none   text-light-900" />
          <CarouselNext className="right-0 top-2/4 border-none bg-none pr-5 text-light-900" />
        </Carousel>
      </div>
    </section>
  );
};
