import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork } from "@react-icons/all-files/md/MdWork";

function Timeline() {
  let timelineElements = [
    {
      id: 1,
      title: "Internship",
      location: "Dented Code Academy",
      description:
        "Successfully translating concepts into visually appealing designs, showcasing my commitment to delivering high-quality work.",
      buttonText: "Figma, ReactJS, Redux, Firebase",
      date: "Aug 2023 - present",
      icon: "work",
    },
    {
      id: 2,
      title: "Manager",
      location: "Stellas By the Lake",
      description:
        "Developing and implementing strategic plans to enhance the cafe's overall performance, resulting in increased customer satisfaction and revenue growth. ",
      buttonText: "Customer Service, Website & Social Media Handling",
      date: "Apr 2020 - Present",
      icon: "work",
    },
    {
      id: 3,
      title: "Freelancer",
      location: "Canberra",
      description:
        "Working on cutting-edge client assignments across various platforms, showcasing a client-focused mindset. ",
      buttonText: "Wordpress, Adobe, cPanel, AWS",
      date: " ",
      icon: "work",
    },
  ];

  let workIconStyles = {
    background: "linear-gradient(45deg, #0f83ffd5, #af56e7bb)",
  };

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
