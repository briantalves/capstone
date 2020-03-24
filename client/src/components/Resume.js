import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
export default function Resume() {
  return (
    <>
      <div className="resume__all">
        <div className="resume__header">
          <div className="resume__headertitle">Resume</div>
        </div>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading className="resume__two">
              <AccordionItemButton>
                <span className="resume__one">STORY</span>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p>
                I grew up in a Portuguese household, what that means is soccer
                is awlwas the topic of covnersation whether it was on TV or if
                it was something we were talking about at the dinner table.
                <br />
                <br />
                It was a passion I grew up with. Along with it I developed a
                passion for technology. I was always that kid looking at new
                techn. From fixing old computers, to being on top of anything
                new coming out.
                <br />
                <br />
                As I grew up I steered away from what I was really passionate
                about and spent some time in the business world. After spending
                some time in management and sales positions I decided it wasn't
                the industry for me.
                <br />
                <br />
                It got to a point where I wanted to do more than feed my wallet.
                I wanted to feed to what I was passionate about. Which is why I
                decided to take the Web Dev program at Brain Station.{" "}
              </p>
            </AccordionItemPanel>
            <AccordionItem></AccordionItem>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="resume__one">EXPERIENCE</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                <u>
                  <b>Experience One</b>
                </u>
                <br />
                <ul>
                  <b>Account Executive | Vancouver Whitecaps</b>
                  <br />
                  Jun 2018 - Dec 2019, Vancouver, BC
                  <br />
                  <br />
                  <li> Promoted within four months of employment to AE</li>
                  <li>
                    Sold the most amount of season tickets during their 2020
                    season ticket campaign
                  </li>
                  <li>
                    Holds the second highest sale for season tickets at the
                    Whitecaps
                  </li>
                </ul>
                <u>
                  <b>Experience Two</b>
                </u>
                <br />
                <ul>
                  <b>Operations Manager | Crescent Moving</b>
                  <br />
                  Feb 2015 - Jun 2018, Vancouver, BC
                  <br />
                  <br />
                  <li> Promoted three times to reach OM</li>
                  <li>
                    Ensured quality and communication among the different
                    departments
                  </li>
                  <li>
                    Managed up to 24 local staff and five drivers across North
                    America
                  </li>
                  <li> Promoted three times to reach OM</li>
                  <li>
                    Ensured quality and communication among the different
                    departments
                  </li>
                  <li>
                    Managed up to 24 local staff and five drivers across North
                    America
                  </li>
                </ul>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="resume__one">TECH SKILLS</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {" "}
              <p>
                <u>
                  <b>Front End</b>
                </u>
                <br />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>SASS</li>
                  <li>REACT JS</li>1
                </ul>
                <u>
                  <b>Back End</b>
                </u>
                <br />
                <ul>
                  <li>NODE JS</li>
                </ul>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

{
  /* <a href={props.newMember.githuburl}>GitHub</a>; */
}
