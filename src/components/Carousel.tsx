"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const categories = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Side dish",
  "Brunch",
  "Deserts",
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[99.9%] m-auto"
    >
      <CarouselContent className="">
        {categories.map((category, index) => (
          <CarouselItem key={index} className="basis-22">
            <div>
              <Button className="text-[18px] bg-secondary text-secondary-foreground">
                {category}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
