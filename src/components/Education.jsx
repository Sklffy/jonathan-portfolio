import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../hoc/styles";
import SectionWrapper from "../hoc/SectionWrapper";

// Reuse animation variant
const fadeLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", delay, duration: 0.75 },
  },
});

// Education data
const education = [
  {
    title: "Bachelor’s Degree",
    company_name: "Liberty University",
    icon: "/collage.png",
    iconBg: "#ffffffff",
    date: "2024 – 2027",
    points: [
      "Major: Computer Science – Cybersecurity",
      "Activities: Liberty Cyber Club, NCAE-C Competition team",
      "🛡️ Skills: Vulnerability Assessment, VPN, +13 more",
    ],
  },
  {
    title: "High School Diploma",
    company_name: "Liberty University Online Academy",
    icon: "/LUOA.png",
    iconBg: "#ffffffff",
    date: "2024",
    points: [
      "Activities: Beta Club Honor Society",
      "🐍 Skills: Python (Programming Language)",
    ],
  },
];


// Card component
const EducationCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "transparent",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }}

    contentArrowStyle={{ borderRight: "7px solid #f0f3ffff" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      boxShadow: "0 0 0 3px white",
    }}
    icon={
      <div className="icon">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="timeline-icon"
        />
      </div>
    }
  >
    <div className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3),_0_0_40px_rgba(0,255,255,0.2)] rounded-xl p-2">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Main component
const Education = () => {
  return (
    <section id="education" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div className="section-header">
  <p className="subtext">My Journey So Far</p>
  <h2 className="headline">Education.</h2>
</motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((experience, index) => (
            <EducationCard
              key={`education-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};


const WrappedEducation = SectionWrapper(Education, "education");
export default WrappedEducation;
