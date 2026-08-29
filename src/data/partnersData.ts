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
    id: "indigo",
    name: "Indigo Knowledge Prism Foundation",
    type: "Other",
    description:
      "Indigo Knowledge Prism Foundation has been a key implementation partner in taking Project Zūl into schools and building a model for sustained STEM learning. Across its network of schools, Project Zūl works with students through hands-on robotics sessions while also training teachers to continue the learning beyond individual workshops. Through its partnership, Project Zūl has brought hands-on robotics learning to KIIT-JEE Public School and two Village Research Labs established by IKP in rural Haryana.",
    location: "Haryana - Delhi",
    website: "https://theknowledgeprism.com",
    impactMetrics: [
      { label: "Schools", value: "8" },
      { label: "Students Reached", value: "3000+" },
      { label: "Teachers Trained", value: "10+" },
      { label: "Kits Deployed", value: "30+" },
    ],
    feedback: [
      {
        id: "indigo-f1",
        text: "Project Zul has trained 10 teachers online from scratch to advanced level. You are the perfect helping hand in our journey to bring technology to the villages. Because of your training and donated kits we have been able to open our village labs.",
        author: "Ashish Vishwakarma",
        role: "Project Manager, Indigo Knowledge Prism",
      },
    ],
  },
  {
    id: "masoom",
    name: "Masoom Education",
    type: "Other",
    description:
      "Through Masoom's Tech on Wheels initiative, Project Zūl brings hands-on robotics learning to students from underserved communities. Inside a bus transformed into a learning space at various locations in Mumbai, students explored robotics, electronics and circuits before building circuits of their own - turning concepts they had learned into something they could see work in front of them.",
    location: "Mumbai",
    website: "https://masoomeducation.org",
    impactMetrics: [
      { label: "Students Reached", value: "50+" },
      { label: "Sessions", value: "Regular" },
    ],
    feedback: [
      {
        id: "masoom-f1",
        text: "Through Masoom's Tech on Wheels initiative, students from underserved communities get hands-on robotics learning experience.",
        author: "Masoom Education",
        role: "Community Partner",
      },
    ],
  },
  {
    id: "gyanoday",
    name: "Gyanoday",
    type: "Other",
    description:
      "In partnership with Gyanoday, Project Zūl brings hands-on STEM learning to children in Dharavi. Through interactive robotics and electronics sessions, students move from understanding basic circuits to experimenting, building and troubleshooting for themselves - using technology as a way to spark curiosity and confidence.",
    location: "Dharavi, Mumbai",
    website: "https://gyanoday.org.in",
    impactMetrics: [
      { label: "Students Reached", value: "50+" },
      { label: "Sessions", value: "Regular" },
    ],
    feedback: [
      {
        id: "gyanoday-f1",
        text: "Will you guys come back again?",
        author: "Students from Dharavi",
        role: "Dharavi Community",
      },
    ],
  },
];
