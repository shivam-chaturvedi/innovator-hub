import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageViewer, { GalleryImage } from "@/components/ImageViewer";
import PageLayout from "@/components/PageLayout";
import lesson3Cover from "@/assets/lessons/3.jpeg";
import lesson4Cover from "@/assets/lessons/4.jpeg";
import lesson5Cover from "@/assets/lessons/5.jpeg";
import lesson6Cover from "@/assets/lessons/6.jpeg";
import lessonCover1 from "@/assets/lessons/lesson-1.jpeg";
import lessonCover2 from "@/assets/lessons/lesson-2.jpeg";

type LessonItem = {
  title: string;
  description: string;
  highlights: string[];
  url: string;
  screenshot: string;
  screenshotAlt: string;
};

const lessonDetails: LessonItem[] = [
  {
    title: "Lesson 1 · Robotics Foundations",
    description:
      "This lesson introduces students to the world of robotics. They learn what robots are, where they are used in real life, and why robotics is important for the future. The session also introduces Arduino and explains how hardware and software work together in a robot.",
    highlights: [
      "Safely power the Arduino UNO starter kit and confirm wiring",
      "Use the LED workbook to practice connecting resistors, diodes, and jumpers",
      "Map analog sensor values to digital outputs for confidence before building",
    ],
    url: "https://canva.link/34kfyzrrf4xs4qt",
    screenshot: lessonCover1,
    screenshotAlt: "Lesson 1 cover slide with robotics introduction",
  },
  {
    title: "Lesson 2 · Circuit Storytelling",
    description:
      "Students begin working with Arduino and learn the fundamentals of electronics. The lesson explains how to connect components using a breadboard and how sensors receive power and communicate with the Arduino board. This session prepares students for hands-on circuit building.",
    highlights: [
      "Sketch the behavior of each component before touching the breadboard",
      "Pair LEDs with timing delays to simulate real-world alerts",
      "Document the design using the Canva workbook prompts from Kavya",
    ],
    url: "https://canva.link/qrx5moesppxy56y",
    screenshot: lessonCover2,
    screenshotAlt: "Lesson 2 cover slide with electronics fundamentals",
  },
  {
    title: "Lesson 3 · Sensor Signals",
    description:
      "This lesson introduces students to the Arduino IDE and the basics of programming an Arduino. They learn what code is, how the IDE is used to write and upload programs, and how an Arduino program is structured with setup() and loop(). The class covers constants, data types, pinMode(), digitalWrite(), and delay(), before tasking them with programming three LEDs to light up in sequence.",
    highlights: [
      "Read analog sensor values in the Arduino IDE and visualize them on the serial plotter",
      "Calibrate light and touch sensors so responses feel reliable",
      "Use conditional statements to change outputs based on readings",
    ],
    url: "https://canva.link/jkegxmij02330az",
    screenshot: lesson3Cover,
    screenshotAlt: "Lesson 3 cover slide with IDE introduction",
  },
  {
    title: "Lesson 4 · Logic & Loops",
    description:
      "This lesson introduces students to sensors and how robots use them to understand their environment. They learn what sensors are, how they detect physical changes such as light or temperature, and how these readings are captured by Arduino code. Analogue and digital signals are explained before a hands-on task building and programming a smart nightlight with an LDR sensor and an LED.",
    highlights: [
      "Turn repetition into choreography with for/while loops",
      "Share code snippets that keep motors and LEDs synced",
      "Encourage reflecting on where loops behave unexpectedly and how to fix them",
    ],
    url: "https://canva.link/5u7unfdu6bdsijq",
    screenshot: lesson4Cover,
    screenshotAlt: "Lesson 4 cover slide with sensors",
  },
  {
    title: "Lesson 5 · Data Stories",
    description:
      "This lesson teaches students how to use buttons as inputs in Arduino projects and how code can respond to user actions. They see how buttons work in circuits, how to wire them correctly, and why debouncing is important. The session introduces logical operators, if-else statements, loops, and millis(), before guiding students toward mini projects such as an LED dice, traffic light, and reaction timer.",
    highlights: [
      "Store light and motion data locally before sending it over serial",
      "Convert analog spikes into easy-to-read color or movement cues",
      "Create short reflection notes on how the data matches the real space",
    ],
    url: "https://canva.link/uifzgssm78oyl77",
    screenshot: lesson5Cover,
    screenshotAlt: "Lesson 5 cover slide with button inputs",
  },
  {
    title: "Lesson 6 · Project Showcase",
    description:
      "This final lesson focuses on applying everything students have learned to build and present their own Arduino projects. They revisit key programming concepts and explore examples like an LED dice, a traffic light system, and a reaction-time tester that demonstrate random number generation, button inputs, conditional logic, and millis() timing. Each group presents their project and reflects on what they built.",
    highlights: [
      "Use Canva templates to document the project journey before the final demo",
      "Practice presenting with a focus on why the idea matters to the community",
      "Reflect on what each team member learned and what comes next",
    ],
    url: "https://canva.link/3dgg9rqbb7cb20p",
    screenshot: lesson6Cover,
    screenshotAlt: "Lesson 6 cover slide with project showcase",
  },
];

const lessonGallery: GalleryImage[] = lessonDetails.map((lesson) => ({
  src: lesson.screenshot,
  alt: lesson.screenshotAlt,
}));

const LessonsPage = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setFocusedIndex(index);
  const closeViewer = () => setFocusedIndex(null);
  const nextImage = () => {
    if (focusedIndex === null) return;
    setFocusedIndex((prev) => (prev === null ? null : (prev + 1) % lessonGallery.length));
  };
  const prevImage = () => {
    if (focusedIndex === null) return;
    setFocusedIndex((prev) => (prev === null ? null : (prev - 1 + lessonGallery.length) % lessonGallery.length));
  };

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Curriculum</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">Lessons</h1>
            <p className="text-muted-foreground">
              These lessons guide students from their first introduction to robotics to building real working systems.
              By combining electronics, coding, and problem-solving, the curriculum helps students understand how
              technology can be used to address challenges in their communities.
            </p>
          </motion.div>

          <div className="space-y-10">
            {lessonDetails.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[32px] border border-border bg-card p-6"
              >
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="font-heading text-2xl font-bold">{lesson.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{lesson.description}</p>
                    <Button asChild size="sm" className="font-heading text-xs px-4">
                      <a href={lesson.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="w-3 h-3" />
                        View Lesson
                      </a>
                    </Button>
                  </div>
                  <button
                    onClick={() => openViewer(index)}
                    className="overflow-hidden rounded-3xl border border-border bg-background p-2 transition hover:border-primary/70 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
                  >
                    <div className="relative aspect-[16/9]">
                      <img
                        src={lesson.screenshot}
                        alt={lesson.screenshotAlt}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        style={{ objectPosition: "50% 60%" }}
                        loading="lazy"
                      />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ImageViewer
          images={lessonGallery}
          currentIndex={focusedIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </section>
    </PageLayout>
  );
};

export default LessonsPage;
