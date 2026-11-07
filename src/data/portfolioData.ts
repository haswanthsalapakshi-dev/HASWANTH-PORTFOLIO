/**
 * Portfolio Data for Haswanth Salapakshi
 * First-semester B.Tech student & aspiring AI Engineer
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  category: 'Python' | 'Web Development';
  demoType: 'voter' | 'calculator' | 'atm' | 'grade' | 'portfolio';
  pythonCodeSnippet?: string;
  features: string[];
}

export const PERSONAL_INFO = {
  name: "Haswanth Salapakshi",
  shortName: "HASWANTH.",
  title: "Aspiring AI Engineer | Python Developer | Web Development Enthusiast",
  status: "B.Tech First-Year Student (First Semester)",
  location: "India",
  email: "haswanthsalapakshi@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/salapakshi-haswanth-6706aa432/",
    github: "https://github.com/haswanthsalapakshi-dev",
  },
  heroHeading: "Hi, I'm Haswanth Salapakshi.",
  heroSubheading: "An Aspiring AI Engineer passionate about Python, Web Development & Generative AI.",
  heroDescription: "Building my foundation in technology, exploring innovative ideas, and turning curiosity into code.",
  aboutIntroduction: [
    "I am currently pursuing my B.Tech journey as a first-semester student. I am passionate about technology, programming, and the rapidly evolving field of Artificial Intelligence.",
    "My current learning journey focuses on Python programming, Web Development, and Generative AI.",
    "I believe that every project, competition, and new challenge is an opportunity to improve my technical knowledge and problem-solving abilities.",
    "I am particularly interested in exploring AI-powered applications and building practical solutions that solve real-world problems."
  ],
  fullBio: "I am a passionate first-year B.Tech student and aspiring AI Engineer, exploring the exciting world of Python, Web Development, and Generative AI. I enjoy transforming ideas into practical solutions through programming and creative problem-solving. As a beginner in technology, I continuously challenge myself to learn new skills, build projects, and participate in hackathons and ideathons. My goal is to grow into an innovative AI Engineer who creates meaningful technology that makes a difference.",
  quickCards: [
    { label: "Current Role", value: "B.Tech Student", subtext: "First Semester" },
    { label: "Career Interest", value: "Aspiring AI Engineer", subtext: "Intelligent Systems" },
    { label: "Learning Focus", value: "Python · Web Dev · Gen AI", subtext: "Active Daily Practice" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    description: "Core foundation in computational thinking and algorithmic problem solving.",
    skills: [
      {
        name: "Python",
        level: "Foundational & Active Practice",
        details: "Variables, Control Flow, Data Structures (Lists, Tuples, Dictionaries), Functions, Basic File Operations, OOP Concepts.",
        badge: "Core Language"
      }
    ]
  },
  {
    category: "Web Development",
    description: "Crafting modern, accessible, and responsive user interfaces.",
    skills: [
      {
        name: "HTML",
        level: "Foundational",
        details: "Semantic page structure, accessible forms, meta tags, responsive viewport markup.",
        badge: "Markup"
      },
      {
        name: "CSS",
        level: "Foundational",
        details: "Flexbox, CSS Grid, media queries, modern color spaces, responsive design principles.",
        badge: "Styling"
      },
      {
        name: "JavaScript",
        level: "Currently Learning",
        details: "DOM manipulation, ES6+ fundamentals, event listeners, basic asynchronous concepts.",
        badge: "Learning"
      }
    ]
  },
  {
    category: "Artificial Intelligence",
    description: "Exploring foundational AI models and structured prompt architectures.",
    skills: [
      {
        name: "Generative AI",
        level: "Beginner",
        details: "LLM concepts, tokens, temperature, multimodal understanding, ethical AI usage.",
        badge: "Beginner"
      },
      {
        name: "Prompt Engineering",
        level: "Beginner",
        details: "Zero-shot and few-shot reasoning, persona structuring, chain-of-thought formatting, context window management.",
        badge: "Beginner"
      }
    ]
  },
  {
    category: "Core Competencies",
    description: "Essential problem-solving mindset and collaborative capabilities.",
    skills: [
      {
        name: "Problem Solving",
        level: "Active Practice",
        details: "Breaking complex algorithmic challenges into modular, testable steps.",
        badge: "Core"
      },
      {
        name: "Logical Thinking",
        level: "Active Practice",
        details: "Analyzing conditions, edge cases, data flows, and structured logic branches.",
        badge: "Core"
      },
      {
        name: "Creative Idea Generation",
        level: "Active Practice",
        details: "Brainstorming novel technology solutions for everyday community challenges.",
        badge: "Core"
      },
      {
        name: "Continuous Learning",
        level: "Habit",
        details: "Eagerly adopting new tools, reading documentation, and building hands-on prototypes.",
        badge: "Core"
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "voter-eligibility",
    title: "Voter Eligibility Checker",
    description: "A Python-based application that checks whether a person meets the minimum age requirement for voting.",
    techStack: ["Python", "CLI", "Logic Branches"],
    githubUrl: "https://github.com/haswanthsalapakshi-dev",
    category: "Python",
    demoType: "voter",
    features: [
      "Validates user numerical age input against legal voting threshold (18+)",
      "Handles invalid character entries and negative numbers gracefully",
      "Calculates remaining years until voter eligibility if underage",
      "Provides clear, instant feedback messages in the console"
    ],
    pythonCodeSnippet: `def check_voter_eligibility(age: int) -> str:
    VOTING_AGE = 18
    if age < 0 or age > 125:
        return "Please enter a valid human age."
    elif age >= VOTING_AGE:
        return f"Eligible to vote! You meet the minimum requirement of {VOTING_AGE} years."
    else:
        years_left = VOTING_AGE - age
        return f"Not eligible yet. You will be eligible in {years_left} year{'s' if years_left > 1 else ''}."

# Interactive CLI execution
try:
    user_age = int(input("Enter your age: "))
    print(check_voter_eligibility(user_age))
except ValueError:
    print("Invalid input. Please enter an integer number.")`
  },
  {
    id: "calculator-app",
    title: "Calculator Application",
    description: "A simple calculator application designed to perform basic arithmetic operations with an easy-to-use interface.",
    techStack: ["Python", "Arithmetic Operations", "Functions"],
    githubUrl: "https://github.com/haswanthsalapakshi-dev",
    category: "Python",
    demoType: "calculator",
    features: [
      "Performs addition, subtraction, multiplication, and division",
      "Robust zero-division error handling to prevent application crashes",
      "Modular mathematical functions for clean code maintainability",
      "Continuous calculation loop until user chooses to exit"
    ],
    pythonCodeSnippet: `def add(a: float, b: float) -> float:
    return a + b

def subtract(a: float, b: float) -> float:
    return a - b

def multiply(a: float, b: float) -> float:
    return a * b

def divide(a: float, b: float):
    if b == 0:
        return "Error: Cannot divide by zero."
    return a / b

# Supported operations dispatch
operations = {'+': add, '-': subtract, '*': multiply, '/': divide}`
  },
  {
    id: "atm-management",
    title: "ATM Management System",
    description: "A Python-based ATM management project that simulates basic banking operations such as balance checking, deposits, and withdrawals.",
    techStack: ["Python", "State Simulation", "Transaction Logic"],
    githubUrl: "https://github.com/haswanthsalapakshi-dev",
    category: "Python",
    demoType: "atm",
    features: [
      "PIN authentication verification simulation",
      "Real-time account balance tracking",
      "Deposit transaction processing with positive value checks",
      "Withdrawal transaction handling with overdraft prevention"
    ],
    pythonCodeSnippet: `class ATMSimulator:
    def __init__(self, initial_balance=5000, pin="1234"):
        self.balance = initial_balance
        self.pin = pin
        self.transactions = []

    def check_balance(self):
        return f"Current Balance: \${self.balance:,.2f}"

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be positive."
        self.balance += amount
        self.transactions.append(f"Deposited: +\${amount:,.2f}")
        return f"Successfully deposited \${amount:,.2f}."

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be positive."
        if amount > self.balance:
            return "Insufficient funds in your account."
        self.balance -= amount
        self.transactions.append(f"Withdrawn: -\${amount:,.2f}")
        return f"Please collect your cash: \${amount:,.2f}."`
  },
  {
    id: "student-grade-calculator",
    title: "Student Grade Calculator",
    description: "A program that calculates student grades based on academic marks and predefined grading criteria.",
    techStack: ["Python", "Grading Criteria", "Lists & Loops"],
    githubUrl: "https://github.com/haswanthsalapakshi-dev",
    category: "Python",
    demoType: "grade",
    features: [
      "Accepts multiple subject marks with range validation (0-100)",
      "Computes total marks, percentage average, and letter grade",
      "Standard academic grading scale (A, B, C, D, F) mapping",
      "Displays structured summary report for student performance"
    ],
    pythonCodeSnippet: `def calculate_grade(marks_list):
    total = sum(marks_list)
    average = total / len(marks_list)
    
    if average >= 90:
        grade = 'A+ (Outstanding)'
    elif average >= 80:
        grade = 'A (Excellent)'
    elif average >= 70:
        grade = 'B (Good)'
    elif average >= 60:
        grade = 'C (Satisfactory)'
    elif average >= 50:
        grade = 'D (Pass)'
    else:
        grade = 'F (Needs Improvement)'
        
    return {
        "total": total,
        "average": round(average, 2),
        "grade": grade
    }`
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website showcasing my technical skills, projects, interests, and learning journey.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/haswanthsalapakshi-dev",
    category: "Web Development",
    demoType: "portfolio",
    features: [
      "Fully responsive layout optimized for mobile, tablet, and desktop",
      "Interactive Python project execution simulators directly in browser",
      "Clean zero-pill typography and professional monochromatic-with-blue styling",
      "Comprehensive learning roadmap showcasing student journey into AI"
    ]
  }
];

export const EXPERIENCE_ACTIVITIES = [
  {
    title: "Hackathons",
    role: "Participant & Prototyper",
    focus: "Collaborative Rapid Prototyping",
    summary: "Engaging in fast-paced problem solving, exploring innovative tech applications, and building MVP prototypes under time constraints.",
    takeaway: "Developing quick problem decomposition, team synchronization, and resilient code implementation under real-time constraints."
  },
  {
    title: "Ideathons",
    role: "Idea Pitcher & Conceptualizer",
    focus: "Novel Technological Solutions",
    summary: "Brainstorming fresh technological concepts to address real-world community, educational, and workflow challenges.",
    takeaway: "Honing clear presentation skills, user-centric thinking, and technical feasibility validation for emerging ideas."
  },
  {
    title: "Technical Competitions",
    role: "Participant",
    focus: "Logic & Algorithmic Challenges",
    summary: "Testing core coding syntax, debugging capabilities, and logical structure against standardized algorithmic prompts.",
    takeaway: "Building sharp debugging habits, reading requirements precisely, and analyzing computational edge cases."
  },
  {
    title: "Collaborative Brainstorming",
    role: "Team Contributor",
    focus: "Peer Learning & System Design",
    summary: "Brainstorming and discussing modern software architectures, generative AI paradigms, and engineering ideas with peers.",
    takeaway: "Valuing diverse perspectives, communicating logic clearly, and contributing constructively to group projects."
  },
  {
    title: "Innovative Problem-Solving",
    role: "Independent Explorer",
    focus: "Practical Code Experiments",
    summary: "Transforming everyday manual routines and theoretical programming concepts into executable software solutions.",
    takeaway: "Bridging classroom computer science concepts with real, tangible utility through regular code creation."
  }
];

export const LEARNING_ROADMAP = [
  {
    step: "01",
    title: "Python Programming",
    status: "In Progress · Strong Foundation",
    description: "Mastering fundamental syntax, variables, conditional statements, loops, lists, dictionaries, modular functions, and basic object-oriented programming.",
    milestones: ["Data Structures & Logic", "Functions & Error Handling", "CLI Application Building"]
  },
  {
    step: "02",
    title: "Frontend Web Development",
    status: "In Progress · Active Exploration",
    description: "Building responsive, semantic web interfaces using HTML5, modern CSS layouts (Flexbox & Grid), and practicing JavaScript for DOM interactivity.",
    milestones: ["Semantic HTML5 & Accessibility", "Modern Responsive Layouts", "JavaScript Logic & Event Handling"]
  },
  {
    step: "03",
    title: "Generative AI Fundamentals",
    status: "Currently Exploring",
    description: "Understanding how Large Language Models work, transformer architecture intuition, tokens, embeddings, model context windows, and ethical deployment.",
    milestones: ["Model Architectures & Tokenization", "API Integration Principles", "Multimodal Capabilities"]
  },
  {
    step: "04",
    title: "Prompt Engineering",
    status: "Currently Practicing",
    description: "Developing structured prompt architectures, system prompts, role assignments, zero-shot and few-shot reasoning, and chain-of-thought methodologies.",
    milestones: ["Structured Output Formatting", "Few-Shot Demonstration", "Prompt Evaluation & Tuning"]
  },
  {
    step: "05",
    title: "AI-Powered Application Development",
    status: "Upcoming Milestone",
    description: "Connecting Python backends with AI APIs to build interactive, intelligent web applications that automate workflows and solve real-world problems.",
    milestones: ["API Integration with Python", "RAG & Grounded Retrieval", "Full-Stack AI Prototypes"]
  }
];
