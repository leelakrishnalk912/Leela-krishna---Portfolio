import { ProjectItem, SkillItem, HackathonPillar, RoadmapStep } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'LEELA KRISHNA.D',
  shortName: 'LEELA KRISHNA',
  role: 'Aspiring AI Engineer | B.Tech CSE (AI/ML) Student',
  status: 'First-semester B.Tech Computer Science student specializing in AI & Machine Learning.',
  bioSummary:
    "I'm a first-semester B.Tech CSE student exploring AI, software development, and practical problem solving through projects, hackathons, and continuous learning.",
  detailedBio: [
    'I am currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I am at the very beginning of my software development journey, driven by deep curiosity about how intelligent systems function.',
    'Rather than just studying theory, I enjoy turning core concepts into small, working projects—starting from Python fundamentals and logic building to web interfaces and modern Generative AI tooling.',
    'Participating in hackathons and ideathons has been a major catalyst for my growth, teaching me how to think through real-world problem statements, build under time constraints, collaborate in teams, and articulate technical ideas clearly.',
    'My long-term aspiration is to develop into an AI Engineer capable of designing, building, and deploying practical AI-powered solutions that create tangible value in the real world.'
  ],
  links: {
    github: 'https://github.com/leelakrishnalk912',
    linkedin: 'https://www.linkedin.com/in/leela-krishna-68269643b/',
    email: 'leelakrishnalk912@gmail.com'
  }
};

