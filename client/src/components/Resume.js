import React from "react";

import {
  AccordionComponent,
  AccordionItemsDirective,
  AccordionItemDirective
} from "@syncfusion/ej2-react-navigations";
Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel;

class ReactApp extends Component {
  render() {
    return (
      <>
        <div className="resume__header">
          <div className="resume__headertitle">Resume</div>
        </div>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading className="resume__two">
              <AccordionItemButton>
                <span className="resume__one">Experience 1</span>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p>Vancouver Whitecaps </p>
            </AccordionItemPanel>
            <AccordionItem>
              <AccordionItemButton>Experience 2</AccordionItemButton>
            </AccordionItem>
            <AccordionItemPanel>
              <p>Crescent Moving</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Do hotdogs have opinions?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>A resounding yes, from the people.</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  }
}
