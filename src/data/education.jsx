import { FiBook, FiAward } from 'react-icons/fi'
import { LuGraduationCap } from "react-icons/lu";

export const education = [
  {
    degree: 'B.Tech in CSE (AI & Data Science)',
    institution: 'Vishnu Institute of Technology',
    period: '2022 – 2026',
    description: 'Focused on AI, Data Science, and full-stack development. GPA: 8.69. Completed projects in NLP, deep learning, and predictive analytics.',
    icon: <LuGraduationCap />
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College, Vijayawada',
    period: '2020 – 2022',
    description: 'Completed MPC stream with a score of 92.9%. Built a strong foundation in mathematics and problem-solving.',
    icon: <FiBook />
  },
  {
    degree: 'High School (SSC)',
    institution: 'Sri Chaitanya Techno School, Rajahmundry',
    period: '2019 – 2020',
    description: 'Graduated with a score of 95%, excelling in science and mathematics.',
    icon: <FiBook />
  }
]