export const CURRENTLY_LEARNING_PIPELINE = [
  { name: 'Python', role: 'Programming Core', status: 'Active Focus' },
  { name: 'Web Development', role: 'Frontend & UI', status: 'Building Basics' },
  { name: 'Generative AI', role: 'LLMs & Prompting', status: 'Hands-on Exploration' },
  { name: 'AI/ML Fundamentals', role: 'Mathematics & Models', status: 'Curriculum Focus' }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    level: 'Learning',
    description: 'Variables, loops, functions, conditionals, console I/O, and problem-solving logic.'
  },
  // Web Development
  {
    name: 'HTML',
    category: 'Web Development',
    level: 'Learning',
    description: 'Semantic markup, accessible page structure, and clean document layouts.'
  },
  {
    name: 'CSS',
    category: 'Web Development',
    level: 'Learning',
    description: 'Responsive styling, Flexbox, box model, and modern clean aesthetics.'
  },
  {
    name: 'JavaScript',
    category: 'Web Development',
    level: 'Learning',
    description: 'Core syntax, variables, DOM manipulation, functions, and event handling.'
  },
  // AI
  {
    name: 'Generative AI',
    category: 'AI',
    level: 'Learning',
    description: 'Prompt engineering techniques, LLM capabilities, and practical workflow integration.'
  },
  {
    name: 'AI/ML Fundamentals',
    category: 'AI',
    level: 'Exploring',
    description: 'First-semester curriculum study in mathematical foundations, vectors, and ML concepts.'
  },
  // Foundations & Practices
  {
    name: 'Problem Solving',
    category: 'Foundations & Practices',
    level: 'Foundational',
    description: 'Breaking down computational tasks into step-by-step algorithms and flowcharts.'
  },
  {
    name: 'Hackathons',
    category: 'Foundations & Practices',
    level: 'Familiar',
    description: 'Rapid prototyping, team synergy, sprint ideation, and problem scoping.'
  },
  {
    name: 'Ideathons',
    category: 'Foundations & Practices',
    level: 'Familiar',
    description: 'Solution conceptualization, user empathy, value proposition, and technical pitching.'
  },
  {
    name: 'Continuous Learning',
    category: 'Foundations & Practices',
    level: 'Foundational',
    description: 'Consistent daily practice, documentation reading, and building incremental projects.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'voter-eligibility',
    name: 'Voter Eligibility Checker',
    shortDescription:
      'A beginner Python project that determines whether a person is eligible to vote based on their age.',
    technology: 'Python',
    concepts: ['Conditionals (if-else)', 'Input Validation', 'Type Casting (int)', 'Console Formatting'],
    problemStatement:
      'Determine civic voting eligibility by evaluating user-entered age against the legal age threshold (18 years), gracefully catching invalid inputs such as negative numbers or non-numeric entries.',
    logicExplanation:
      'The program prompts the user for their age, casts the string input to an integer, and checks boundary conditions. If age >= 18, it confirms eligibility; if 0 <= age < 18, it calculates remaining years until eligible; if negative, it flags an invalid age.',
    codeSnippet: `# Voter Eligibility Checker
def check_voting_eligibility():
    print("=== Voting Eligibility System ===")
    try:
        age_input = input("Enter your age: ")
        age = int(age_input)
        
        if age < 0:
            print("Error: Age cannot be negative. Please enter a valid age.")
        elif age >= 18:
            print(f"Eligible: You are {age} years old and eligible to cast your vote.")
        else:
            years_left = 18 - age
            print(f"Not Eligible: You will be eligible to vote in {years_left} year(s).")
    except ValueError:
        print("Invalid input! Please enter a numerical whole number for age.")

if __name__ == "__main__":
    check_voting_eligibility()`,
    sampleInput: 'Age: 19',
    sampleOutput: 'Eligible: You are 19 years old and eligible to cast your vote.',
    interactiveType: 'voter'
  },
  {
    id: 'calculator',
    name: 'Calculator',
    shortDescription:
      'A simple calculator project demonstrating fundamental programming concepts and user input handling.',
    technology: 'Python',
    concepts: ['Arithmetic Operators', 'Functions', 'Divide-by-Zero Handling', 'Control Flow'],
    problemStatement:
      'Perform basic arithmetic operations (addition, subtraction, multiplication, and division) based on user selections while preventing runtime crashes like ZeroDivisionError.',
    logicExplanation:
      'Defines discrete reusable arithmetic functions. Takes two numerical inputs and an operator from the user, matches the operator with conditional statements, checks for zero division before dividing, and prints the formatted mathematical equation.',
    codeSnippet: `# Simple Python Arithmetic Calculator
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        return "Error: Division by zero is undefined."
    return a / b

def run_calculator():
    print("=== Python Console Calculator ===")
    print("Operations: + (Add), - (Subtract), * (Multiply), / (Divide)")
    
    try:
        num1 = float(input("Enter first number: "))
        op = input("Choose operation (+, -, *, /): ").strip()
        num2 = float(input("Enter second number: "))
        
        if op == '+':
            result = add(num1, num2)
        elif op == '-':
            result = subtract(num1, num2)
        elif op == '*':
            result = multiply(num1, num2)
        elif op == '/':
            result = divide(num1, num2)
        else:
            result = "Invalid operator selected."
            
        print(f"Result: {result}")
    except ValueError:
        print("Error: Invalid numerical input.")

if __name__ == "__main__":
    run_calculator()`,
    sampleInput: '15 * 4',
    sampleOutput: 'Result: 60.0',
    interactiveType: 'calculator'
  },
  {
    id: 'atm-system',
    name: 'ATM Management System',
    shortDescription:
      'A beginner-level ATM simulation project demonstrating concepts such as user input, balance management, transactions, and conditional logic.',
    technology: 'Python',
    concepts: ['State Management', 'While Loop', 'Transaction Logic', 'Menu-driven Interface'],
    problemStatement:
      'Simulate a banking ATM terminal where users can check balance, deposit money, withdraw funds, and exit. Ensures withdrawal cannot exceed current balance and inputs must be positive.',
    logicExplanation:
      'Initializes a persistent balance variable. A continuous while loop displays a numbered menu. Branching logic handles each selection: deposits increase balance, withdrawals check sufficiency before deducting, and option 4 terminates the session.',
    codeSnippet: `# ATM Simulation Terminal
def atm_simulation():
    balance = 1000.0  # Initial starting balance
    is_active = True
    
    print("=== Welcome to College Student Banking ATM ===")
    
    while is_active:
        print("\\n1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Select an option (1-4): ").strip()
        
        if choice == '1':
            print(f"Current Balance: \${balance:.2f}")
        elif choice == '2':
            try:
                amount = float(input("Enter deposit amount: \$"))
                if amount <= 0:
                    print("Deposit amount must be positive.")
                else:
                    balance += amount
                    print(f"Successfully deposited \${amount:.2f}. New Balance: \${balance:.2f}")
            except ValueError:
                print("Invalid amount entered.")
        elif choice == '3':
            try:
                amount = float(input("Enter withdrawal amount: \$"))
                if amount <= 0:
                    print("Withdrawal amount must be positive.")
                elif amount > balance:
                    print(f"Insufficient funds! Available balance is \${balance:.2f}")
                else:
                    balance -= amount
                    print(f"Successfully withdrew \${amount:.2f}. Remaining: \${balance:.2f}")
            except ValueError:
                print("Invalid amount entered.")
        elif choice == '4':
            print("Thank you for using the ATM. Have a great day!")
            is_active = False
        else:
            print("Invalid choice. Please select 1, 2, 3, or 4.")

if __name__ == "__main__":
    atm_simulation()`,
    sampleInput: 'Deposit \$250, Withdraw \$100',
    sampleOutput: 'Current Balance: \$1,150.00',
    interactiveType: 'atm'
  },
  {
    id: 'grade-calculator',
    name: 'Student Grade Calculator',
    shortDescription:
      'A Python project that calculates student grades based on marks and demonstrates conditional statements and basic data processing.',
    technology: 'Python',
    concepts: ['Score Averaging', 'Multi-tier Conditionals', 'Data Aggregation', 'Edge Handling'],
    problemStatement:
      'Take scores from multiple subjects, compute the overall percentage, and assign standard academic grades (A, B, C, D, Fail) with qualitative feedback.',
    logicExplanation:
      'Prompts for number of subjects and individual marks (0-100). Aggregates total marks, divides by maximum possible marks to obtain the percentage, and evaluates an if-elif-else ladder to assign the corresponding letter grade.',
    codeSnippet: `# Student Grade Calculator
def calculate_grade():
    print("=== Student Academic Grade Calculator ===")
    try:
        num_subjects = int(input("Enter number of subjects: "))
        if num_subjects <= 0:
            print("Subject count must be greater than 0.")
            return

        scores = []
        for i in range(1, num_subjects + 1):
            mark = float(input(f"Enter marks for subject {i} (out of 100): "))
            if mark < 0 or mark > 100:
                print(f"Invalid marks ({mark}). Must be between 0 and 100.")
                return
            scores.append(mark)

        average = sum(scores) / num_subjects
        
        if average >= 90:
            grade = "A (Outstanding)"
        elif average >= 80:
            grade = "B (Very Good)"
        elif average >= 70:
            grade = "C (Good)"
        elif average >= 60:
            grade = "D (Pass)"
        else:
            grade = "F (Needs Improvement)"

        print(f"\\nTotal Subjects: {num_subjects}")
        print(f"Average Percentage: {average:.2f}%")
        print(f"Assigned Grade: {grade}")
    except ValueError:
        print("Please enter valid numerical scores.")

if __name__ == "__main__":
    calculate_grade()`,
    sampleInput: 'Marks: 85, 92, 78',
    sampleOutput: 'Average: 85.00% · Grade: B (Very Good)',
    interactiveType: 'grade'
  }
];

