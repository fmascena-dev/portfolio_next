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
      period: "2023 - Present",
      title: "Freelance Web Developer",
      company: "Freelancer",
      description:
        "Desenvolvimento de aplicações web completas usando React, Node.js, Next.js, TypeScript, Python, Django, Java, Spring.",
    },
    {
      period: "2021 - 2023",
      title: "Encarregado Logístico",
      company: "WMA Transportes e Logística",
      description: "Gestão de mercadorias, gestão de pessoas, gestão de galpão, roteirização de entregas.",
    },
  ],
  education: [
    {
      period: "2024 - 2028",
      title: "Engenharia de Software",
      institution: "Universidade de Uberaba",
      description:
        "Bacharelado com foco em criação de software de alta qualidade.",
    },
    {
      period: "2024 - 2026",
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "UniFatecie",
      description: "Tecnólogo em Análise e Desenvolvimento de Sistemas.",
    },
    {
      period: "2025 - 2025",
      title: "Desenvolvedor FullStack",
      institution: "Vai na Web",
      description: "Certificação em desenvolvimento fullstack.",
    },
    {
      period: "2025 - 2028",
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      description: "Certificação em serviços cloud.",
    },
  ],
  skills: [
    {
      name: "Frontend",
      items: [
        "React",
        "Vue.js",
        "Next.js",
        "Tailwind",
        "Sass",
        "Styled-Components",
        "Javascript",
        "TypeScript",
      ],
    },
    {
      name: "Backend",
      items: ["Node.js", "Python", "Django", "Java", "Spring", "MySQL"],
    },
    { name: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "IaC"] },
    {
      name: "Soft Skills",
      items: [
        "Comunicação",
        "Liderança",
        "Trabalho em Equipe",
        "Aprendizado contínuo",
        "Pensamento analítico e crítico",
        "Proatividade",
        "Organização e Gestão do tempo",
        "Atendimento ao Cliente",
      ],
    },
  ],
  about: {
    description:
      "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e escaláveis. Experiência em desenvolvimento web moderno e práticas ágeis.",
    interests: [
      "Open Source",
      "Front-End",
      "Back-End",
      "Full-Stack",
      "Cloud Computing",
      "DevOps",
    ],
  },
};

export const skillsData = [
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
  {
    name: "Next.js",
    icon: "/skills/next.svg",
  },
  {
    name: "Spring",
    icon: "/skills/spring.svg",
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
    name: "Sass",
    icon: "/skills/sass.svg",
  },
  {
    name: "Python",
    icon: "/skills/python.svg",
  },
  {
    name: "Styled-Components",
    icon: "/skills/styled-components.svg",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.svg",
  },
  {
    name: "React",
    icon: "/skills/react.svg",
  },
  {
    name: "HTML5",
    icon: "/skills/html.svg",
  },
  {
    name: "CSS3",
    icon: "/skills/css.svg",
  },
  {
    name: "Django",
    icon: "/skills/django.svg",
  },
  {
    name: "Vue.js",
    icon: "/skills/vue-js.svg",
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
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
    title: "Celular",
    content: "(21) 97929-8951",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "felipe.mascena.dev@gmail.com",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Endereço",
    content: "Rio de Janeiro, Belford Roxo",
    bg: "bg-emerald-400/10",
  },
];
