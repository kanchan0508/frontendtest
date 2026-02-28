export interface CourseCardData {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  seatsIcon: string;
  avatars: string[];
  seatsLabel: string;
  badgeLabel: string;
}

export interface CurriculumItem {
  index: number;
  title: string;
  lessons: string;
  duration: string;
  tone: "yellow" | "green" | "purple";
}

export interface CourseDetailData extends CourseCardData {
  moduleLabel: string;
  courseStatus: string;
  statusBadge: string;
  statusBadgeTone: "green";
  priceLabel: string;
  longDescription: string;
  studentsCount: string;
  durationLabel: string;
  lessonsLabel: string;
  ratingLabel: string;
  highlights: string[];
  learnIntro: string;
  objectives: string[];
  curriculum: CurriculumItem[];
  instructor: {
    name: string;
    role: string;
    bio: string;
    years: string;
    avatar: string;
    credentials: string[];
  };
  headerBackIcon: string;
  statsStudentIcon: string;
  statsDurationIcon: string;
  highlightsTopDecoration: string;
  highlightsCardIcon: string;
}

const BASE_CURRICULUM: CurriculumItem[] = [
  { index: 1, title: "Understanding Stress", lessons: "3 lessons", duration: "45 min", tone: "yellow" },
  { index: 2, title: "Mindfulness Fundamentals", lessons: "3 lessons", duration: "60 min", tone: "green" },
  { index: 3, title: "Breathing & Relaxation Techniques", lessons: "3 lessons", duration: "50 min", tone: "purple" },
  { index: 4, title: "Cognitive Restructuring", lessons: "3 lessons", duration: "55 min", tone: "yellow" },
  { index: 5, title: "Time Management & Boundaries", lessons: "3 lessons", duration: "45 min", tone: "green" },
  { index: 6, title: "Building Resilience", lessons: "3 lessons", duration: "60 min", tone: "purple" },
  { index: 7, title: "Lifestyle & Wellness", lessons: "3 lessons", duration: "50 min", tone: "yellow" },
  { index: 8, title: "Creating Your Action Plan", lessons: "3 lessons", duration: "40 min", tone: "green" },
];

