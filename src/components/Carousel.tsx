import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Category } from "@/utils/types";

export function CarouselPlugin({ datas }: { datas: Category[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[99.9%] m-auto"
    >
      <CarouselContent className="">
        {datas?.map((category: Category, index: number) => (
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
