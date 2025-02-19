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
import { Button } from "./ui/button";
import { getData } from "@/utils/data";
import { Category, foodType } from "@/utils/types";

export function CarouselPlugin() {
  const [categories, setCategories] = React.useState<Category[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food-category");
      setCategories(data);
    };
    fetchData();
  }, []);

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
        {categories?.map((category: Category, index: number) => (
          <CarouselItem key={index} className="basis-22">
            <div>
              <Button className="text-[18px] bg-secondary text-secondary-foreground rounded-full px-5 py-1">
                {category.categoryName}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent border-none text-white" />
      <CarouselNext className="bg-transparent border-none text-white" />
    </Carousel>
  );
}
