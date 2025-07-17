import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../hoc/styles";
import SectionWrapper from "../hoc/SectionWrapper";
import "../App.css";


// Reuse animation variant
const fadeLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", delay, duration: 0.75 },
  },
});

// Timeline experience data
const experiences = [
  {
    title: "IT Support Technician",
    company_name: "CBTS Technology Solutions | Contract",
    icon: "/CBTS.png",
    iconBg: "#000000ff",
    date: "May 2025 – July 2025",
    points: [
      "Delivered remote and onsite support for cloud migrations with minimal user disruption.",
      "Troubleshot email, authentication, remote access, and cloud service issues to maintain uptime.",
      "Assisted in migrating legacy systems to Microsoft Azure cloud infrastructure.",
    ],
  },
  {
    title: "SSH/FTP Services Specialist",
    company_name: "National Centers of Academic Excellence | Cyber Games",
    icon: "/NCAE.png",
    iconBg: "#ffffffff",
    date: "Jan 2025 – May 2025",
    points: [
      "NSA-sponsored National Centers of Academic Excellence Cyber Games Competition.",
      "Placed 2nd in the regional NCAE Cyber Games 2025.",
      "Configured and secured FTP and SSH services on CentOS and Kali Linux.",
    ],
  },
];

// Experience card component
const ExperienceCard = ({ experience }) => (
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
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Timeline section
const Experience = () => {
  return (
    <section id="work" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div className="section-header">
  <p className="subtext">Experience Overview</p>
  <h2 className="headline">Work Experience.</h2>
</motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

const WrappedExperience = SectionWrapper(Experience, "work");
export default WrappedExperience;