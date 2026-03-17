export type NavSection = {
  id: string
  label: string
}

export type Metric = {
  value: string
  label: string
  detail: string
}

export type CapabilityGroup = {
  title: string
  summary: string
  items: string[]
}

export type ExperienceEntry = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  bullets: string[]
  stack: string[]
}

export type EducationEntry = {
  school: string
  degree: string
  period: string
  location: string
  score: string
}

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  slug: string
  category: string
  image: string
  label: string
  summary: string
  problem: string
  solution: string
  outcome: string
  role: string
  stack: string[]
  highlights: string[]
  links: ProjectLink[]
}

import humanEmotionDetectionImage from '../../images/human-emotion-detection.png'
import iefaImage from '../../images/iefa.png'
import langchainOpenAiImage from '../../images/langchain-openai.png'
import objectDetectionImage from '../../images/object-detection.png'
import viveoImage from '../../images/viveo.png'
import wikiHowFineTuningImage from '../../images/wiki-how-fine-tuning.png'

export const navSections: NavSection[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'proof', label: 'Highlights' },
]

export const heroMetrics: Metric[] = [
  {
    value: '2,000+',
    label: 'Concurrent users supported',
    detail: 'Scaled a serverless AI travel agent API at Travelport.',
  },
  {
    value: '92%',
    label: 'Inference cost reduction',
    detail: 'Achieved through routing and caching optimizations.',
  },
]

export const proofMetrics: Metric[] = [
  {
    value: '260+',
    label: 'Schemas automated',
    detail: 'Metadata ingestion workflows delivered at Deloitte.',
  },
  {
    value: '10x',
    label: 'Clustering speedup',
    detail: 'FAISS-optimized research workflows at Rutgers.',
  },
  {
    value: '80%',
    label: 'Execution time reduction',
    detail: '64-core parallelized simulations for research analysis.',
  },
  {
    value: '$0.0009',
    label: 'Cost per query benchmark',
    detail: 'Measured on the Insider Equity Fundamental Analysis platform.',
  },
]

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'AI Engineering',
    summary: 'Production-oriented AI systems built around grounded retrieval, dependable orchestration, and measurable output quality.',
    items: [
      'LangChain / LangGraph',
      'Agentic AI Workflows',
      'Tools & MCP Servers',
      'RAG pipelines',
      'Vector databases',
      'Evaluation and guardrails',
    ],
  },
  {
    title: 'Backend & Reliability',
    summary: 'Scalable API design and runtime reliability for AI-powered applications and services.',
    items: [
      'Python',
      'FastAPI',
      'Java & Spring Boot',
      'REST and WebSockets',
      'Redis',
      'OpenTelemetry',
      'Resilience and fault tolerance',
      'Bash and automation',
    ],
  },
  {
    title: 'Cloud & Deployment',
    summary: 'Cloud-native delivery with cost awareness, orchestration, and CI/CD discipline.',
    items: [
      'AWS Bedrock',
      'AWS Lambda',
      'AWS API Gateway',
      'AWS S3',
      'AWS ECR',
      'AWS SageMaker',
      'AWS AgentCore',
      'Docker',
      'Kubernetes',
      'CI / CD',
    ],
  },
  {
    title: 'ML & Data',
    summary: 'Modeling, training, and data workflows across analytics, experimentation, and distributed systems.',
    items: [
      'PyTorch',
      'TensorFlow',
      'Fine-tuning',
      'NLP',
      'LoRA',
      'scikit-learn',
      'SQL',
      'Airflow',
      'Databricks',
      'ETL',
      'Distributed systems',
    ],
  },
]

