import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {MdWork} from '@react-icons/all-files/md/MdWork'

function Timeline() {
  let timelineElements = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Dragontail, Ascana",
      description:
        "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      date: "August 2016 - present",
      icon: "work",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Skystead, Craonia",
      description:
        "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
      buttonText: "View Backend Projects",
      date: "June 2013 - August 2016",
      icon: "work",
    },
    {
      id: 3,
      title: "Quality Assurance Engineer",
      location: "South Warren, Geshington",
      description:
        "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
      buttonText: "Company Website",
      date: "September 2011 - June 2013",
      icon: "work",
    }
  ];

  let workIconStyles = { background: "linear-gradient(45deg, #0f83ffd5, #af56e7bb)" };

  return (
    <div className="timeline">
      
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : ""}
              icon={isWorkIcon ? <MdWork /> : ""}
            >
              <h4 className="vertical-timeline-element-title">
                {element.title}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button globalBtn ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
