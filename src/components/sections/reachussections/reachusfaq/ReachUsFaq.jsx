import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/snippets/accordion/Accordion";

const ReachUsFaq = () => {
  return (
    <section className="text-white p-4 h-fit flex flex-col md:flex-row">
      <div className=" md:flex justify-center items-center text-3xl md:flex-1 "><h1>FAQS</h1></div>
      <div className="md:flex-1">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </section>
  );
};

export default ReachUsFaq;