export const experiences: ExperienceEntry[] = [
  {
    role: 'AI Engineer',
    company: 'Travelport',
    location: 'Jersey City, NJ',
    period: 'Aug 2024 - Present',
    summary:
      'Owning end-to-end AI engineering for travel workflows, backend services, and computer vision systems with an emphasis on reliability, scale, and cost control.',
    bullets: [
      'Developed a RAG-driven AI agent for natural-language report generation across complex workflows, producing structured zero-hallucination outputs via tool orchestration.',
      'Architected and deployed a production MCP server for hotel search across Travelport APIs with distributed rate limiting, retries, circuit breakers, and OpenTelemetry tracing.',
      'Led backend architecture for a serverless AI travel agent spanning flight and hotel workflows, scaling support to 2,000+ concurrent users while reducing inference cost by 92%.',
      'Fine-tuned and deployed a YOLOv11x computer vision model with 94% accuracy and built a multi-GPU Dockerized inference service that reduced latency by 68% during testing.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'AI Agents', 'RAG', 'YOLO', 'AWS Bedrock', 'AWS Lambda', 'MCP', 'Redis', 'Docker', 'OpenTelemetry'],
  },
  {
    role: 'Research Assistant',
    company: 'Rutgers University',
    location: 'New Brunswick, NJ',
    period: 'Oct 2022 - Dec 2023',
    summary:
      'Applied NLP, clustering, and parallel compute techniques to research workflows spanning media analysis and bioinformatics.',
    bullets: [
      'Applied topic modeling and unsupervised clustering on large-scale media corpora, achieving a 10x FAISS-optimized KMeans speedup and extracting 150+ latent themes using BERTopic.',
      'Designed algorithms for gene-drug interaction analysis and parallelized simulations across 64 cores, reducing execution time by 80% while surfacing the top 10% statistically significant candidates.',
      'Standardized multi-source data and applied NLP preprocessing techniques to reduce dataset size by 30% while removing noisy artifacts such as URLs, HTML tags, and emojis.',
    ],
    stack: ['Python', 'BERTopic', 'FAISS', 'NLP', 'Clustering', 'Parallel Processing'],
  },
  {
    role: 'Data Engineer',
    company: 'Deloitte Consulting',
    location: 'Hyderabad, India',
    period: 'Aug 2020 - Jun 2022',
    summary:
      'Built the data engineering foundation behind my current systems approach through cloud ETL, metadata automation, and analytics-facing services across enterprise platforms.',
    bullets: [
      'Led a 4-member team integrating Databricks with Collibra Catalog, automating metadata ingestion for 260+ schemas and reducing manual effort by 99%.',
      'Engineered ETL pipelines from AWS S3 to Redshift using AWS Glue and Apache Airflow, enabling scalable processing across cloud lake and warehouse environments.',
      'Developed optimized SQL APIs for MySQL, Oracle, and PostgreSQL to support cross-platform analytics and downstream BI integrations.',
      'Parallelized Qlik Sense ingestion into Informatica Cloud and Collibra through Unix-based automation, cutting processing time by 66% and supporting five production releases.',
    ],
    stack: ['AWS Glue', 'Redshift', 'Airflow', 'Databricks', 'Collibra', 'SQL', 'ETL'],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'Rutgers University',
    degree: 'Master of Science in Data Science',
    period: 'May 2024',
    location: 'New Brunswick, NJ',
    score: 'GPA 3.65 / 4.00',
  },
  {
    school: 'National Institute of Technology, Kurukshetra',
    degree: 'Bachelor of Technology',
    period: 'May 2020',
    location: 'Kurukshetra, India',
    score: 'GPA 8.47 / 10.00',
  },
]

export const featuredProjects: Project[] = [
  {
    title: 'Insider Equity Fundamental Analysis',
    slug: 'insider-equity-fundamental-analysis',
    category: 'Agents / RAG / Full-Stack AI',
    image: iefaImage,
    label: 'Innovation project',
    summary:
      'An AI equity research platform that ingests filings, company facts, and news to generate grounded analyst-style reports with measurable quality signals.',
    problem:
      'Fundamental equity research is slow and fragmented because analysts have to pull together filings, company fundamentals, and fresh market context before they can even begin forming an investment view.',
    solution:
      'Built a LangGraph-driven multi-agent workflow backed by Java/Spring Boot and Python services to retrieve, rank, and synthesize SEC EDGAR filings, SEC Company Facts, and web news into citation-grounded reports.',
    outcome:
      'Delivered a research workflow that benchmarks at 80% citation retrieval and 87% news coverage across 100 requests over 10 tickers, while keeping execution cost near $0.0009 per query.',
    role: 'AI engineer and backend builder',
    stack: ['LangGraph', 'Web search', 'Financial analysis', 'React', 'RAG', 'Python', 'Java', 'Spring Boot', 'ChromaDB', 'SEC EDGAR'],
    highlights: [
      'Multi-agent orchestration for retrieval, synthesis, and evaluation',
      'Citation-grounded outputs with confidence and telemetry hooks',
      'Benchmarking workflow for cost and coverage analysis',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/multi-agent-equity-fundamental-analysis',
      },
    ],
  },
  {
    title: 'wikiHow Text Summarization',
    slug: 'wikihow-text-summarization-llms',
    category: 'LLM Fine-Tuning',
    image: wikiHowFineTuningImage,
    label: 'Academic project',
    summary:
      'A large-scale summarization project comparing baseline seq2seq models, pretrained transformers, and LoRA fine-tuning on the wikiHow dataset.',
    problem:
      'Long-form summarization quality drops quickly without disciplined preprocessing, model selection, and evaluation.',
    solution:
      'Trained and compared LSTM, transformer, BART, T5, and LoRA fine-tuned T5 variants on a large wikiHow corpus, then published the best-performing model to Hugging Face.',
    outcome:
      'Produced measurable ROUGE and BLEU improvements and shipped the fine-tuned model for reuse.',
    role: 'NLP and model fine-tuning contributor',
    stack: ['Fine-tuning', 'Transformers', 'LoRA', 'T5', 'Hugging Face', 'ROUGE', 'BLEU'],
    highlights: [
      'Compared baseline and pretrained summarization approaches on the same dataset',
      'Applied LoRA fine-tuning for efficient adaptation',
      'Published trained model artifacts for downstream use',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/wikiHow_text_summarization_llms',
      },
      {
        label: 'Hugging Face',
        url: 'https://huggingface.co/rohitmacherla3/wikihow_t5small_LoRA_fine_tuned',
      },
    ],
  },
  {
    title: 'Human Emotion Detection',
    slug: 'human-emotion-detection',
    category: 'Computer Vision',
    image: humanEmotionDetectionImage,
    label: 'Academic project',
    summary:
      'A computer vision project for classifying human emotions from images using CNN backbones and transformer-based vision models.',
    problem:
      'Emotion classification depends on capturing subtle visual cues, and baseline convolutional models often trade off accuracy against model complexity.',
    solution:
      'Benchmarked custom CNNs, ResNet50, EfficientNetB4, and Vision Transformers on a labeled emotion dataset, then packaged the best-performing workflow into a Streamlit app.',
    outcome:
      'Delivered a live demo for image-based emotion recognition and showed that transformer-based vision models outperform the CNN baselines.',
    role: 'Computer vision and ML engineer',
    stack: ['Computer Vision', 'TensorFlow', 'ResNet50', 'EfficientNetB4', 'Vision Transformer', 'Streamlit'],
    highlights: [
      'Compared four model families on the same emotion classification task',
      'Built an interactive deployment for quick visual testing',
      'Used augmentation and callback-driven training for more stable performance',
    ],
    links: [
      {
        label: 'Live Demo',
        url: 'https://human-emotion-detection.streamlit.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/human-emotion-detection-CV',
      },
    ],
  },
]

