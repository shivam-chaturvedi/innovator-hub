// ─── Types ────────────────────────────────────────────────────────────────────

export interface GalleryImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ChapterVideo {
  id: string;
  title: string;
  description: string;
  /** Video source URL. Empty string signals a placeholder. */
  src: string;
  /** Poster / thumbnail URL */
  poster?: string;
  duration: string;
}

export interface ChapterAward {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ChapterSections {
  about: boolean;
  chapterStory: boolean;
  videoRow1: boolean;
  videoRow2: boolean;
  gallery: boolean;
  awards: boolean;
}

export interface ChapterLead {
  name: string;
  title?: string;
  bio: string[];
  image?: string;
}

export interface ChapterData {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string[];
  lead: ChapterLead | null;
  stats: { label: string; value: string }[];
  featuredVideo: ChapterVideo;
  videoRow1: { sectionTitle: string; videos: ChapterVideo[] };
  videoRow2: { sectionTitle: string; videos: ChapterVideo[] };
  gallery: { sectionTitle: string; images: GalleryImageItem[] };
  awards: ChapterAward[];
  sections: ChapterSections;
}

// ─── Default data ─────────────────────────────────────────────────────────────

export const defaultChapters: ChapterData[] = [
  // ── Balurghat ────────────────────────────────────────────────────────────────
  {
    id: "balurghat",
    name: "Balurghat",
    region: "West Bengal",
    tagline: "Bringing robotics to every classroom in West Bengal",
    description: [
      "Following the success of Project Zūl in Jammu & Kashmir, the Balurghat chapter is expanding practical robotics learning to West Bengal. The Balurghat chapter brings hands-on robotics learning to local schools through Arduino-based workshops. Students learn electronics, coding, and problem-solving while building projects that address real challenges in their communities.",
      "The program is designed to be self-sustaining. Teachers are trained, schools receive robotics kits, and structured lesson plans help them continue the program independently.",
      "So far, the initiative has reached 600+ students across 6 schools, trained 25+ teachers, and donated 40 Arduino kits, enabling schools to continue robotics education beyond the initial workshops.",
    ],
    lead: {
      name: "Kaavya Majumder",
      bio: [
        "Kaavya is a student from Mumbai interested in how technology, sustainability, and systems thinking intersect to solve real-world problems. Her work ranges from building platforms for sustainable lifestyle and community like Climate Crusaders, to developing a device designed to monitor groundwater levels.",
        "Her academic interests focus on modelling complex systems and networks — understanding how ideas, behaviors, and environmental changes spread through interconnected systems.",
        "Through Project Zūl, Kaavya hopes to inspire students to see technology not just as something they study, but as a tool they can use to solve problems in their own communities.",
      ],
    },
    stats: [
      { label: "Students", value: "600+" },
      { label: "Schools", value: "6" },
      { label: "Teachers", value: "25+" },
      { label: "Arduino Kits", value: "40" },
    ],
    featuredVideo: {
      id: "bv-featured",
      title: "Chapter Story — Balurghat",
      description: "Meet the students, mentors, and teachers who made Balurghat their own lab.",
      src: "https://video.wixstatic.com/video/02b2cd_efe7c821083141f696802d27560260e2/1080p/mp4/file.mp4",
      duration: "3:45",
    },
    videoRow1: {
      sectionTitle: "Impact Reels",
      videos: [
        {
          id: "bv1", title: "Workshop Day 1", description: "First hands-on Arduino session with students.", src: "", duration: "1:20",
        },
        {
          id: "bv2", title: "Sensor Lab", description: "Students build light and temperature sensors.", src: "", duration: "2:05",
        },
        {
          id: "bv3", title: "Final Showcase", description: "Community showcase of student-built robots.", src: "", duration: "1:45",
        },
        {
          id: "bv4", title: "Teacher Training", description: "Training 25+ teachers to run the program independently.", src: "", duration: "2:30",
        },
      ],
    },
    videoRow2: {
      sectionTitle: "Community Stories",
      videos: [
        {
          id: "bv5", title: "Kit Distribution", description: "Distributing 40 Arduino kits to local schools.", src: "", duration: "1:55",
        },
        {
          id: "bv6", title: "Parents Speak", description: "Families share how the program changed their children.", src: "", duration: "2:15",
        },
        {
          id: "bv7", title: "Student Projects", description: "Students present their homegrown solutions.", src: "", duration: "1:30",
        },
      ],
    },
    gallery: {
      sectionTitle: "Field Notes from Balurghat",
      images: [],
    },
    awards: [
      { id: "ba1", title: "Best Chapter Initiative", year: "2024", organization: "Project Zūl National" },
      { id: "ba2", title: "Youth STEM Outreach Award", year: "2023", organization: "West Bengal Govt." },
    ],
    sections: {
      about: true,
      chapterStory: true,
      videoRow1: true,
      videoRow2: true,
      gallery: true,
      awards: true,
    },
  },

  // ── Haryana ──────────────────────────────────────────────────────────────────
  {
    id: "haryana",
    name: "Haryana",
    region: "North India",
    tagline: "Green fields, greener futures — robotics meets sustainability",
    description: [
      "The Haryana chapter of Project Zūl brings cutting-edge robotics and sustainability education to schools across North India. Students explore how technology can solve real environmental challenges — from solar irrigation monitoring to air quality sensing.",
      "Our hands-on workshops train students to design, build, and deploy Arduino-based systems that address local problems. Every kit donated stays with the school, ensuring the program continues independently.",
      "The chapter is built on community partnerships with local schools, NGOs, and government bodies committed to STEM education for all.",
    ],
    lead: null,
    stats: [
      { label: "Schools", value: "4" },
      { label: "Students", value: "350+" },
      { label: "Teachers Trained", value: "18" },
      { label: "Kits Donated", value: "20" },
    ],
    featuredVideo: {
      id: "hv-featured",
      title: "Chapter Story — Haryana",
      description: "A journey through Haryana's sustainable revolution — from wheat fields to student-built robots.",
      src: "",
      duration: "4:32",
    },
    videoRow1: {
      sectionTitle: "Impact Reels",
      videos: [
        { id: "hv1", title: "Solar Fields", description: "How Haryana students are building solar-powered irrigation monitors.", src: "", duration: "1:20" },
        { id: "hv2", title: "Water Harvest", description: "Rainwater monitoring projects built by students across rural Haryana.", src: "", duration: "2:05" },
        { id: "hv3", title: "Tree Drive", description: "School students planting and tracking 10,000 trees using Arduino sensors.", src: "", duration: "1:45" },
        { id: "hv4", title: "Eco Markets", description: "Zero-waste market monitoring systems built by student teams.", src: "", duration: "2:30" },
      ],
    },
    videoRow2: {
      sectionTitle: "Community Stories",
      videos: [
        { id: "hv5", title: "Clean Air Lab", description: "Air quality monitoring programs in Gurugram schools.", src: "", duration: "1:55" },
        { id: "hv6", title: "Soil Sensors", description: "Organic farming initiatives using student-built soil monitors.", src: "", duration: "2:15" },
        { id: "hv7", title: "Youth Innovators", description: "Meet the student eco-champions changing Haryana's future.", src: "", duration: "1:30" },
        { id: "hv8", title: "Wind Turbine Lab", description: "Mini wind energy experiments at rural Haryana schools.", src: "", duration: "3:00" },
      ],
    },
    gallery: {
      sectionTitle: "Field Notes from Haryana",
      images: [],
    },
    awards: [
      { id: "ha1", title: "Best Green Chapter Award", year: "2024", organization: "Project Zūl National" },
      { id: "ha2", title: "State STEM Initiative Award", year: "2023", organization: "Haryana Govt." },
    ],
    sections: {
      about: true,
      chapterStory: true,
      videoRow1: true,
      videoRow2: true,
      gallery: true,
      awards: true,
    },
  },

  // ── Kashmir ──────────────────────────────────────────────────────────────────
  {
    id: "kashmir",
    name: "Kashmir",
    region: "Jammu & Kashmir",
    tagline: "The origin story — where Project Zūl began",
    description: [
      "Kashmir is where Project Zūl was born. The original chapter began with a simple question: how do you bring hands-on STEM education to students who have limited access to technology labs and infrastructure?",
      "Working with local schools across Jammu & Kashmir, Project Zūl developed the Arduino-based curriculum that has since been replicated in chapters across India. Students in Kashmir have built air quality monitors, earthquake early-warning prototypes, and solar energy trackers.",
      "The program has expanded from a single school pilot to a network of schools in the region, with students serving as peer mentors and leading workshops themselves.",
    ],
    lead: null,
    stats: [
      { label: "Schools", value: "8" },
      { label: "Students", value: "500+" },
      { label: "Teachers Trained", value: "30" },
      { label: "Years Running", value: "3" },
    ],
    featuredVideo: {
      id: "kv-featured",
      title: "Chapter Story — Kashmir",
      description: "The origin story of Project Zūl — how one classroom in J&K sparked a national movement.",
      src: "",
      duration: "5:10",
    },
    videoRow1: {
      sectionTitle: "Impact Reels",
      videos: [
        { id: "kv1", title: "First Workshop", description: "The very first robotics workshop that started it all.", src: "", duration: "2:20" },
        { id: "kv2", title: "Air Quality Monitor", description: "Students build sensors to track air quality near Dal Lake.", src: "", duration: "1:50" },
        { id: "kv3", title: "Earthquake Alert", description: "A prototype earthquake early-warning system built by 9th graders.", src: "", duration: "3:15" },
        { id: "kv4", title: "Solar Tracker", description: "Students design a solar panel orientation tracker.", src: "", duration: "2:00" },
      ],
    },
    videoRow2: {
      sectionTitle: "Community Stories",
      videos: [
        { id: "kv5", title: "Peer Mentors", description: "How older students now lead workshops for younger peers.", src: "", duration: "1:40" },
        { id: "kv6", title: "Teacher Stories", description: "Teachers reflect on three years of the program.", src: "", duration: "2:35" },
        { id: "kv7", title: "Parent Impact", description: "Families describe the change they see at home.", src: "", duration: "1:55" },
        { id: "kv8", title: "Future Builders", description: "Students share their goals after participating in Project Zūl.", src: "", duration: "2:10" },
      ],
    },
    gallery: {
      sectionTitle: "Field Notes from Kashmir",
      images: [],
    },
    awards: [
      { id: "ka1", title: "National Innovation Award", year: "2024", organization: "NITI Aayog" },
      { id: "ka2", title: "J&K STEM Excellence", year: "2023", organization: "J&K Govt." },
      { id: "ka3", title: "Best Youth Initiative", year: "2022", organization: "Project Zūl Foundation" },
    ],
    sections: {
      about: true,
      chapterStory: true,
      videoRow1: true,
      videoRow2: true,
      gallery: true,
      awards: true,
    },
  },
];
