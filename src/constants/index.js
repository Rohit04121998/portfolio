import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.jpg"

export const HERO_CONTENT = `I am a dedicated and passionate Data Science and Machine Learning enthusiast, committed to transforming innovative concepts into practical solutions through coding. Through internships in renowned research and technology companies, I have developed a strong proficiency in Python, SQL, and various machine learning and deep learning concepts, including LLMs, as well as supervised and unsupervised learning techniques. My objective is to leverage my expertise by developing solutions that seamlessly integrate software technologies with existing systems across diverse industries, enhancing their efficiency and usability.`;

export const ABOUT_TEXT = `I am an aspiring Data Science and Machine Learning enthusiast, driven by a passion for transforming innovative concepts into tangible solutions through coding. I hold a Master’s degree in Electrical Engineering with a specialization in Machine Learning and Data Science from the University of Southern California (USC). My hands-on experience spans across AI and data science through internships at renowned research and technology companies. With a solid foundation in Python, SQL, and expertise in machine learning frameworks such as TensorFlow, PyTorch, and Scikit-learn, I have successfully developed and deployed various projects. Notable projects include a chatbot for generating a quiz using Vertex AI and LangChain, and a FAQ generator using T5, BERT and Llama transformer. I am particularly skilled in leveraging large language models (LLMs), supervised and unsupervised learning techniques, and data analysis tools. I am keen on gaining further hands-on experience in the dynamic realm of software development and machine learning. My focus areas revolve around Machine Learning, AI, and Data Science, and I am eager to apply my expertise while learning from industry pioneers. Outside of coding, I enjoy staying active, exploring new technologies, and improving my art skills.`;

export const EDUCATION = [
  {
    year: "2022 - 2024",
    school: "University of Southern California",
    degree: "Master of Science in Electrical Engineering (Machine Learning & Data Science)",
    // location: "Los Angeles, USA",
    // description: `Developed an advanced chatbot designed for coaching and mentorship utilizing cutting-edge technologies such as OpenAI, VertexAI, and TensorFlow. The work involved sophisticated data modeling, algorithm development, and the application of deep learning principles, significantly enhancing the chatbot's performance and user interaction.`,
    // gpa: "3.71",
  },
  {
    year: "2017 - 2021",
    school: "RV College of Engineering",
    degree: "Bachelor of Engineering in Electronics and Communications",
    // location: "Bangalore, India",
    // description: `Developed an advanced chatbot designed for coaching and mentorship utilizing cutting-edge technologies such as OpenAI, VertexAI, and TensorFlow. The work involved sophisticated data modeling, algorithm development, and the application of deep learning principles, significantly enhancing the chatbot's performance and user interaction.`,
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
    title: "FAQ Generator",
    image: project1,
    description:
      "Developed an advanced FAQ generation system by fine-tuning several models including QLoRA PEFT Llama-3 8b, Llama-2 7b, Mistral 7b, T5, and BART. The project involved scraping admission requirements for MS in CS from the top 150 US universities and storing the data in a JSON file. Enhanced the accuracy and relevance of the generated FAQs by 10% compared to a baseline T5 transformer model.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Beautiful Soup"],
    github: `https://github.com/Rohit04121998/Automated-FAQ-Generation`,
  },
  {
    title: "Gemini Quizify",
    image: project2,
    description:
      "Collaborated with Radical AI to develop ReX, a chatbot using Gemini Pro. Created a quiz algorithm leveraging VertexAI embeddings and Chroma DB for data pipeline management, and built a Streamlit UI for data ingestion. This hands-on project showcased proficiency in chatbot development and data pipeline integration.",
    technologies: ["Python", "PyTorch", "LangChain", "GCP"],
    github: `https://github.com/Rohit04121998/Gemini-Quizify`,
  },
  {
    title: "American Sign Language Recognition using CNN",
    image: project3,
    description:
      "Implemented custom Convolutional Neural Network (CNN) models from scratch and integrated transfer learning to evaluate model performance by F-1 scores. Achieved 100% accuracy on a familiar dataset and 71% accuracy on an unfamiliar dataset characterized by abstract features, demonstrating strong skills in deep learning and image recognition.",
    technologies: ["Python", "PyTorch", "NumPy"],
    github: `https://github.com/Rohit04121998/American-Sign-Language-Recognition-using-Convolutional-Neural-Network`,
  },
  {
    title: "Enhancing Interpretability in Mushroom Classification",
    image: project4,
    description:
      "Conducted a comprehensive analysis and feature engineering on the UCI mushroom dataset using UFS, RFE, and PCA. Compared various supervised models and achieved 99% accuracy with SVM, highlighting robust data analysis and modeling capabilities.",
    technologies: ["Python", "NumPy", "Seaborn"],
    github: `https://github.com/Rohit04121998/Enhancing-Interpretability-in-Mushroom-Classification`,
  },
  {
    title: "Machine Learning over Encrypted Medical Data",
    image: project5,
    description:
      "Designed a framework for transparent medical data analysis using a dummy Client-Server-Receiver Model without user awareness of data contents. Implemented Homomorphic Encryption and Diffie-Hellman-Merkel Key Exchange, ensuring maximum data security and privacy with a remarkably low error rate of 3.71e-11.",
    technologies: ["Python", "NumPy", "Seaborn", "PyTorch"],
  },
];

export const CONTACT = {
  address: "1226 W Adams Blvd, Los Angeles, CA 90007",
  phoneNo: "+1 (213) 373-0506 ",
  email: "rohit.veeradhi@gmail.com",
};