export const archiveProjects: Project[] = [
  {
    title: 'Viveo',
    slug: 'viveo',
    category: 'Full-Stack AI Application',
    image: viveoImage,
    label: 'Innovation project',
    summary:
      'An AI-powered calorie tracking application with nutrition analysis, semantic food search, and a Dockerized FastAPI plus MySQL architecture.',
    problem:
      'Most nutrition apps rely on generic food databases instead of the specific products and meals people actually use, which makes tracking less personal and weakens downstream recommendations, analysis, and daily guidance.',
    solution:
      'Built an AI-first nutrition platform with FastAPI and MySQL that stores product-specific food context, uses embedding-based retrieval for personalized reuse during logging, and layers analytics for daily recommendations, tips, and nutrition analysis on top of each user history.',
    outcome:
      'Created a full-stack nutrition product architecture with deploy scripts, health checks, and a local development workflow.',
    role: 'Full-stack AI application builder',
    stack: ['FastAPI', 'MySQL', 'RAG', 'OpenAI Embeddings', 'Health sciences', 'Docker', 'Nginx', 'Claude'],
    highlights: [
      'Semantic search over food logs using embeddings',
      'AI-assisted nutrition analysis and personalized insights',
      'Deployment workflow designed for dev and production environments',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/Viveo',
      },
    ],
  },
  {
    title: 'LangChain OpenAI Application Suite',
    slug: 'langchain-openai-applications',
    category: 'RAG / AI App',
    image: langchainOpenAiImage,
    label: 'Learning project',
    summary:
      'A Streamlit-based suite of LangChain applications covering PDF chat, conversational agents, and question answering with OpenAI models.',
    problem:
      'Users often need different interaction patterns with AI systems, from grounded document chat to tool-using assistants and fast single-turn Q&A.',
    solution:
      'Built multiple LangChain applications in one deployable Streamlit suite, combining OpenAI chat models, retrieval over uploaded PDFs, and tool-based conversational flows.',
    outcome:
      'Delivered a public generative AI app suite with a live demo that showcases grounded PDF chat and reusable assistant patterns.',
    role: 'AI application builder',
    stack: ['LangChain', 'OpenAI', 'FAISS', 'Streamlit', 'Python', 'RAG'],
    highlights: [
      'PDF chat experience with retrieval over uploaded documents',
      'Conversational agent flow that can choose between direct answers and tool use',
      'Single deployed app demonstrating multiple reusable AI interaction patterns',
    ],
    links: [
      {
        label: 'Live Demo',
        url: 'https://generative-ai-application-suite.streamlit.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/Langchain-OpenAI-Applications',
      },
    ],
  },
  {
    title: 'Real-Time Object Detection System',
    slug: 'real-time-object-detection-system',
    category: 'Computer Vision',
    image: objectDetectionImage,
    label: 'Learning project',
    summary:
      'A real-time object detection workflow that counts objects crossing a predefined path from webcam or recorded video input.',
    problem:
      'Real-time computer vision tasks need low-latency detection and a clear event-driven definition of what counts as an observed object.',
    solution:
      'Wrapped a YOLO-based detection pipeline into an interactive application that accepts live or prerecorded video and tracks objects across a predetermined line of interest.',
    outcome:
      'Published both a demo experience and an open repository for experimenting with live object detection workflows.',
    role: 'Computer vision builder',
    stack: ['YOLO', 'OpenCV', 'Python', 'Streamlit', 'Computer Vision'],
    highlights: [
      'Live webcam and prerecorded video support',
      'Path-based counting logic for event detection',
      'Practical demo deployment for rapid validation',
    ],
    links: [
      {
        label: 'Live Demo',
        url: 'https://realtime-object-detetction.streamlit.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/RohitMacherla3/real-time-object-detection-system',
      },
    ],
  },
]

export const contactLinks: ProjectLink[] = [
  { label: 'Email', url: 'mailto:rohitmacherla125@gmail.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rohitmacherla125/' },
  { label: 'GitHub', url: 'https://github.com/RohitMacherla3' },
  {
    label: 'Resume',
    url: 'images/Rohit_Macherla_AIE.pdf',
  },
]