export const COURSE_DETAILS: CourseDetailData[] = [
  {
    id: "stress-management-masterclass",
    moduleLabel: "AMPL Module 1",
    courseStatus: "Ongoing Course",
    statusBadge: "Enrolled • In Progress",
    statusBadgeTone: "green",
    priceLabel: "₹4,999",
    title: "Stress Management Masterclass",
    shortDescription: "Keep improving the quality of your health keep improving the quality of your health",
    longDescription:
      "Master the art of managing stress and maintaining mental well-being in today's fast-paced world. Learn evidence-based techniques to reduce anxiety, improve focus, and enhance your overall quality of life.",
    studentsCount: "12,945",
    durationLabel: "8 Weeks",
    lessonsLabel: "24 Lessons",
    ratingLabel: "4.9/5.0",
    seatsLabel: "12/40 Seats Filled",
    badgeLabel: "Beginner Friendly",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/Jx1bt6gst1.png",
    seatsIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/gD6cdrnUBN.png",
    avatars: [
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/O6x3oaHXqn.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/SnbR4CVArS.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/a1w7NEQDFn.png",
    ],
    highlights: [
      "Self-paced learning with lifetime access",
      "Live guided practice sessions",
      "Evidence-based psychological tools",
      "Practical exercises for daily life",
    ],
    learnIntro:
      "This comprehensive course covers essential stress management techniques that you can apply immediately in your daily life. Through a combination of theory and practical exercises, you'll develop skills to handle pressure effectively.",
    objectives: [
      "Identify and understand your stress triggers",
      "Practice grounding and breathwork methods",
      "Build healthier cognitive response patterns",
      "Develop practical emotional regulation habits",
      "Create a sustainable anti-burnout routine",
      "Track progress with weekly reflection plans",
    ],
    curriculum: BASE_CURRICULUM,
    instructor: {
      name: "Dr. Sudeep Gangwar",
      role: "Clinical Psychologist & Wellness Coach",
      bio: "Dr. Sudeep Gangwar is a renowned clinical psychologist specializing in stress management and cognitive behavioral therapy. With over 15 years of experience, she has helped thousands of individuals overcome anxiety and build resilience.",
      years: "15+ years",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/EuDUFd2Cjr.png",
      credentials: [
        "Certified CBT Practitioner",
        "Published Author (3 books)",
        "50,000+ Students Taught",
        "Featured TEDx Speaker",
      ],
    },
    headerBackIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/RdOK9Pf0YR.png",
    statsStudentIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/j1fmORFOWD.png",
    statsDurationIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LzDqWJZdYU.png",
    highlightsTopDecoration: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LbQqOQhQSe.png",
    highlightsCardIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/axy8pFOyKw.png",
  },
  {
    id: "mindfulness-reset",
    moduleLabel: "AMPL Module 2",
    courseStatus: "New Course",
    statusBadge: "Enrolled • In Progress",
    statusBadgeTone: "green",
    priceLabel: "₹3,999",
    title: "Mindfulness Reset Program",
    shortDescription: "Build a calmer mind and stronger focus through mindful routines",
    longDescription:
      "Build mindful awareness and emotional balance through guided practices that fit into your routine. Learn simple tools for staying grounded, centered, and intentional throughout your day.",
    studentsCount: "9,210",
    durationLabel: "6 Weeks",
    lessonsLabel: "20 Lessons",
    ratingLabel: "4.8/5.0",
    seatsLabel: "21/40 Seats Filled",
    badgeLabel: "Beginner Friendly",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/TBug7hzTN6.png",
    seatsIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/boPJfTbP5H.png",
    avatars: [
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/JVyjc7vLxA.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/8OONNTOAfQ.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/mE3EmNbKnQ.png",
    ],
    highlights: [
      "Easy, structured daily mindfulness plan",
      "Short guided audio sessions",
      "Attention and emotional awareness drills",
      "Practical habit integration templates",
    ],
    learnIntro:
      "You will learn practical mindfulness tools to increase focus and reduce mental noise. The course blends short lessons and guided practice to make your progress sustainable and measurable.",
    objectives: [
      "Understand the foundations of mindfulness",
      "Improve concentration with breath anchoring",
      "Respond instead of react in tense moments",
      "Create a consistent daily mindfulness habit",
      "Reduce cognitive overload and rumination",
      "Strengthen your attention over time",
    ],
    curriculum: BASE_CURRICULUM.map((item) => ({ ...item })),
    instructor: {
      name: "Dr. Sudeep Gangwar",
      role: "Clinical Psychologist & Wellness Coach",
      bio: "Dr. Sudeep Gangwar specializes in behavior change and mindfulness-based interventions, helping learners build resilient mental systems that last.",
      years: "15+ years",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/EuDUFd2Cjr.png",
      credentials: [
        "Certified CBT Practitioner",
        "Published Author (3 books)",
        "50,000+ Students Taught",
        "Featured TEDx Speaker",
      ],
    },
    headerBackIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/RdOK9Pf0YR.png",
    statsStudentIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/j1fmORFOWD.png",
    statsDurationIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LzDqWJZdYU.png",
    highlightsTopDecoration: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LbQqOQhQSe.png",
    highlightsCardIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/axy8pFOyKw.png",
  },
  {
    id: "resilience-bootcamp",
    moduleLabel: "AMPL Module 3",
    courseStatus: "Ongoing Course",
    statusBadge: "Enrolled • In Progress",
    statusBadgeTone: "green",
    priceLabel: "₹5,499",
    title: "Resilience Bootcamp",
    shortDescription: "Train your mindset to adapt, recover, and thrive under pressure",
    longDescription:
      "Develop practical resilience strategies to navigate uncertainty, setbacks, and high-pressure situations. Build confidence and consistency with proven tools used by top performers.",
    studentsCount: "6,842",
    durationLabel: "7 Weeks",
    lessonsLabel: "22 Lessons",
    ratingLabel: "4.8/5.0",
    seatsLabel: "15/40 Seats Filled",
    badgeLabel: "Beginner Friendly",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/VErCgTNa5A.png",
    seatsIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/gPqHXXgo0C.png",
    avatars: [
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/fR8GxmqHQg.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/rbkTu3E0oL.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/t6FV19QJSB.png",
    ],
    highlights: [
      "Stepwise resilience skill progression",
      "Recovery routines for stressful weeks",
      "Decision-making under pressure",
      "Personalized progress checkpoints",
    ],
    learnIntro:
      "This course teaches actionable resilience methods and practical drills so you can bounce back faster and perform with stability in difficult moments.",
    objectives: [
      "Recognize and reframe high-pressure patterns",
      "Use behavioral tools to maintain momentum",
      "Strengthen emotional endurance gradually",
      "Apply reset frameworks after setbacks",
      "Build confidence through repeatable routines",
      "Create your long-term resilience roadmap",
    ],
    curriculum: BASE_CURRICULUM.map((item) => ({ ...item })),
    instructor: {
      name: "Dr. Sudeep Gangwar",
      role: "Clinical Psychologist & Wellness Coach",
      bio: "Dr. Sudeep Gangwar supports learners in transforming stress responses into resilient action using modern, practical psychology.",
      years: "15+ years",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/EuDUFd2Cjr.png",
      credentials: [
        "Certified CBT Practitioner",
        "Published Author (3 books)",
        "50,000+ Students Taught",
        "Featured TEDx Speaker",
      ],
    },
    headerBackIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/RdOK9Pf0YR.png",
    statsStudentIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/j1fmORFOWD.png",
    statsDurationIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LzDqWJZdYU.png",
    highlightsTopDecoration: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LbQqOQhQSe.png",
    highlightsCardIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/axy8pFOyKw.png",
  },
  {
    id: "focus-and-performance",
    moduleLabel: "AMPL Module 4",
    courseStatus: "Ongoing Course",
    statusBadge: "Enrolled • In Progress",
    statusBadgeTone: "green",
    priceLabel: "₹4,499",
    title: "Focus & Performance Lab",
    shortDescription: "Improve concentration, execution speed, and sustained mental energy",
    longDescription:
      "Learn deep-focus frameworks and productivity techniques to perform at your best without burnout. Build a system that supports attention, recovery, and high-quality output.",
    studentsCount: "8,455",
    durationLabel: "5 Weeks",
    lessonsLabel: "18 Lessons",
    ratingLabel: "4.7/5.0",
    seatsLabel: "18/40 Seats Filled",
    badgeLabel: "Beginner Friendly",
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/rC97WM7EEO.png",
    seatsIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/zoWzxx0wr3.png",
    avatars: [
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/5uoZ6SgoTt.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/qp5Yfx8tSF.png",
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/BZJvrR1xbz.png",
    ],
    highlights: [
      "Attention management systems",
      "Distraction control techniques",
      "Energy optimization methods",
      "Performance tracking playbook",
    ],
    learnIntro:
      "You will design a personal focus and performance system to get more done with less stress. Lessons are practical and intended for immediate application.",
    objectives: [
      "Build a distraction-resistant workflow",
      "Use focus blocks with effective breaks",
      "Increase output quality and consistency",
      "Develop stronger cognitive stamina",
      "Reduce context-switching fatigue",
      "Track measurable productivity improvement",
    ],
    curriculum: BASE_CURRICULUM.map((item) => ({ ...item })),
    instructor: {
      name: "Dr. Sudeep Gangwar",
      role: "Clinical Psychologist & Wellness Coach",
      bio: "Dr. Sudeep Gangwar combines clinical insight and performance science to help learners build lasting focus in demanding environments.",
      years: "15+ years",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/EuDUFd2Cjr.png",
      credentials: [
        "Certified CBT Practitioner",
        "Published Author (3 books)",
        "50,000+ Students Taught",
        "Featured TEDx Speaker",
      ],
    },
    headerBackIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/RdOK9Pf0YR.png",
    statsStudentIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/j1fmORFOWD.png",
    statsDurationIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LzDqWJZdYU.png",
    highlightsTopDecoration: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/LbQqOQhQSe.png",
    highlightsCardIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/axy8pFOyKw.png",
  },
];

export const COURSE_CARDS: CourseCardData[] = COURSE_DETAILS.map(
  ({ id, title, shortDescription, icon, seatsIcon, avatars, seatsLabel, badgeLabel }) => ({
    id,
    title,
    shortDescription,
    icon,
    seatsIcon,
    avatars,
    seatsLabel,
    badgeLabel,
  }),
);

export function getCourseById(courseId: string): CourseDetailData | undefined {
  return COURSE_DETAILS.find((course) => course.id === courseId);
}
