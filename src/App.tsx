import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'
import {
  archiveProjects,
  capabilityGroups,
  contactLinks,
  education,
  experiences,
  featuredProjects,
  heroMetrics,
  navSections,
  proofMetrics,
  type Project,
} from './data/content'

const assetUrl = (path: string) =>
  path.startsWith('http://') ||
  path.startsWith('https://') ||
  path.startsWith('/') ||
  path.startsWith('data:') ||
  path.startsWith('blob:')
    ? path
    : `${import.meta.env.BASE_URL}${path}`

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
}

function App() {
  const reduceMotion = useReducedMotion()
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -45% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.removeProperty('overflow')
      return
    }

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [selectedProject])

  const revealProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: revealTransition,
      }

  const [primaryProject, ...secondaryProjects] = featuredProjects

  return (
    <div className="relative overflow-x-hidden text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(68,211,205,0.18),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(252,167,75,0.16),transparent_26%),radial-gradient(circle_at_50%_120%,rgba(30,56,99,0.9),transparent_55%)]" />
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#home">
            <span className="inline-flex h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(68,211,205,0.18)]">
              <img
                alt="Rohit Macherla"
                className="h-full w-full object-cover"
                src={assetUrl('images/Profile-Picture.png')}
              />
            </span>
            <div>
              <p className="font-display text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Rohit Macherla
              </p>
              <p className="text-xs text-slate-400">AI Engineer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
            {navSections.map((section) => (
              <a
                key={section.id}
                className={clsx(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  activeSection === section.id
                    ? 'bg-cyan-300 !text-slate-950 shadow-[0_10px_30px_rgba(68,211,205,0.35)]'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white',
                )}
                href={`#${section.id}`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="button-primary" href={assetUrl('images/Rohit_Macherla_AIE.pdf')} download>
              Resume
            </a>
            <a className="button-primary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-20" data-section id="home">
          <div className="space-y-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <motion.div {...revealProps} className="space-y-6">
                <div className="space-y-6">
                  <p className="eyebrow">End-to-end AI systems · backend architecture · applied ML</p>
                  <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    I design, architect, build, and deploy AI products end to end.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    My work spans product design, system architecture, backend engineering, model integration,
                    and deployment across agents, RAG systems, computer vision, and cloud-based AI platforms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...revealProps}
                className="relative"
                transition={reduceMotion ? undefined : { ...revealTransition, delay: 0.12 }}
              >
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />

                <div className="relative space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroMetrics.map((metric) => (
                      <div key={metric.label} className="surface-card flex h-full flex-col justify-between space-y-2 p-5">
                        <p className="font-display text-3xl font-bold text-white">{metric.value}</p>
                        <p className="text-sm font-semibold text-slate-200">{metric.label}</p>
                        <p className="text-sm text-slate-400">{metric.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      className="surface-card flex min-h-[3.5rem] items-center justify-center px-5 text-sm font-semibold text-slate-100 transition hover:border-white/15 hover:bg-white/[0.06]"
                      href="https://www.linkedin.com/in/rohitmacherla125/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="surface-card flex min-h-[3.5rem] items-center justify-center px-5 text-sm font-semibold text-slate-100 transition hover:border-white/15 hover:bg-white/[0.06]"
                      href="https://github.com/RohitMacherla3"
                      rel="noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              {...revealProps}
              className="grid gap-5 xl:grid-cols-[0.96fr_1.04fr] xl:items-stretch"
              transition={reduceMotion ? undefined : { ...revealTransition, delay: 0.16 }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [-4, 4, -4] }}
                className="surface-card overflow-hidden p-6"
                transition={reduceMotion ? undefined : { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="eyebrow">Current role</p>
                    <h2 className="mt-2 font-display text-2xl text-white">Travelport · AI Engineer</h2>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
                    Shipping now
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
                  <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Focus areas</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                      <li>AI travel workflows across search, reporting, and tool orchestration</li>
                      <li>Production FastAPI and MCP services with reliability and observability built in</li>
                      <li>Cost-aware RAG and computer vision systems designed for real user traffic</li>
                    </ul>
                  </div>

                  <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Architecture snapshot</p>
                    <div className="mt-4 grid gap-2 text-sm text-slate-300">
                      <span className="inline-flex rounded-2xl border border-white/10 px-3 py-2">LangGraph + Bedrock + tool orchestration</span>
                      <span className="inline-flex rounded-2xl border border-white/10 px-3 py-2">FastAPI + MCP + Redis + Lambda</span>
                      <span className="inline-flex rounded-2xl border border-white/10 px-3 py-2">OpenTelemetry + retries + evaluation</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid h-full gap-5 sm:grid-cols-2 xl:grid-cols-2 xl:items-stretch">
                <div className="surface-card flex h-full flex-col p-5">
                  <p className="eyebrow">Education</p>
                  <div className="mt-4 flex flex-1 flex-col gap-4">
                    {education.map((entry) => (
                      <div key={entry.school} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                        <p className="font-semibold text-white">{entry.school}</p>
                        <p className="mt-1 text-sm text-slate-300">{entry.degree}</p>
                        <p className="mt-2 text-sm text-slate-400">
                          {entry.period} · {entry.score}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card flex h-full flex-col p-5">
                  <p className="eyebrow">What I build</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      'AI apps',
                      'AI Agents',
                      'MCP servers',
                      'RAG systems',
                      'Backend APIs',
                      'Computer vision',
                      'ML pipelines',
                      'Observability',
                      'Cloud deployment',
                    ].map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionShell description="" eyebrow="" headerClassName="max-w-6xl" id="about" title="About" {...revealProps}>
          <p className="max-w-6xl text-base leading-8 text-slate-300 lg:text-lg">
            My work sits at the intersection of applied AI and systems engineering. I care about building tools
            that are grounded, observable, cost-aware, and fast enough to be useful when real users depend on
            them. That usually means combining AI workflows with strong backend design, retrieval
            infrastructure, and careful deployment choices. I treat inference cost as a first-class engineering
            constraint, not something to optimize after the system is already in production.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="surface-card overflow-hidden p-0 min-h-[17rem] lg:h-full">
              <div className="h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
                <img
                  alt="Rohit Macherla portrait"
                  className="block h-full w-full object-cover object-center"
                  src={assetUrl('images/Profile-Picture.png')}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              <AuditCard
                title="What I build for"
                items={[
                  'Production AI workflows with clear business value',
                  'Developer tools and APIs that stay reliable under load',
                  'ML systems with measurable latency, accuracy, and cost targets',
                ]}
              />
              <AuditCard
                title="How I work"
                items={[
                  'Start with the user workflow, product shape, and the real constraints the system needs to satisfy',
                  'Design the architecture, APIs, and AI workflow together so the product is reliable end to end',
                  'Use bottleneck-driven iteration with evaluation, observability, latency, and quality signals to improve what matters',
                ]}
              />
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 lg:col-span-3">
              <p className="eyebrow">Current focus</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  At Travelport, I&apos;m owning AI engineering across agentic travel workflows, MCP-based tooling,
                  backend services, and computer vision systems that need to perform in production rather than
                  just prototype well.
                </p>
                <p>
                  The projects here reflect the same pattern: retrieval-backed assistants, multi-agent analysis,
                  ML pipelines, and backend-heavy applications where system design matters as much as the model.
                </p>
                <p>
                  I&apos;m especially interested in roles that need end-to-end AI engineering: from experimentation
                  and model integration to APIs, observability, and deployment.
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="eyebrow">Outside of work</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I&apos;m into sports, especially soccer as an FC Barcelona fan, Formula 1 with Ferrari, and cricket.
                  I also spend time around techno and EDM music, go to festivals and raves, and I&apos;m learning
                  DJing. Outside that, I work out regularly and can always rewatch Breaking Bad.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['FC Barcelona', 'Ferrari F1', 'Cricket', 'Techno / EDM', 'Music festivals', 'Learning DJ', 'Working out', 'Breaking Bad'].map((item) => (
                    <span key={item} className="chip chip-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell description="" eyebrow="" id="experience" title="Experience" {...revealProps}>
          <div className="relative space-y-6 before:absolute before:left-6 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/50 before:to-transparent lg:before:left-8">
            {experiences.map((entry) => (
              <div key={`${entry.company}-${entry.role}`} className="relative pl-16 lg:pl-20">
                <span className="absolute left-[1.1rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-slate-950 bg-cyan-300 lg:left-[1.55rem]" />
                <div className="surface-card p-6 lg:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="eyebrow">{entry.period}</p>
                      <h3 className="mt-2 font-display text-3xl text-white">{entry.role}</h3>
                      <p className="mt-2 text-base text-slate-300">
                        {entry.company} · {entry.location}
                      </p>
                    </div>
                    <p className="max-w-xl text-base font-medium leading-7 text-slate-200">{entry.summary}</p>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <ul className="space-y-4 text-sm leading-7 text-slate-300">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Technologies used</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {entry.stack.map((item) => (
                          <span key={item} className="chip chip-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell description="Outside of work, I like building personal AI projects to explore new ideas, test tools in real workflows, and stay close to how the field is evolving." eyebrow="" headerClassName="max-w-none" id="projects" title="Projects" {...revealProps}>
          {primaryProject ? (
            <motion.button
              className="group surface-card overflow-hidden text-left"
              onClick={() => setSelectedProject(primaryProject)}
              type="button"
              whileHover={reduceMotion ? undefined : { y: -6 }}
              whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            >
              <div>
                <div className="relative min-h-80 overflow-hidden border-b border-white/10 bg-slate-950/80">
                  <img
                    alt={primaryProject.title}
                    className="h-full w-full object-contain object-top p-4 transition duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    src={assetUrl(primaryProject.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="space-y-6 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                      {primaryProject.category}
                    </span>
                  </div>
                  <div>
                    <p className="eyebrow">{primaryProject.label}</p>
                    <h3 className="mt-3 font-display text-4xl text-white">{primaryProject.title}</h3>
                  </div>
                  <p className="text-lg leading-8 text-slate-300">{primaryProject.summary}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ProjectMeta label="Problem" value={primaryProject.problem} />
                    <ProjectMeta label="Solution" value={primaryProject.solution} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {primaryProject.stack.map((item) => (
                      <span key={item} className="chip chip-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <motion.button
                key={project.slug}
                className="group surface-card overflow-hidden text-left"
                onClick={() => setSelectedProject(project)}
                type="button"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
              >
                <div className="relative h-64 overflow-hidden border-b border-white/10 bg-slate-950/80">
                  <img
                    alt={project.title}
                    className="h-full w-full object-contain object-top p-4 transition duration-700 group-hover:scale-[1.02]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    src={assetUrl(project.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                </div>

                <div className="space-y-5 p-6 lg:p-7">
                  <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                      {project.category}
                    </span>
                    <div>
                      <p className="eyebrow text-cyan-100/80">{project.label}</p>
                      <h3 className="mt-2 font-display text-3xl text-white">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-base leading-7 text-slate-300">{project.summary}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ProjectMeta label="Problem" value={project.problem} />
                    <ProjectMeta label="Solution" value={project.solution} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="chip chip-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/8 bg-white/[0.02] p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Earlier work</p>
              </div>
              <a className="button-secondary" href="https://github.com/RohitMacherla3?tab=repositories" rel="noreferrer" target="_blank">
                More Projects
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {archiveProjects.map((project) => (
                <button
                  key={project.slug}
                  className="rounded-[1.75rem] border border-white/8 bg-slate-950/55 p-5 text-left transition hover:border-cyan-200/20 hover:bg-slate-900/80"
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{project.category}</p>
                  <h4 className="mt-3 font-display text-2xl text-white">{project.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
                </button>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell description="My skill set spans applied AI, backend engineering, deployment, and machine learning workflows, with an emphasis on building systems that are practical and production-ready." eyebrow="" headerClassName="max-w-6xl" id="skills" title="Skills" {...revealProps}>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="surface-card flex h-full flex-col p-6">
                <p className="eyebrow">{group.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell description="" eyebrow="" headerClassName="max-w-6xl" id="proof" title="Highlights" {...revealProps}>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="surface-card p-6">
                <p className="font-display text-4xl font-bold text-white">{metric.value}</p>
                <p className="mt-3 text-lg font-semibold text-slate-200">{metric.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell description="" eyebrow="" headerClassName="max-w-6xl" id="contact" title="Contact" {...revealProps}>
          <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-24">
            {contactLinks.map((link) => {
              const href = link.url.startsWith('images/') ? assetUrl(link.url) : link.url
              const isExternal = href.startsWith('http')

              return (
                <a
                  key={link.label}
                  className="button-primary w-full justify-center !px-4 !py-2.5 text-[0.92rem]"
                  download={link.label === 'Resume'}
                  href={href}
                  rel={isExternal ? 'noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  {link.label === 'Email' ? 'Email' : link.label}
                </a>
              )
            })}
          </div>
        </SectionShell>
      </main>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-8 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="max-h-full w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_24px_140px_rgba(0,0,0,0.65)]"
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              transition={revealTransition}
            >
              <div>
                <div className="relative h-[18rem] overflow-hidden border-b border-white/10 bg-slate-950/90 sm:h-[22rem] lg:h-[26rem]">
                  <img alt={selectedProject.title} className="h-full w-full object-contain object-top p-5" src={assetUrl(selectedProject.image)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-50">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <p className="eyebrow">{selectedProject.label}</p>
                      <h3 className="mt-2 font-display text-4xl text-white">{selectedProject.title}</h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{selectedProject.summary}</p>
                    </div>
                    <div className="flex items-start gap-3 self-start lg:ml-6">
                      <div className="flex flex-wrap justify-end gap-3">
                        {selectedProject.links.map((link, index) => (
                          <a
                            key={link.label}
                            className={index === 0 ? 'button-primary' : 'button-secondary'}
                            href={link.url}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                      <button
                        aria-label="Close project dialog"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                        onClick={() => setSelectedProject(null)}
                        type="button"
                      >
                        ×
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <ProjectMeta label="Problem" value={selectedProject.problem} />
                    <ProjectMeta label="Solution" value={selectedProject.solution} />
                    <ProjectMeta label="Outcome" value={selectedProject.outcome} />
                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Technical highlights</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {selectedProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span key={item} className="chip chip-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

type SectionShellProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  headerClassName?: string
  children: React.ReactNode
}

function SectionShell({ children, description, eyebrow, headerClassName, id, title, ...motionProps }: SectionShellProps & Record<string, unknown>) {
  return (
    <motion.section
      className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 lg:px-8 lg:py-16"
      data-section
      id={id}
      {...motionProps}
    >
      <div className={clsx('mb-10 max-w-3xl space-y-4', headerClassName)}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="font-display text-4xl font-bold text-cyan-100 sm:text-5xl">{title}</h2> : null}
        {description ? <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  )
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{value}</p>
    </div>
  )
}

function AuditCard({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 min-h-[17rem]">
      <p className="font-display text-2xl text-white">{title}</p>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App
