import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I have a knack for turning innovative ideas into practical solutions. With experience in top research and tech firms, I excel in Python, SQL, and a range of ML techniques. My goal is to harness my skills to create seamless software solutions that enhance efficiency and usability across various industries.`;

export const ABOUT_TEXT = `With a Master's degree in Electrical Engineering, my passion for Data Science and Machine Learning is matched by hands-on experience from top tech firms. Specializing in frameworks like TensorFlow, PyTorch, and Scikit-learn, I've developed impactful projects such as a LangChain-powered quiz chatbot, and a sophisticated FAQ generator Llama model. My expertise extends to leveraging large language models, both supervised and unsupervised learning techniques, and advanced data analysis. Outside of my technical pursuits, I thrive on exploring cutting-edge technologies, staying active, and refining my digital art skills.`;

export const EDUCATION = [
  {
    year: "2022 - 2024",
    school: "University of Southern California",
    degree: "Master of Science in Electrical Engineering (Machine Learning & Data Science)",
    // location: "Los Angeles, USA",
    // gpa: "3.71",
  },
  {
    year: "2017 - 2021",
    school: "RV College of Engineering",
    degree: "Bachelor of Engineering in Electronics and Communications",
    // location: "Bangalore, India",
    // gpa: "8.48",
  },
];

export const EXPERIENCES = [
  {
    year: "March 2024 - April 2024",
    role: "Artificial Intelligence Engineer",
    company: "Radical AI",
    description: `Developed an advanced chatbot designed for coaching and mentorship utilizing cutting-edge technologies such as OpenAI, VertexAI, and TensorFlow. The work involved sophisticated data modeling, algorithm development, and the application of deep learning principles, significantly enhancing the chatbot's performance and user interaction.`,
    technologies: ["Python", "LangChain", "GCP"],
  },
  {
    year: "January 2022 - May 2022",
    role: "Data Science Trainee",
    company: "Sravathi AI",
    description: `Designed and deployed a platform using Graph Neural Networks (GNNs) for molecular generation from SMILES input. Demonstrated strong expertise in machine learning and data structures by devising metric scoring for 16 different models and evaluating the NCE project, achieving a notable accuracy of 73%.`,
    technologies: ["Python", "Pandas", "PyTorch"],
  },
  {
    year: "February 2021 - August 2021",
    role: "Solution Consultant",
    company: "Hewlett Packard Enterprise",
    description: `Developed an automation tool that streamlined data entry and verification processes in SAP for the Order Processing team. Worked closely with the automation team to creat a .NET Framework-based order booking system using SAP database, improving workflow efficiency by 30%. Demonstrated the ability to integrate software solutions with existing systems effectively.`,
    technologies: ["C#", ".NET", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "US Sales Dashboard",
    image: project7,
    description:
      "An interactive Tableau dashboard that visualizes key sales metrics across the U.S., offering insights into regional sales performance, product categories, and customer behavior. The dashboard is designed to empower users to explore trends in sales revenue, profit margins, and geographical distribution.",
    technologies: ["SQL", "Tableau"],
    medium: `https://medium.com/@rohit.veeradhi/unlocking-u-s-sales-insights-an-interactive-tableau-dashboard-deep-dive-fa60e530e50f`,
    tableau: `https://public.tableau.com/app/profile/rohit.veeradhi/viz/USSales_17255647650780/SalesDashboard`,
  },
  {
    title: "Steam Data Analysis",
    image: project6,
    description:
      "Automated a robust data pipeline using Prefect for Steam sales analysis, ensuring timely data ingestion, validation, and transformation with fault-tolerant mechanisms. Developed the steamstore_etl Python CLI tool and implemented a CI/CD pipeline with GitHub Actions for automated testing and publishing to PyPI. Created an interactive Tableau dashboard to display KPIs and analyze regional and demographic Steam sales trends.",
    technologies: ["Python", "SQL", "Matplotlib", "Tableau"],
    github: `https://github.com/DataForgeOpenAIHub/Steam-Sales-Analysis`,
    tableau: `https://public.tableau.com/app/profile/rohit.veeradhi/viz/SteamAnalysis_17247013963080/Dashboard4`,
    medium: `https://medium.com/@rohit.veeradhi/unlocking-game-insights-building-a-data-driven-pipeline-with-python-tableau-and-mysql-9b0f47d57e9d`,
  },
  {
    title: "FAQ Generator",
    image: project1,
    description:
      "Developed an advanced FAQ generation system by fine-tuning several models including QLoRA PEFT Llama-3 8b, Llama-2 7b, Mistral 7b, T5, and BART. The project involved scraping admission requirements for MS in CS from the top 150 US universities and storing the data in a JSON file. Enhanced the accuracy and relevance of the generated FAQs by 10% compared to a baseline T5 transformer model.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Beautiful Soup"],
    github: `https://github.com/Rohit04121998/Automated-FAQ-Generation`,
    medium: `https://medium.com/@rohit.veeradhi/transforming-university-admissions-with-ai-automating-faq-generation-c382ed81ff2b `,
  },
  {
    title: "Gemini Quizify",
    image: project2,
    description:
      "Collaborated with Radical AI to develop ReX, a chatbot using Gemini Pro. Created a quiz algorithm leveraging VertexAI embeddings and Chroma DB for data pipeline management, and built a Streamlit UI for data ingestion. This hands-on project showcased proficiency in chatbot development and data pipeline integration.",
    technologies: ["Python", "PyTorch", "LangChain", "GCP"],
    github: `https://github.com/Rohit04121998/Gemini-Quizify`,
    medium: `https://medium.com/@rohit.veeradhi/revolutionizing-learning-introducing-gemini-quizify-your-ai-powered-quiz-companion-7f9d678b379d`,
  },
  {
    title: "American Sign Language Recognition using CNN",
    image: project3,
    description:
      "Implemented custom Convolutional Neural Network (CNN) models from scratch and integrated transfer learning to evaluate model performance by F-1 scores. Achieved 100% accuracy on a familiar dataset and 71% accuracy on an unfamiliar dataset characterized by abstract features, demonstrating strong skills in deep learning and image recognition.",
    technologies: ["Python", "PyTorch", "NumPy"],
    github: `https://github.com/Rohit04121998/American-Sign-Language-Recognition-using-Convolutional-Neural-Network`,
    medium: `https://medium.com/@rohit.veeradhi/unveiling-the-power-of-convolutional-neural-networks-for-american-sign-language-recognition-9158391da572`,
  },
  {
    title: "Enhancing Interpretability in Mushroom Classification",
    image: project4,
    description:
      "Conducted a comprehensive analysis and feature engineering on the UCI mushroom dataset using UFS, RFE, and PCA. Compared various supervised models and achieved 99% accuracy with SVM, highlighting robust data analysis and modeling capabilities.",
    technologies: ["Python", "NumPy", "Seaborn"],
    github: `https://github.com/Rohit04121998/Enhancing-Interpretability-in-Mushroom-Classification`,
    medium: `https://medium.com/@rohit.veeradhi/the-magic-of-mushrooms-revolutionizing-identification-with-machine-learning-c6a5e1a0dd63`,
  },
  {
    title: "Machine Learning over Encrypted Medical Data",
    image: project5,
    description:
      "Designed a framework for transparent medical data analysis using a dummy Client-Server-Receiver Model without user awareness of data contents. Implemented Homomorphic Encryption and Diffie-Hellman-Merkel Key Exchange, ensuring maximum data security and privacy with a remarkably low error rate of 3.71e-11.",
    technologies: ["Python", "NumPy", "Seaborn", "PyTorch"],
  },
];

export const navLinks = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Technologies",
    link: "technologies",
  },
  {
    name: "Education",
    link: "education",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const socialMedia = [
  {
    id: "in",
    link: "https://www.instagram.com/its_rohit_da/",
  },
  {
    id: "fb",
    link: "https://www.facebook.com/rohit.veeradhi/",
  },
  {
    id: "gh",
    link: "https://github.com/Rohit04121998",
  },
  {
    id: "li",
    link: "https://www.linkedin.com/in/rohit-veeradhi/",
  },
  {
    id: "md",
    link: "https://medium.com/@rohit.veeradhi",
  },
  {
    id: "tb",
    link: "https://public.tableau.com/app/profile/rohit.veeradhi/vizzes",
  },
];
