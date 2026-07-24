const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'What I Do' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const featuredProjects = [
  {
    name: 'Tech Portfolio UI',
    description: 'A polished, dark-themed portfolio experience built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    link: '#projects',
  },
  {
    name: 'Automation Workflow',
    description: 'A process improvement concept for automating repetitive development tasks.',
    tags: ['Python', 'CI/CD', 'Scripting'],
    link: '#projects',
  },
];

const stackItems = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git / GitHub',
  'VS Code',
  'Node.js',
  'REST APIs',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-widest text-white">Ian van der Merwe</div>
          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section className="relative isolate overflow-hidden pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="rounded-3xl border border-white/5 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl md:p-14">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Software Engineer | Graduate | Ready to build</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hi, I&apos;m Ian — a recent software engineering graduate building polished digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I craft modern, dark-themed interfaces and reliable web solutions using TypeScript, React,
              and Next.js. I&apos;m actively seeking my first role where I can learn quickly, ship quality code,
              and contribute to real products.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View featured projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/5 bg-slate-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A developer who enjoys clean code, strong design, and practical solutions.</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              I studied software engineering and have been honing full-stack development skills through projects and practice.
              I enjoy working with modern frameworks, building responsive user interfaces, and solving problems with a structured,
              detail-oriented approach.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="text-xl font-semibold text-white">What I value</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Readable and maintainable code</li>
                <li>Fast, accessible web experiences</li>
                <li>Teamwork, communication, and growth</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="text-xl font-semibold text-white">What I bring</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Hands-on experience with component-driven UI</li>
                <li>Project planning through clear requirements</li>
                <li>Curiosity for new tools and best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Current focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">What I am working on right now</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="text-xl font-semibold text-white">Portfolio and personal brand</h3>
              <p className="mt-4 leading-7 text-slate-300">
                I am building this portfolio to showcase my skills, demonstrate a polished design system, and present a deep
                focus on usability. The project highlights my ability to design and implement a production-ready web experience.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="text-xl font-semibold text-white">Expanding full-stack knowledge</h3>
              <p className="mt-4 leading-7 text-slate-300">
                I am practising full-stack development with Next.js and modern tooling while also exploring how to deploy,
                monitor, and optimize applications for performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/5 bg-slate-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Projects that highlight where I&apos;m headed.</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-glow transition hover:-translate-y-1 hover:border-cyan-500/20">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-200">Featured</span>
                </div>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Working stack</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Tools and technologies I use most.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item) => (
              <div key={item} className="rounded-3xl border border-white/5 bg-slate-900/80 p-6 text-center text-slate-200 shadow-glow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-slate-950/70 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s connect.</h2>
            <p className="mt-4 text-slate-300">
              I&apos;m actively looking for my first software engineering role and would love to talk about opportunities,
              internships, or entry-level projects.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <a href="mailto:hello@example.com" className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
              <p className="mt-4 text-lg font-semibold text-white">hello@example.com</p>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">LinkedIn</p>
              <p className="mt-4 text-lg font-semibold text-white">linkedin.com/in/yourname</p>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">GitHub</p>
              <p className="mt-4 text-lg font-semibold text-white">github.com/yourhandle</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ian van der Merwe. Crafted for a modern, dark portfolio experience.</p>
          <p className="text-slate-400">Built with Next.js, Tailwind CSS and TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}
