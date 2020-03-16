import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Hellp</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>I am here 2 stay </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Do hotdogs have opinions?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>A resounding yes, from the people.</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
