import {
  Code2,
  Palette,
  PenTool,
  Search,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/fmascena-dev",
    title: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    href: "https://linkedin.com/in/felipe-mascena",
    title: "LinkedIn",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/f_mascena.dev/",
    title: "Instagram",
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/felipe.mascena17",
    title: "Facebook",
  },
  {
    icon: <FaYoutube size={20} />,
    href: "https://youtube.com/seu-canal",
    title: "Youtube",
  },
  {
    icon: <FaTwitter size={20} />,
    href: "https://twitter.com/seu-perfil",
    title: "Twitter",
  },
];

export const stats = [
  { number: "2", text: "Anos de experiência" },
  { number: "26", text: "Projetos finalizados" },
  { number: "11", text: "Tecnologias dominadas" },
  { number: "552", text: "Commits de código" },
];

export const menuItems = [
  { title: "Home", path: "/" },
  { title: "Serviços", path: "/services" },
  { title: "Resumo", path: "/resume" },
  { title: "Projetos", path: "/work" },
  { title: "Contato", path: "/contact" },
];

export const services = [
  {
    number: "01",
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "Criação de sites e aplicações web modernas e responsivas",
    features: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências de usuário",
    features: ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
  },
  {
    number: "03",
    icon: <PenTool size={32} />,
    title: "Logo Design",
    description: "Design de logos e identidade visual para sua marca",
    features: ["Branding", "Vector Art", "Typography", "Color Theory"],
  },
  {
    number: "04",
    icon: <Search size={32} />,
    title: "SEO",
    description: "Otimização para mecanismos de busca e performance web",
    features: ["Analytics", "Keywords", "Link Building", "Technical SEO"],
  },
];

export const ExperienceTabs = [
  { title: "Experiência", id: "experience" },
  { title: "Educação", id: "education" },
  { title: "Habilidades", id: "skills" },
  { title: "Sobre mim", id: "about" },
];

export const resumeData = {
  experience: [
    {
      period: "2022 - Present",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description:
        "Desenvolvimento de aplicações web completas usando React, Node.js e TypeScript",
    },
    {
      period: "2020 - 2021",
      title: "Freelance Web Developer",
      company: "E-commerce Startup",
      description: "Criação de lojas virtuais e sistemas de gestão",
    },
  ],
  education: [
    {
      period: "2018 - 2022",
      title: "Ciência da Computação",
      institution: "Universidade Federal",
      description:
        "Bacharelado com foco em desenvolvimento web e sistemas distribuídos",
    },
    {
      period: "2023",
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      description: "Certificação em serviços cloud",
    },
  ],
  skills: [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD"] },
    {
      name: "Soft Skills",
      items: ["Comunicação", "Liderança", "Trabalho em Equipe"],
    },
  ],
  about: {
    description:
      "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e escaláveis. Experiência em desenvolvimento web moderno e práticas ágeis.",
    interests: [
      "Open Source",
      "UI/UX Design",
      "Cloud Computing",
      "Machine Learning",
    ],
  },
};

export const skillsData = [
  {
    name: "HTML5",
    icon: "/skills/html.svg",
  },
  {
    name: "CSS3",
    icon: "/skills/css.svg",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
  },
  {
    name: "React",
    icon: "/skills/react.svg",
  },
  {
    name: "Next.js",
    icon: "/skills/next.svg",
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
  },
  {
    name: "Tailwind",
    icon: "/skills/tailwind.svg",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
  },
  {
    name: "AWS",
    icon: "/skills/aws.svg",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.svg",
  },
  {
    name: "Java",
    icon: "/skills/java.svg",
  },
];

export const projects = [
  {
    number: "01",
    title: "E-commerce",
    description:
      "Plataforma completa de e-commerce para produtos tech, com carrinho de compras, pagamentos via Stripe e painel administrativo.",
    image: "/work/thumb1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    demoLink: "https://devstore.demo.com",
    githubLink: "https://github.com/seu-usuario/devstore",
  },
  {
    number: "02",
    title: "TaskFlow",
    description:
      "Aplicativo de gestão de projetos e tarefas com funcionalidades de Kanban, timeline e colaboração em tempo real.",
    image: "/work/thumb2.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    demoLink: "https://taskflow.demo.com",
    githubLink: "https://github.com/seu-usuario/taskflow",
  },
  {
    number: "03",
    title: "CodeBlog",
    description:
      "Blog técnico com CMS headless, sistema de comentários, pesquisa avançada e analytics integrado.",
    image: "/work/thumb3.png",
    technologies: ["Next.js", "GraphQL", "Sanity.io", "MDX", "Vercel"],
    demoLink: "https://codeblog.demo.com",
    githubLink: "https://github.com/seu-usuario/codeblog",
  },
  {
    number: "04",
    title: "FitTracker",
    description:
      "Aplicativo mobile-first para acompanhamento de treinos e dieta, com gráficos de progresso e integração com Apple Health.",
    image: "/work/thumb4.png",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Chart.js",
      "TypeScript",
    ],
    demoLink: "https://fittracker.demo.com",
    githubLink: "https://github.com/seu-usuario/fittracker",
  },
  {
    number: "05",
    title: "AI Chat Assistant",
    description:
      "Chatbot inteligente com processamento de linguagem natural, integração com OpenAI GPT e interface conversacional.",
    image: "/work/thumb5.png",
    technologies: ["Python", "FastAPI", "OpenAI", "Redis", "React"],
    demoLink: "https://aichat.demo.com",
    githubLink: "https://github.com/seu-usuario/ai-chat",
  },
];

export const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "(+40) 321 654 876",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "youremail@email.com",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "Code Corner, Tech Town 13579",
    bg: "bg-emerald-400/10",
  },
];
