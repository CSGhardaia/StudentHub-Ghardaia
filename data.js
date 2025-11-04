// ==================== DATA ====================
/*export const courseData = [
  {
    name: "Compiler Design",
    chapters: {
      chapter1: {
       chName:"Introduction to Compilers",
       chDescription:"any description",
       chDrive:"https://drive.google.com/file/d/1yFloJQm_Ks4B5dL-H5iiJYGX0wI5kHzl/view"
      },
      chapter2:{ chName:"Lexical Analysis",
      chDescription:"",
       chDrive:"https://drive.google.com/file/d/1dMRNu2f28NwF4w_xiMv9lo5X1kjhLR4k/view?usp=drive_link"},
      chapter3: "Syntax Analysis",
      chapter4: "Code Generation",
    },
    credits: 6,
    progress: 25,
  },
  {
    name: "Economics",
    chapters: {
      chapter1: "Introduction to Economics",
      chapter2: "Microeconomics",
      chapter3: "Macroeconomics",
      chapter4: "Economy and Technology",
    },
    credits: 4,
    progress: 50,
  },
  {
    name: "HCI",
    chapters: {
      chapter1: "HCI Fundamentals",
      chapter2: "User Interface Design",
      chapter3: "Usability Testing",
      chapter4: "Accessibility and UX",
    },
    credits: 5,
    progress: 75,
  },
  {
    name: "Linear Programming",
    chapters: {
      chapter1: "Optimization Basics",
      chapter2: "Simplex Method",
      chapter3: "Duality Theory",
      chapter4: "Applications in CS",
    },
    credits: 6,
    progress: 10,
  },
  {
    name: "Operating Systems 2",
    chapters: {
      chapter1: "Process Synchronization",
      chapter2: "Deadlocks",
      chapter3: "File Systems",
      chapter4: "Distributed Systems",
    },
    credits: 7,
    progress: 100,
  },
  {
    name: "Probability & Statistics",
    chapters: {
      chapter1: "Probability Basics",
      chapter2: "Random Variables",
      chapter3: "Distributions",
      chapter4: "Hypothesis Testing",
    },
    credits: 6,
    progress: 40,
  },
  {
    name: "Software Engineering",
    chapters: {
      chapter1: "Software Life Cycle",
      chapter2: "Modeling with UML",
      chapter3: "Software Testing",
      chapter4: "Agile Development",
    },
    credits: 6,
    progress: 60,
  },
];*/
export const courseData = [
  {
    name: "Compiler Design",
    chapters: {
      chapter1: {
        chName: "Introduction to Compilers",
        chDescription: "Overview of compiler structure and phases.",
        chDrive: "https://drive.google.com/file/d/1RdmRHk_GTS89xMs0OXYhMENkzTBFOeR7/view?usp=drive_link"
      },
      chapter2: {
        chName: "Lexical Analysis",
        chDescription: "Tokenization and lexical analyzer design.",
        chDrive: ""
      },
      chapter3: {
        chName: "Syntax Analysis",
        chDescription: "Parsing techniques and grammar analysis.",
        chDrive: ""
      },
      chapter4: {
        chName: "Code Generation",
        chDescription: "Intermediate code and target code generation.",
        chDrive: ""
      },
    },
    credits: 3,
    progress: 20,
  },
  {
    name: "Economics",
    chapters: {
      chapter1: {
        chName: "Introduction to Economics",
        chDescription: "Basic concepts and principles of economics.",
        chDrive: ""
      },
      chapter2: {
        chName: "Microeconomics",
        chDescription: "Study of individual markets and consumer behavior.",
        chDrive: ""
      },
      chapter3: {
        chName: "Macroeconomics",
        chDescription: "National income, inflation, and unemployment analysis.",
        chDrive: ""
      },
      chapter4: {
        chName: "Economy and Technology",
        chDescription: "Impact of technology on modern economies.",
        chDrive: ""
      },
    },
    credits: 1,
    progress: 0,
  },
  {
    name: "HCI",
    chapters: {
      chapter1: {
        chName: "HCI Fundamentals",
        chDescription: "Principles and goals of human-computer interaction.",
        chDrive: "https://drive.google.com/file/d/1W2bN40CmKNqD85VAlNZiOo2Wzb0JgRXI/view?usp=drive_link"
      },
      chapter2: {
        chName: "User Interface Design",
        chDescription: "Best practices for designing intuitive interfaces.",
        chDrive: ''
      },
      chapter3: {
        chName: "Usability Testing",
        chDescription: "Methods for evaluating user experience and usability.",
        chDrive: ""
      },
      chapter4: {
        chName: "Accessibility and UX",
        chDescription: "Inclusive design and user experience principles.",
        chDrive: ""
      },
    },
    credits: 2,
    progress: 10,
  },
  {
    name: "Linear Programming",
    chapters: {
      chapter1: {
        chName: "Optimization Basics",
        chDescription: "Introduction to optimization and linear models.",
        chDrive: "https://drive.google.com/file/d/1EH9Jt2VFi3khN83VdECyk9QnYCD1J5KF/view?usp=drive_link"
      },
      chapter2: {
        chName: "Simplex Method",
        chDescription: "The simplex algorithm and problem solving.",
        chDrive: ""
      },
      chapter3: {
        chName: "Duality Theory",
        chDescription: "Dual problems and complementary slackness.",
        chDrive: ""
      },
      chapter4: {
        chName: "Applications in CS",
        chDescription: "Real-world uses of LP in computer science.",
        chDrive: ""
      },
    },
    credits: 2,
    progress: 10,
  },
  {
    name: "Operating Systems 2",
    chapters: {
      chapter1: {
        chName: "Process Synchronization",
        chDescription: "Synchronization problems and solutions.",
        chDrive: "https://drive.google.com/file/d/16wosD45TkL9ETmc8QamDT_hTwmHzbnRC/view?usp=drive_link"
      },
      chapter2: {
        chName: "Deadlocks",
        chDescription: "Causes, prevention, and recovery from deadlocks.",
        chDrive: ""
      },
      chapter3: {
        chName: "File Systems",
        chDescription: "File system structure and implementation.",
        chDrive: ""
      },
      chapter4: {
        chName: "Distributed Systems",
        chDescription: "Concepts of distributed operating systems.",
        chDrive: ""
      },
    },
    credits: 3,
    progress: 20,
  },
  {
    name: "Probability & Statistics",
    chapters: {
      chapter1: {
        chName: "Probability Basics",
        chDescription: "Introduction to probability and combinatorics.",
        chDrive: "https://drive.google.com/file/d/1prFGiAqVEvBKNn7FTHgDjQIDj919pwlc/view?usp=drive_link"
      },
      chapter2: {
        chName: "Random Variables",
        chDescription: "Discrete and continuous random variables.",
        chDrive: ""
      },
      chapter3: {
        chName: "Distributions",
        chDescription: "Probability distributions and their properties.",
        chDrive: ""
      },
      chapter4: {
        chName: "Hypothesis Testing",
        chDescription: "Statistical inference and hypothesis testing methods.",
        chDrive: ""
      },
    },
    credits: 2,
    progress: 20,
  },
  {
    name: "Software Engineering",
    chapters: {
      chapter1: {
        chName: "Software Life Cycle",
        chDescription: "Phases of software development lifecycle.",
        chDrive: "https://drive.google.com/file/d/1eNJTunu4nqrOCXsl-wrL5b_iIvlRUFjY/view?usp=drive_link"
      },
      chapter2: {
        chName: "Modeling with UML",
        chDescription: "Creating system models with UML diagrams.",
        chDrive: "https://drive.google.com/file/d/1eNJTunu4nqrOCXsl-wrL5b_iIvlRUFjY/view?usp=drive_link"
      },
      chapter3: {
        chName: "Software Testing",
        chDescription: "Techniques and strategies for testing software.",
        chDrive: ""
      },
      chapter4: {
        chName: "Agile Development",
        chDescription: "Agile methods and iterative development.",
        chDrive: ""
      },
    },
    credits: 3,
    progress: 30,
  },
];

