import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {GiGraduateCap} from "@react-icons/all-files/gi/GiGraduateCap"
 

function EduTimeline() {
    let timelineElements = [
        {
          id: 1,
          title: "Dented Code Academy",
          location: "Canberra",
          description: "Job Ready Course",
          buttonText: "IT Course",
          date: "Aug 2023 - Present",
          icon: "school",
        },
        {
          id: 2,
          title: "Swinburne University of Technology",
          location: "Hawthorn, Melbourne",
          description: "Masters in IT",
          buttonText: "College Projects",
          date: "2018-2020",
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
