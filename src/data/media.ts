import etEdgeLogo from "@/assets/media-kaavya/et-edge-logo.jpeg";
import etEdgeScreenshot from "@/assets/media-kaavya/et-edge-screenshot.png";
import milleniumPostLogo from "@/assets/media-kaavya/millenium-post-logo.png";
import milleniumPostScreenshot from "@/assets/media-kaavya/millenium-post-screenshot.png";
import tv9Logo from "@/assets/media-kaavya/tv9-logo.jpeg";
import tv9Screenshot from "@/assets/media-kaavya/tv9-screenshot.png";
import ddLocalLogo from "@/assets/media-kaavya/dd-local-logo.jpg";
import ddLocalScreenshot from "@/assets/media-kaavya/dd-local-screenshot.png";
import hilliNewsLogo from "@/assets/media-kaavya/hilli-news-logo.jpg";
import hilliNewsScreenshot from "@/assets/media-kaavya/hilli-news-screenshot.png";
import anandabazarLogo from "@/assets/media-kaavya/anandabazar-logo.jpeg";
import anandabazarScreenshot from "@/assets/media-kaavya/anandabazar-screenshot.png";
import eiSamayLogo from "@/assets/media-kaavya/ei-samay-logo.png";
import eiSamayScreenshot from "@/assets/media-kaavya/ei-samay-screenshot.jpeg";
import deccanHeraldLogo from "@/assets/media-arav/deccan-herald-logo.png";
import deccanHeraldScreenshot from "@/assets/media-arav/deccan-herald-screenshot.png";
import telegraphIndiaLogo from "@/assets/media-arav/telegraph-india-logo.png";
import telegraphIndiaScreenshot from "@/assets/media-arav/telegraph-india-screenshot.png";
import greaterKashmirLogo from "@/assets/media-arav/greater-kashmir-logo.png";
import greaterKashmirScreenshot from "@/assets/media-arav/greater-kashmir-screenshot.png";
import thePrintLogo from "@/assets/media-arav/the-print-logo.png";
import thePrintScreenshot from "@/assets/media-arav/the-print-screenshot.png";
import kashmirAheadLogo from "@/assets/media-arav/kashmir-ahead-logo.png";
import kashmirAheadScreenshot from "@/assets/media-arav/kashmir-ahead-screenshot.png";
import ptiLogo from "@/assets/media-arav/pti-logo.png";
import ptiScreenshot from "@/assets/media-arav/pti-screenshot.png";
import risingKashmirLogo from "@/assets/media-arav/rising-kashmir-logo.png";
import risingKashmirScreenshot from "@/assets/media-arav/rising-kashmir-screenshot.png";
import amarUjalaLogo from "@/assets/media-arav/amar-ujala-logo.png";
import amarUjalaScreenshot from "@/assets/media-arav/amar-ujala-screenshot.png";
import lokmatTimesLogo from "@/assets/media-arav/lokmat-times-logo.png";
import lokmatTimesScreenshot from "@/assets/media-arav/lokmat-times-screenshot.png";

export type MediaStory = {
  name: string;
  logo?: string | null;
  screenshot?: string | null;
  title: string;
  summary: string;
  url: string | null;
  highlight?: boolean;
  date?: string;
};

export type MediaLogoLink = {
  name: string;
  logo: string;
  url: string;
};

