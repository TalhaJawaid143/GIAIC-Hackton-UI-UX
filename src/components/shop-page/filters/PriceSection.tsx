import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const PriceSection = () => (
  <Accordion type="single" collapsible defaultValue="filter-price">
    <AccordionItem value="filter-price">
      <AccordionTrigger className="text-black font-bold text-xl py-0.5">
        Price
      </AccordionTrigger>
      <AccordionContent className="pt-4">
        <Slider defaultValue={[50, 200]} min={0} max={250} step={0} label="$" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default PriceSection;
