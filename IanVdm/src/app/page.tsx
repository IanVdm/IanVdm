const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Now' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const aboutPoints = [
  'I enjoy turning complex ideas into clear, usable software.',
  'I care about thoughtful UI, clean structure, and practical problem-solving.',
  'I’m motivated by growth, teamwork, and building products that feel polished.',
];

const currentFocus = [
  {
    title: 'Building my personal brand',
    description:
      'I’m shaping this portfolio into a clear reflection of my skills, design sensibility, and direction as a developer.',
  },
  {
    title: 'Expanding my full-stack toolkit',
    description:
      'I’m practicing modern development workflows with Next.js, TypeScript, and cloud-friendly deployment patterns.',
  },
  {
    title: 'Exploring the world of Systems',
    description:
      'I’m exploring the in’s and out’s of the world of systems such as Active Directory, DNS, network infrastructure, servers and many more to come.',
  },
];

const featuredProjects = [
  {
    name: 'Portfolio Site',
    description: 'A polished single-page experience built with Next.js, Tailwind CSS, and a dark, modern visual style.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    link: 'This current site.',
  },
  {
    name: 'Planetoria',
    description: 'An IOS application I developed for my Minor Showcase project. It introduced me to the world of IOS development and SwiftUI, and I learned a lot about the process of building an app from scratch.',
    tags: ['IOS', 'SwiftUI', 'Swift'],
    link: 'https://github.com/IanVdm/Planetoria',
  },
  {
    name: 'Home Lab',
    description: 'I am currently in the process of building a home lab to explore the world of systems and networking. I am learning about Active Directory, DNS, network infrastructure, servers, best practice secuirity concepts and many more to come.',
    tags: ['Systems', 'Networking', 'Windows Server', 'Linux Server', 'Active Directory', 'DHCP & DNS', 'Security'],
    link: 'Comming Soon...',
  },
];

const stackItems = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git / GitHub',
  'Node.js',
  'REST APIs',
  'VS Code',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'ianvdm2001@gmail.com',
    href: 'mailto:ianvdm2001@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Ian van der Merwe',
    href: 'https://www.linkedin.com/in/ian-van-der-merwe-834887225/',
  },
  {
    label: 'GitHub',
    value: 'IanVdm',
    href: 'https://github.com/IanVdm',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-50">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Ian van der Merwe
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-zinc-400 transition hover:text-cyan-500"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section id="top" className="relative isolate overflow-hidden pt-24">
        {/* Decorative SVG blobs behind the hero */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="60%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="g2" x1="0%" x2="100%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <linearGradient id="g3" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>

              {/* filter to softly blur / smooth blob edges to avoid hard artifacts */}
              <filter id="soften" x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox">
                <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="morph" />
                <feGaussianBlur in="morph" stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <g transform="translate(60,30)">
              {/* larger, more prominent front blob (moved left and scaled) */}
              <path className="blob blob-1" filter="url(#soften)" transform="translate(-80,-40) scale(1.18)" fill="url(#g1)" opacity="0.26" d="M280 30c90-40 220-10 300 40s100 160 50 260-190 140-270 110-170-110-230-200S200 100 280 30z" />

              {/* secondary blob on the right (smaller, pushed further right) */}
              <path className="blob blob-2" transform="translate(160,60) scale(0.78)" fill="url(#g2)" opacity="0.12" d="M980 340c70-70 190-100 270-60s140 150 110 250-160 180-270 190-220-20-280-120-30-170 160-250z" />

              {/* new accent blob slightly behind and shifted left */}
              <path className="blob blob-3" transform="translate(-40,20) scale(1.02)" fill="url(#g3)" opacity="0.14" d="M600 120c120-30 260 10 340 80s40 220-70 300-260 80-360 10-160-190-90-300 110-120 180-170z" />
            </g>

            {/* faint floating dots */}
            <g className="dots" fill="#ffffff" opacity="0.04">
              <circle cx="260" cy="120" r="3.8" />
              <circle cx="520" cy="80" r="4.2" />
              <circle cx="820" cy="70" r="3.2" />
              <circle cx="1120" cy="260" r="3.6" />
              <circle cx="920" cy="460" r="3.4" />
              <circle cx="620" cy="620" r="4.0" />
              <circle cx="360" cy="440" r="3.0" />
            </g>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-10 shadow-[0_0_80px_rgba(6,182,212,0.12)] backdrop-blur-xl md:p-14">
            <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.35em] sm:text-[0.9rem]">
              Software Engineer • Graduate • Open to work
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Ian — a recent software engineering graduate building thoughtful digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              I enjoy creating clear user experiences, strong front-end foundations, and practical web applications that feel polished from the first click.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-7 py-3 text-sm font-semibold text-[#09090b] shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-transform duration-200 hover:scale-[1.10]"
              >
                See featured work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan-500/40 hover:text-cyan-300"
              >
                Let&apos;s connect
              </a>
            </div>
            <p className="mt-10 text-sm uppercase tracking-[0.3em] text-zinc-500">Scroll to explore</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/[0.06] bg-[#09090b] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">From curiosity to code, with a focus on clarity and craft.</h2>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
              I studied software engineering and have been sharpening my skills through projects that combine clean interfaces, reliable architecture, and practical problem-solving.
              I’m drawn to work that feels both technically solid and genuinely useful to the people using it.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]">
            <h3 className="text-xl font-semibold text-white">What I value</h3>
            <ul className="mt-6 space-y-4 text-zinc-300">
              {aboutPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#09090b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">Now</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What I&apos;m building right now</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {currentFocus.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)]">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/[0.06] bg-[#09090b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">Featured projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work that reflects my direction.</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="gradient-border-hover rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-200">Featured</span>
                </div>
                <p className="mt-4 text-zinc-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="bg-[#09090b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">Working stack</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tools and technologies I use most.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-6 text-center text-zinc-200 shadow-[0_0_60px_rgba(6,182,212,0.08)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/[0.06] bg-[#09090b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s connect.</h2>
            <p className="mt-4 text-zinc-300 sm:text-lg">
              I&apos;m actively looking for my first software engineering role and would love to talk about internship, junior, or collaborative opportunities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="gradient-border-hover rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 text-zinc-200 transition duration-300 hover:bg-white/[0.04]"
              >
                <p className="gradient-text text-[0.8rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.9rem]">{link.label}</p>
                <p className="mt-4 text-lg font-semibold text-white sm:text-xl">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#09090b] px-6 py-10 text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ian van der Merwe.</p>
          <p className="text-zinc-400">Built with Next.js, Tailwind CSS and TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}