export const kaavyaMediaStories: MediaStory[] = [
  {
    name: "ET Edge",
    logo: etEdgeLogo,
    screenshot: etEdgeScreenshot,
    title:
      "From Classroom to Capability: How Kaavya Majumder’s Project Zūl – West Bengal chapter reflects the future of India’s STEM talent pipeline",
    summary:
      "A feature that follows Kaavya’s journey home to Balurghat, highlighting how hands-on robotics kits, teacher mentorship, and community showcase events are building India’s future STEM talent.",
    url: "https://etedge-insights.com/in-focus/trending/from-classroom-to-capability-how-kaavya-majumders-project-zul-west-bengal-chapter-reflects-the-future-of-indias-stem-talent-pipeline/",
    highlight: true,
  },
  {
    name: "Anandabazar Patrika",
    logo: anandabazarLogo,
    screenshot: anandabazarScreenshot,
    title:
      "A high school student from Mumbai conducted a robotics workshop encouraging students to apply scientific knowledge to solve environmental problems around them",
    summary:
      "A print feature celebrating how Kaavya encourages students to take scientific thinking outside the classroom and tackle local environmental challenges using robotics.",
    url: null,
  },
  {
    name: "Ei Samay Patrika",
    logo: eiSamayLogo,
    screenshot: eiSamayScreenshot,
    title: "Robotics Workshop by Mumbai Teen on Applying STEM to Solve Real-World Problems",
    summary:
      "Covers the recent Balurghat workshop where students learn, code, and document real-world solutions using sensors and Arduino boards.",
    url: null,
  },
  {
    name: "Millenium Post",
    logo: milleniumPostLogo,
    screenshot: milleniumPostScreenshot,
    title: "Roots Pride: Mumbai girl brings robotics workshops to Balurghat",
    summary:
      "Explores how Kaavya returns to her roots with free robotics sessions, demonstrating that curiosity, not geography, fuels innovation.",
    url: "https://www.millenniumpost.in/bengal/roots-pride-mumbai-girl-brings-robotics-workshop-to-balurghat-642752",
  },
  {
    name: "TV9 Bangla",
    logo: tv9Logo,
    screenshot: tv9Screenshot,
    title:
      "Kaavya Majumder, a young student has begun introducing robotics workshops in local schools, where students have shown strong interest in the device she developed.",
    summary:
      "Television coverage showing how Kaavya’s curriculum and mentorship are inspiring a new wave of robotics curiosity in Dakshin Dinajpur.",
    url: "https://tv9bangla.com/west-bengal/dakshin-dinajpur/kavya-girl-from-balurghat-giving-training-to-school-students-on-robotics-1272434.html",
  },
  {
    name: "DD Local",
    logo: ddLocalLogo,
    screenshot: ddLocalScreenshot,
    title: "Back to Her Roots: Mumbai teen returns to Balurghat to share Robotics knowledge",
    summary:
      "Regional news short film celebrating the moment Kaavya brings robotics kits and curriculum back to the community that raised her family.",
    url: "https://www.facebook.com/reel/956031597589899",
  },
  {
    name: "Hilli News",
    logo: hilliNewsLogo,
    screenshot: hilliNewsScreenshot,
    title:
      "A Robotics Workshop Focused on Environment and Society: An Innovative Initiative by Kaavya Majumder in Balurghat",
    summary:
      "Highlights the environmental angle of Kaavya’s teaching approach, pairing robotics with local ecosystem problem-solving.",
    url: "https://www.facebook.com/reel/729789979806459",
  },
];