export const HACKATHON_PILLARS: HackathonPillar[] = [
  {
    title: 'Thinking About Real-World Problems',
    description:
      'Moving beyond textbook theory to analyze actual user friction, societal challenges, and areas where practical software can make a measurable difference.',
    takeaway: 'Problem scoping & root-cause analysis'
  },
  {
    title: 'Developing Ideas Under Time Constraints',
    description:
      'Learning to prioritize essential features, manage time in 24–36 hour hackathon sprints, and ship a functional prototype within a tight deadline.',
    takeaway: 'Rapid execution & scoping restraint'
  },
  {
    title: 'Collaborating in Teams',
    description:
      'Working closely with fellow student developers and ideators, dividing tasks, communicating logic, and coordinating on git and project milestones.',
    takeaway: 'Active communication & team synergy'
  },
  {
    title: 'Presenting Solutions',
    description:
      'Structuring technical presentations and ideathon pitches to clearly explain the problem, the technical architecture, and the future potential.',
    takeaway: 'Clear technical pitching & storytelling'
  },
  {
    title: 'Learning by Building',
    description:
      'Gaining practical hands-on experience by immediately writing code, troubleshooting runtime errors, and iterating on solutions in a live environment.',
    takeaway: 'Rapid trial-and-error & debugging'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: 1,
    stage: 'B.Tech CSE (AI/ML)',
    status: 'current',
    description: 'First-semester foundations in computer science, discrete math, and computational problem solving.',
    focusAreas: ['CS Fundamentals', 'Academic Math', 'First-Semester Coursework']
  },
  {
    step: 2,
    stage: 'Programming Fundamentals',
    status: 'current',
    description: 'Mastering core Python syntax, algorithms, data structures, and console programming logic.',
    focusAreas: ['Python Basics', 'Control Flow', 'Functions', 'Modular Code']
  },
  {
    step: 3,
    stage: 'Web Development',
    status: 'in-progress',
    description: 'Learning modern frontend technologies to build clean, responsive user interfaces for software.',
    focusAreas: ['HTML5 & Semantic Structure', 'CSS & Flexbox', 'JavaScript Fundamentals']
  },
  {
    step: 4,
    stage: 'Generative AI',
    status: 'in-progress',
    description: 'Exploring LLM APIs, prompt engineering patterns, and integrating generative capabilities into apps.',
    focusAreas: ['Prompt Engineering', 'LLM Integration', 'Practical AI Tools']
  },
  {
    step: 5,
    stage: 'AI/ML Fundamentals',
    status: 'upcoming',
    description: 'Deepening knowledge in linear algebra, probability, data preprocessing, and machine learning models.',
    focusAreas: ['NumPy & Pandas', 'Linear Algebra', 'Scikit-Learn', 'Model Evaluation']
  },
  {
    step: 6,
    stage: 'AI Engineering',
    status: 'upcoming',
    description: 'Designing end-to-end practical AI systems that connect data pipelines, models, and real-world user needs.',
    focusAreas: ['End-to-end Systems', 'Model Deployment', 'Production Problem Solving']
  }
];
