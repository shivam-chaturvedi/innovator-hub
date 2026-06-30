import type { ChapterVideo } from "@/data/chaptersData";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectMediaCoverage {
  id: string;
  outlet: string;
  title: string;
  url: string;
  date?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  chapter?: string;
  year?: string;
  description: string;
  /** Up to 2 videos */
  videos: ChapterVideo[];
  /** Up to 4 images */
  images: ProjectImage[];
  mediaCoverage: ProjectMediaCoverage[];
}

export const defaultProjects: Project[] = [
  {
    id: "smart-traffic-light",
    title: "Smart Traffic Light System",
    category: "Embedded Systems",
    chapter: "Kashmir",
    year: "2024",
    description:
      "Students designed and built a fully functional Arduino-based traffic light system that uses sensors to detect vehicle density and adjusts signal timing dynamically. The project applies concepts from coding, electronics, and systems thinking to a real urban challenge.",
    videos: [
      {
        id: "stl-v1",
        title: "Smart Traffic Light – Demo",
        description: "Live demonstration of the sensor-driven traffic light model built by students.",
        src: "",
        poster: "",
        duration: "2:14",
      },
      {
        id: "stl-v2",
        title: "Build Process Walkthrough",
        description: "Students explain how they wired and coded the traffic light circuit.",
        src: "",
        poster: "",
        duration: "3:05",
      },
    ],
    images: [],
    mediaCoverage: [
      {
        id: "stl-mc1",
        outlet: "Deccan Herald",
        title: "Mumbai-based teen brings robotics, coding to J&K students through project 'Zul'",
        url: "https://www.deccanherald.com/india/mumbai-based-teen-brings-robotics-coding-to-jk-students-through-project-zul-3479104",
        date: "2024",
      },
      {
        id: "stl-mc2",
        outlet: "The Print",
        title: "Mumbai-based teen brings robotics, coding to J-K students through project 'Zul'",
        url: "https://theprint.in/india/mumbai-based-teen-brings-robotics-coding-to-j-k-students-through-project-zul/2578804/",
        date: "2024",
      },
    ],
  },
  {
    id: "line-following-robot",
    title: "Autonomous Line-Following Robot",
    category: "Robotics",
    chapter: "Balurghat",
    year: "2024",
    description:
      "An autonomous robot that uses infrared sensors to detect and follow a pre-drawn track. Students programmed the robot using Arduino, applying concepts of sensor integration, feedback loops, and motor control.",
    videos: [
      {
        id: "lfr-v1",
        title: "Robot in Action",
        description: "The line-following robot navigating a complex track built by students.",
        src: "",
        poster: "",
        duration: "1:45",
      },
      {
        id: "lfr-v2",
        title: "Coding the Robot",
        description: "Students walk through the Arduino code powering their robot.",
        src: "",
        poster: "",
        duration: "2:30",
      },
    ],
    images: [],
    mediaCoverage: [
      {
        id: "lfr-mc1",
        outlet: "Anandabazar Patrika",
        title: "A high school student from Mumbai conducted a robotics workshop encouraging students to apply scientific knowledge",
        url: "",
        date: "2024",
      },
      {
        id: "lfr-mc2",
        outlet: "Millenium Post",
        title: "Roots Pride: Mumbai girl brings robotics workshops to Balurghat",
        url: "https://www.millenniumpost.in/bengal/roots-pride-mumbai-girl-brings-robotics-workshop-to-balurghat-642752",
        date: "2024",
      },
    ],
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation System",
    category: "IoT",
    chapter: "Haryana",
    year: "2023",
    description:
      "Students built a prototype home automation system that allows remote control of lights, fans, and alarms using a mobile interface. The project introduced students to IoT concepts, relay modules, and wireless communication.",
    videos: [
      {
        id: "sha-v1",
        title: "Smart Home Demo",
        description: "Live demo of the home automation prototype controlling appliances remotely.",
        src: "",
        poster: "",
        duration: "3:02",
      },
      {
        id: "sha-v2",
        title: "Student Presentation",
        description: "Students present their project to teachers and community members.",
        src: "",
        poster: "",
        duration: "4:15",
      },
    ],
    images: [],
    mediaCoverage: [],
  },
  {
    id: "environmental-monitor",
    title: "Environmental Monitoring Device",
    category: "Sustainability",
    chapter: "Balurghat",
    year: "2023",
    description:
      "A sensor-based device that monitors air quality, temperature, and humidity in real time. Students connected this project to local environmental concerns, using technology to generate data about their community's surroundings.",
    videos: [
      {
        id: "em-v1",
        title: "Environmental Sensor Demo",
        description: "The device displaying real-time environmental readings from the school campus.",
        src: "",
        poster: "",
        duration: "2:30",
      },
      {
        id: "em-v2",
        title: "Why We Built This",
        description: "Students explain the environmental problem they set out to solve.",
        src: "",
        poster: "",
        duration: "1:58",
      },
    ],
    images: [],
    mediaCoverage: [
      {
        id: "em-mc1",
        outlet: "ET Edge",
        title: "From Classroom to Capability: How Kaavya Majumder's Project Zūl reflects the future of India's STEM talent pipeline",
        url: "https://etedge-insights.com/in-focus/trending/from-classroom-to-capability-how-kaavya-majumders-project-zul-west-bengal-chapter-reflects-the-future-of-indias-stem-talent-pipeline/",
        date: "2024",
      },
      {
        id: "em-mc2",
        outlet: "Hilli News",
        title: "A Robotics Workshop Focused on Environment and Society: An Innovative Initiative by Kaavya Majumder",
        url: "https://www.facebook.com/reel/729789979806459",
        date: "2023",
      },
    ],
  },
];