export const aravMediaStories: MediaStory[] = [
  {
    name: "Deccan Herald",
    logo: deccanHeraldLogo,
    screenshot: deccanHeraldScreenshot,
    title: "Mumbai-based teen brings robotics, coding to J&K students through project 'Zul'",
    summary:
      "Coverage of the Mumbai teen bringing hands-on robotics and coding to J&K classrooms, framing Project Zūl as the start of a longer push to build a culture of innovation among participating schools.",
    url: "https://www.deccanherald.com/india/mumbai-based-teen-brings-robotics-coding-to-jk-students-through-project-zul-3479104",
    highlight: true,
  },
  {
    name: "The Telegraph India",
    logo: telegraphIndiaLogo,
    screenshot: telegraphIndiaScreenshot,
    title: "Mumbai teen’s STEM project, 'Zul' ignites coding spark in Jammu and Kashmir students",
    summary:
      "Profiles Arav Kaul, an international robotics champion who has competed for India at FIRST, Robotex, and MakeX, on the weekly J&K sessions running circuitry, sensors, coding, and project design from February through April.",
    url: "https://www.telegraphindia.com/india/mumbai-teens-stem-project-zul-ignites-coding-spark-in-jammu-and-kashmir-students/cid/2092554#goog_rewarded",
  },
  {
    name: "Greater Kashmir",
    logo: greaterKashmirLogo,
    screenshot: greaterKashmirScreenshot,
    title: "Innovation Takes Flight: J&K Students Dive into Robotics with Project Zul",
    summary:
      "Details how Arav's workshops trained educators across 15 schools and put free Arduino kits in the hands of 1,000+ students, with Lieutenant Governor Manoj Sinha commending the initiative.",
    url: "https://www.greaterkashmir.com/business/innovation-takes-flight-jk-students-dive-into-robotics-with-project-zul/",
  },
  {
    name: "The Print",
    logo: thePrintLogo,
    screenshot: thePrintScreenshot,
    title: "Mumbai-based teen brings robotics, coding to J-K students through project ‘Zul’",
    summary:
      "Reports on Project Zūl's rollout of weekly teacher-training sessions and Arduino kit distribution across J&K, building toward a student showcase, with Arav quoted on robotics as a tool for creative problem-solving.",
    url: "https://theprint.in/india/mumbai-based-teen-brings-robotics-coding-to-j-k-students-through-project-zul/2578804/",
  },
  {
    name: "Kashmir Ahead",
    logo: kashmirAheadLogo,
    screenshot: kashmirAheadScreenshot,
    title: "Mumbai-based teen brings robotics, coding to J&K students through project Zul",
    summary:
      "Local coverage of the initiative's reach across 15 schools and 1,000+ students, and Arav's meeting with Lieutenant Governor Manoj Sinha, who praised the programme's alignment with the region's tech ambitions.",
    url: "https://kashmirahead.com/mumbai-based-teen-brings-robotics-coding-to-jk-students-through-project-zul/",
  },
  {
    name: "Press Trust of India",
    logo: ptiLogo,
    screenshot: ptiScreenshot,
    title: "Mumbai-based teen brings robotics, coding to J-K students through project 'Zul'",
    summary:
      "The original wire report on Project Zūl, carried nationally: teachers from 15 government and private schools trained, 1,000+ students equipped with free Arduino kits, and Jammu Sanskriti School's Anupama Sharma noting, \"We require more such initiatives to enhance our technical capabilities.\"",
    url: "https://www.ptinews.com/story/national/mumbai-based-teen-brings-robotics-coding-to-j-k-students-through-project-zul-/2435995",
  },
  {
    name: "Rising Kashmir",
    logo: risingKashmirLogo,
    screenshot: risingKashmirScreenshot,
    title: "Project Zūl: Teenager Arav Kaul brings global Robotics expertise to J&K students",
    summary:
      "A regional feature on Arav Kaul bringing his competitive robotics background to J&K classrooms, training teachers and distributing kits so schools can keep the program running independently.",
    url: "https://risingkashmir.com/project-zul-teenager-arav-kaul-brings-global-robotics-expertise-to-jk-students",
  },
  {
    name: "Amar Ujala",
    logo: amarUjalaLogo,
    screenshot: amarUjalaScreenshot,
    title:
      "Project Zul: मुंबई के किशोर ने लॉन्च किया 'ज़ुल', रोबोटिक्स और कोडिंग में हाथ आजमाएंगे जम्मू-कश्मीर के छात्र",
    summary:
      "Hindi-language coverage of the initiative, noting Arav's personal tie to the region through his father and the free Arduino kits reaching students in grades 9 and 10.",
    url: "https://www.amarujala.com/technology/tech-diary/mumbai-teenager-teaches-robotics-and-coding-to-students-of-jammu-and-kashmir-through-zul-project-2025-04-05?pageId=5",
  },
  {
    name: "Lokmat Times",
    logo: lokmatTimesLogo,
    screenshot: lokmatTimesScreenshot,
    title:
      "Mumbai Based Teen Arav Kaul Launches Project Zul In Jammu And Kashmir To Teach Robotics And Coding To Students.",
    summary:
      "Reports on the launch of Project Zūl, highlighting Arav's personal connection to Jammu & Kashmir through his father and the teacher-training model behind the initiative's 15-school rollout.",
    url: "https://www.lokmattimes.com/mumbai/mumbai-based-teen-arav-kaul-launches-project-zul-in-jammu-and-kashmir-to-teach-robotics-and-coding-to-students-a510/",
  },
  {
    name: "News Arena India",
    title: "Mumbai teen's Project Zul brings robotics to J&K classrooms",
    summary:
      "Coverage of Arav Kaul's Project Zūl reaching 1,000+ students across 15 J&K schools, with Lieutenant Governor Manoj Sinha's commendation and Arav's quote on robotics as a medium for problem-solving.",
    url: "https://newsarenaindia.com/states/mumbai-teen-s-project-zul-brings-robotics-to-j-k-classrooms/40622",
  },
];

export const aravHomeMediaLinks: MediaLogoLink[] = aravMediaStories
  .filter((story): story is MediaStory & { url: string } => Boolean(story.url))
  .filter((story): story is MediaStory & { url: string; logo: string } => Boolean(story.logo))
  .map((story) => ({ name: story.name, logo: story.logo as string, url: story.url as string }));

export const kaavyaHomeMediaLinks: MediaLogoLink[] = kaavyaMediaStories
  .filter((story): story is MediaStory & { url: string } => Boolean(story.url))
  .filter((story): story is MediaStory & { url: string; logo: string } => Boolean(story.logo))
  .map((story) => ({ name: story.name, logo: story.logo as string, url: story.url as string }));
