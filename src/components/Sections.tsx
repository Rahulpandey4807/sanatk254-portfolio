import {
  achievements,
  drawings,
  education,
  experience,
  projects,
  skills,
  summary,
} from "@/data/content";
import ContactForm from "./ContactForm";
import Image from "next/image";

const S = ({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="border-t border-line py-20">
    <div className="mx-auto max-w-6xl px-5">
      <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {lead && <p className="mb-9 max-w-prose text-mut">{lead}</p>}
      {children}
    </div>
  </section>
);
const card = "rounded-xl border border-line bg-card p-6";
const tag = "rounded-full bg-acc/10 px-3 py-1 text-sm font-medium text-acc";

export function Hero() {
  return (
    <section id="home" className="py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="font-semibold text-mut">Mechanical Engineer</p>
          <h1 className="my-2 text-6xl font-extrabold tracking-tight md:text-8xl">
            Sanat Kumar
          </h1>
          <p className="mb-5 text-xl font-semibold text-acc">
            Mechanical Engineer — Design &amp; Development
          </p>
          <p className="max-w-prose text-mut">{summary}</p>
          <div className="my-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="min-h-11 rounded-md bg-fg px-6 py-3 font-semibold text-bg hover:bg-acc hover:text-white"
            >
              Explore My Work
            </a>
            <a
              href="/resume/Sanat_Kumar_Resume.pdf"
              download
              className="min-h-11 rounded-md border border-fg px-6 py-3 font-semibold hover:bg-acc hover:text-white"
            >
              Download Resume
            </a>
          </div>
          <a
            href="https://linkedin.com/in/s254"
            rel="noopener"
            className="underline"
          >
            linkedin.com/in/s254
          </a>
        </div>
        <figure className="overflow-hidden rounded-xl border border-line bg-card">
          <Image
            src="/images/design.png"
            alt="Vertical guide roll assembly shown as a 3D CAD model next to the actual manufactured product"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 768px) 560px, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="p-3 text-sm text-mut">
            Vertical guide roll assembly: 3D CAD model and actual product.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export function About() {
  return (
    <S
      id="about"
      title="About"
      lead="I am a Mechanical Engineer working in design and development across the automotive and metal-section industries."
    >
      <p className="max-w-prose text-mut">
        My work centres on Cold Roll Forming design, CAD modelling and
        engineering drawings. I also bridge technical feasibility and
        procurement data management, aiming for efficient and cost-effective
        engineering solutions.
      </p>
    </S>
  );
}
export function Skills() {
  return (
    <S
      id="skills"
      title="Technical skills"
      lead="Tools grouped by the kind of work they support."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <div key={g.group} className={card}>
            <h3 className="font-bold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className={tag}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </S>
  );
}
export function Experience() {
  return (
    <S
      id="experience"
      title="Experience"
      lead="From industrial training to design and development."
    >
      <div className="ml-1.5 border-l-2 border-line">
        {experience.map((j, i) => (
          <article key={j.role + j.company} className="relative pb-9 pl-7">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-acc bg-bg" />
            <h3 className="text-lg font-bold">{j.role}</h3>
            <p className="my-1 text-sm text-mut">
              {j.company} · {j.dates} · {j.place}
            </p>
            <details open={i === 0} className="mt-2">
              <summary className="cursor-pointer font-semibold text-acc">
                Responsibilities
              </summary>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </S>
  );
}
export function Projects() {
  return (
    <S
      id="projects"
      title="Projects"
      lead="Four design projects. My role in each was Design Engineer."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className={card}>
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="my-1 text-sm text-mut">{p.year} · Design Engineer</p>
            <p>{p.desc}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className={tag}>
                  {t}
                </li>
              ))}
            </ul>
            <details className="mt-4 border-t border-line pt-3">
              <summary className="cursor-pointer font-semibold text-acc">
                View details
              </summary>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-mut">
                {p.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm text-mut">
        Add project photographs to public/images and render them with
        next/image. No project photos were supplied.
      </p>
    </S>
  );
}
export function Drawings() {
  return (
    <S
      id="drawings"
      title="Drawing types handled"
      lead="The engineering drawings I prepare."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drawings.map((d) => (
          <div key={d} className={card}>
            <h3 className="font-bold">{d}</h3>
          </div>
        ))}
      </div>
    </S>
  );
}
export function Achievements() {
  return (
    <S
      id="achievements"
      title="Key achievements"
      lead="Results from my resume."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.text} className={card}>
            {a.big && (
              <div className="mb-2 text-6xl font-extrabold leading-none text-acc">
                {a.big}
              </div>
            )}
            <p>{a.text}</p>
          </div>
        ))}
      </div>
    </S>
  );
}
export function Education() {
  return (
    <S id="education" title="Education">
      <div className="ml-1.5 border-l-2 border-line">
        {education.map((e) => (
          <article key={e.title} className="relative pb-8 pl-7">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-acc bg-bg" />
            <h3 className="font-bold">{e.title}</h3>
            <p className="text-sm text-mut">
              {e.school} · {e.years} · {e.result}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <h3 className="font-bold">Certification</h3>
          <p className="text-mut">
            6-Month Certification in Design — DICIC Institute, Indore
          </p>
        </div>
        <div className={card}>
          <h3 className="font-bold">Languages</h3>
          <ul className="mt-3 flex gap-2">
            <li className={tag}>Hindi</li>
            <li className={tag}>English</li>
          </ul>
        </div>
      </div>
    </S>
  );
}
export function Contact() {
  return (
    <S id="contact" title="Contact" lead="Send a message or reach me directly.">
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-3">
          <li>
            <b>Email: </b>
            <a className="underline" href="mailto:sanatk254@gmail.com">
              sanatk254@gmail.com
            </a>
          </li>
          <li>
            <b>Phone: </b>
            <a className="underline" href="tel:+919981142454">
              +91 9981142454
            </a>
          </li>
          <li>
            <b>LinkedIn: </b>
            <a
              className="underline"
              rel="noopener"
              href="https://linkedin.com/in/s254"
            >
              linkedin.com/in/s254
            </a>
          </li>
        </ul>
        <ContactForm />
      </div>
    </S>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 text-sm text-mut">
        <p>
          <b className="text-fg">Sanat Kumar</b> · Mechanical Engineer — Design
          &amp; Development
        </p>
        <nav aria-label="Footer" className="flex gap-4">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://linkedin.com/in/s254" rel="noopener">
            LinkedIn
          </a>
          <a href="mailto:sanatk254@gmail.com">Email</a>
        </nav>
        <p>
          © {new Date().getFullYear()} Sanat Kumar ·{" "}
          <a href="#home">Back to top</a>
        </p>
      </div>
    </footer>
  );
}
