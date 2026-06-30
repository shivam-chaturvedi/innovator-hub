export interface PartnerImpactMetric {
  label: string;
  value: string;
}

export interface PartnerFeedback {
  id: string;
  text: string;
  author: string;
  role?: string;
  date?: string;
}

export type PartnerType = "School" | "Corporate" | "NGO" | "Government" | "University" | "Other";

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  type: PartnerType;
  description: string;
  location?: string;
  website?: string;
  impactMetrics: PartnerImpactMetric[];
  feedback: PartnerFeedback[];
}

export const defaultPartners: Partner[] = [
  {
    id: "dps",
    name: "Delhi Public School",
    type: "School",
    description:
      "One of our earliest school partners, DPS has hosted multiple robotics workshops enabling students to build and program Arduino-based devices. The school's STEM lab has become a regular Project Zūl venue.",
    location: "Jammu & Kashmir",
    impactMetrics: [
      { label: "Students Reached", value: "120+" },
      { label: "Workshops Hosted", value: "4" },
      { label: "Kits Donated", value: "10" },
      { label: "Teachers Trained", value: "6" },
    ],
    feedback: [
      {
        id: "dps-f1",
        text: "I really enjoyed to create a circuit... It is really an amazing project that will give students a different approach of learning.",
        author: "Miss Minakshi Gupta",
        role: "STEM Teacher, DPS",
      },
    ],
  },
  {
    id: "jss",
    name: "JSS School",
    type: "School",
    description:
      "JSS has been an enthusiastic partner since the early days of Project Zūl. Teachers here have taken ownership of the curriculum, continuing robotics sessions independently after the initial workshop series.",
    location: "Jammu & Kashmir",
    impactMetrics: [
      { label: "Students Reached", value: "200+" },
      { label: "Workshops Hosted", value: "6" },
      { label: "Kits Donated", value: "15" },
      { label: "Teachers Trained", value: "8" },
    ],
    feedback: [
      {
        id: "jss-f1",
        text: "We need more such projects to improve our technical and practical skills so that we can indulge our students in this in a better way.",
        author: "Miss Anupama Sharma",
        role: "Teacher, JSS",
      },
      {
        id: "jss-f2",
        text: "Learning experience was great as so much hand on activities were done ..really thankful.",
        author: "Miss Radihka Handa",
        role: "Teacher, JSS",
      },
    ],
  },
  {
    id: "chingispur-hs",
    name: "Chingispur High School",
    type: "School",
    description:
      "Located in a rural area of West Bengal, Chingispur High School exemplifies the reach of Project Zūl into underserved communities. The school's collaboration has been a model for how rural schools can adopt STEM education.",
    location: "West Bengal",
    impactMetrics: [
      { label: "Students Reached", value: "80+" },
      { label: "Workshops Hosted", value: "3" },
      { label: "Kits Donated", value: "8" },
      { label: "Teachers Trained", value: "4" },
    ],
    feedback: [
      {
        id: "chingispur-f1",
        text: "I am confident that we will collaborate on several exciting projects and that your time here — sharing your expertise and donating the kits — will be well worth the effort.",
        author: "Mr. Manabesh Laha",
        role: "Coordinator, Chingispur High School",
      },
    ],
  },
  {
    id: "teor-ka-hs",
    name: "Teor KA High School",
    type: "School",
    description:
      "A village school that joined Project Zūl's West Bengal chapter, Teor KA High School has provided students with their first-ever exposure to robotics and coding, sparking aspirations for national-level competitions.",
    location: "West Bengal",
    impactMetrics: [
      { label: "Students Reached", value: "60+" },
      { label: "Workshops Hosted", value: "2" },
      { label: "Kits Donated", value: "5" },
      { label: "Teachers Trained", value: "3" },
    ],
    feedback: [
      {
        id: "teor-f1",
        text: "As a village school, we never imagined receiving the level of exposure that Project Zul has provided. We sincerely thank you for the training, the kits, and your dedicated efforts.",
        author: "Mr. Protap Ghosh",
        role: "Principal, Teor KA High School",
      },
    ],
  },
  {
    id: "techno-india",
    name: "Techno India Public School",
    type: "School",
    description:
      "Techno India Public School has integrated Project Zūl's curriculum into its extracurricular STEM programme, with students now eyeing participation in national robotics competitions.",
    location: "West Bengal",
    impactMetrics: [
      { label: "Students Reached", value: "150+" },
      { label: "Workshops Hosted", value: "5" },
      { label: "Kits Donated", value: "12" },
      { label: "Teachers Trained", value: "5" },
    ],
    feedback: [
      {
        id: "techno-f1",
        text: "The students demonstrated great enthusiasm, and with the continued support of Project Zul, we hope they will be able to participate in national-level competitions.",
        author: "Mr. Subhajyoti Sinha",
        role: "Principal, Techno India Public School",
      },
    ],
  },
];
