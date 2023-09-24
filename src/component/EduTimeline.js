import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {GiGraduateCap} from "@react-icons/all-files/gi/GiGraduateCap"
 

function EduTimeline() {
    let timelineElements = [
        {
          id: 1,
          title: "Oak Ridge College",
          location: "South Warren, Geshington",
          description:
            "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
          buttonText: "Course Certificate",
          date: "September 2011",
          icon: "school",
        },
        {
          id: 2,
          title: "Hawking College",
          location: "Skystead, Craonia",
          description:
            "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
          buttonText: "College Projects",
          date: "2007 - 2011",
          icon: "school",
        },
        {
          id: 3,
          title: "Marble Hills Grammar School",
          location: "Dragontail, Ascana",
          description:
            "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
          date: "2003 - 2007",
          icon: "school",
        },
      ];

      let schoolIconStyles = { background: "linear-gradient(45deg, #0f83ffd5, #af56e7bb)" };
    
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
              iconStyle={isWorkIcon ? "" : schoolIconStyles}
              icon={isWorkIcon ? "": <GiGraduateCap />}
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
  )
}

export default EduTimeline
