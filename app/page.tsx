"use client";

import { useState } from "react";
import Link from "next/link";
import Scene from "@/components/Scene";
import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "NumPy",
  "Pandas",
  "SQL",
  "AWS",
];

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "Travel Management Website",
    description:
      "A full-stack travel management system focused on organizing travel services and creating a responsive web experience.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "/projects/travel-management",
    accent: "blue",
  },
  {
    number: "02",
    category: "AI / CLOUD",
    title: "Digital Afterlife Service",
    description:
      "An AI-powered cloud platform for digital memory preservation and virtual legacy management, deployed using AWS.",
    technologies: ["AI", "AWS", "Cloud"],
    link: "/projects/digital-afterlife",
    accent: "violet",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Disease Prediction",
    description:
      "A Python machine learning project using healthcare datasets and data-processing techniques to build a disease prediction model.",
    technologies: ["Python", "NumPy", "Pandas", "ML"],
    link: "/projects/disease-prediction",
    accent: "cyan",
  },
  {
    number: "04",
    category: "PYTHON APPLICATION",
    title: "Typing Speed Detection",
    description:
      "A Python application that measures typing speed and accuracy using real-time input and performance logic.",
    technologies: ["Python", "Real-Time"],
    link: "/projects/typing-speed",
    accent: "purple",
  },
];

const certifications = [
  "Web Development — 2024",
  "Cloud Computing (AWS) — 2025",
  "Python Programming — 2022",
  "Green Skill and AI — 2024",
  "Cisco Networking Fundamentals",
  "NPTEL Software Conceptual Design — Elite",
  "HTML & CSS Bootcamp",
  "Project Competition Participant",
];

const accentStyles = {
  blue: {
    border: "group-hover:border-blue-400/50",
    glow: "from-blue-500/20",
    text: "text-blue-300",
    bg: "bg-blue-400",
  },
  violet: {
    border: "group-hover:border-violet-400/50",
    glow: "from-violet-500/20",
    text: "text-violet-300",
    bg: "bg-violet-400",
  },
  cyan: {
    border: "group-hover:border-cyan-400/50",
    glow: "from-cyan-500/20",
    text: "text-cyan-300",
    bg: "bg-cyan-400",
  },
  purple: {
    border: "group-hover:border-purple-400/50",
    glow: "from-purple-500/20",
    text: "text-purple-300",
    bg: "bg-purple-400",
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group text-lg font-bold tracking-tight"
          >
            <span className="transition group-hover:text-blue-300">
              PORTFOLIO
            </span>
            <span className="ml-1 text-blue-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>

            <a href="#work" className="nav-link">
              Projects
            </a>

            <a href="#education" className="nav-link">
              Education
            </a>

            <a href="#certifications" className="nav-link">
              Certifications
            </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-blue-400/40 hover:bg-blue-400/10 md:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`block h-px w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#050816]/95 transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-t-transparent opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#work"],
              ["Education", "#education"],
              ["Certifications", "#certifications"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-sm text-gray-300 transition hover:pl-2 hover:text-blue-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      
<section className="relative min-h-screen overflow-hidden">
  {/* Background glows */}
  <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

  <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]" />

  <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-0 lg:pt-20">

    {/* LEFT — HERO CONTENT */}
    <div className="relative z-10 py-12 lg:py-20">
      <p className="hero-animate mb-6 text-sm uppercase tracking-[0.35em] text-blue-300">
        Developer • Data • Cloud
      </p>

      <h1 className="hero-delay-1 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
        Samruddhi
        <br />
        <span className="gradient-text">Sandip</span>
        <br />
        Shirgave.
      </h1>

      <p className="hero-delay-2 mt-8 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
        I build digital experiences where code, data, and ideas come together. From responsive web applications to Python-based solutions, machine learning projects, and cloud-powered systems, I enjoy exploring technology through hands-on projects. I’m always learning, experimenting, and looking for the next problem worth solving.
      </p>

      <div className="hero-delay-3 mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-blue-300"
        >
          Explore My Work

          <span className="arrow-move text-lg">↗</span>
        </a>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10"
        >
          Contact Me

          <span className="arrow-move text-lg">→</span>
        </a>
      </div>
    </div>

    {/* RIGHT — PROFILE PHOTO */}
    <div className="relative z-10 flex items-center justify-center py-10 lg:py-0">

      {/* Large background glow */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[420px] sm:w-[420px]" />

      {/* Decorative outer ring */}
      <div className="profile-ring absolute h-[300px] w-[300px] rounded-full border border-blue-400/20 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]" />

      {/* Second decorative ring */}
      <div className="profile-ring-reverse absolute h-[270px] w-[270px] rounded-full border border-violet-400/20 sm:h-[390px] sm:w-[390px] lg:h-[455px] lg:w-[455px]" />

      {/* Decorative orbit dot */}
      <div className="profile-orbit-dot absolute h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_25px_rgba(96,165,250,0.9)]" />

      {/* Photo container */}
      <div className="profile-photo-wrapper relative h-[340px] w-[270px] sm:h-[480px] sm:w-[380px] lg:h-[560px] lg:w-[440px]">

        {/* Gradient border */}
        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-blue-400/60 via-violet-500/30 to-cyan-300/50 opacity-80" />

        {/* Image frame */}
        <div className="profile-photo relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1024]">

          {/* Image */}
          <img
            src="/ID%20Card%20Photo.png"
            alt="Profile photo"
            className="profile-photo-image h-full w-full object-cover object-center"
          />

          {/* Keep the portrait clear and free of decorative overlays. */}
        </div>

        {/* Corner decorations */}
        <div className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-blue-300/70" />

        <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-violet-300/70" />
      </div>

      {/* Floating label */}
      <div className="profile-label absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#050816]/80 px-5 py-2 backdrop-blur-xl sm:bottom-8">
        <span className="flex items-center gap-2 whitespace-nowrap text-xs tracking-[0.2em] text-gray-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
          AVAILABLE TO BUILD
        </span>
      </div>
    </div>
  </div>

  {/* Bottom animated line */}
  <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden bg-white/10">
    <div className="animate-line h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
  </div>
</section>
      {/* ABOUT */}
      <ScrollReveal>
        <section
          id="about"
          className="relative border-y border-white/10 bg-[#070b1c]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-number">01</p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  About
                  <span className="text-blue-400">.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl">
                  I enjoy turning ideas into{" "}
                  <span className="text-blue-300">
                    functional digital experiences
                  </span>{" "}
                  through development, data, AI, and cloud technologies.
                </p>

                <p className="mt-8 max-w-2xl leading-7 text-gray-400">
                  My work combines frontend development, Python programming,
                  data analysis, machine learning, databases, and cloud
                  computing. I focus on building practical projects while
                  continuously improving my technical skills.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  <div className="stat-card">
                    <span className="text-3xl font-bold text-blue-300">
                      04+
                    </span>
                    <span className="mt-2 block text-sm text-gray-500">
                      Projects
                    </span>
                  </div>

                  <div className="stat-card">
                    <span className="text-3xl font-bold text-violet-300">
                      09+
                    </span>
                    <span className="mt-2 block text-sm text-gray-500">
                      Technologies
                    </span>
                  </div>

                  <div className="stat-card">
                    <span className="text-3xl font-bold text-cyan-300">
                      08+
                    </span>
                    <span className="mt-2 block text-sm text-gray-500">
                      Certifications
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SKILLS */}
      <ScrollReveal>
        <section id="skills" className="relative">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-number">02</p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Skills
                  <span className="text-violet-400">.</span>
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                A growing technical toolkit spanning web development,
                programming, data science, databases, and cloud technologies.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden bg-[#070b1c] p-8 transition duration-500 hover:bg-[#0b1230]"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-400/30" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-xl font-medium">{skill}</span>

                    <span className="text-xs text-gray-600 transition duration-300 group-hover:text-blue-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10">
                    <div className="skill-line h-px w-0 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PROJECTS */}
      <ScrollReveal>
        <section
          id="work"
          className="relative border-y border-white/10 bg-[#070b1c]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="section-number">03</p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Selected Work
                  <span className="text-blue-400">.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500">
                A selection of projects combining development, AI, machine
                learning, cloud computing, and practical problem solving.
              </p>
            </div>

            <div className="space-y-5">
              {projects.map((project) => {
                const style =
                  accentStyles[
                    project.accent as keyof typeof accentStyles
                  ];

                return (
                  <Link
                    key={project.number}
                    href={project.link}
                    className={`project-card group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0a1024] p-7 transition-all duration-500 ${style.border} sm:p-10`}
                  >
                    {/* Background glow */}
                    <div
                      className={`pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br ${style.glow} to-transparent opacity-0 blur-3xl transition duration-700 group-hover:opacity-100`}
                    />

                    <div className="relative grid gap-8 lg:grid-cols-[100px_1fr_auto] lg:items-center">
                      {/* Number */}
                      <div className="project-number text-6xl font-bold text-white/5 transition duration-500 group-hover:text-white/10">
                        {project.number}
                      </div>

                      {/* Content */}
                      <div>
                        <p
                          className={`text-xs font-medium tracking-[0.25em] ${style.text}`}
                        >
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight transition duration-300 group-hover:translate-x-1 sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400 transition group-hover:border-white/20 group-hover:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Animated Visual / Arrow */}
                      <div className="flex items-center justify-between gap-6 lg:flex-col lg:items-end">
                        <div className="project-visual relative h-20 w-28 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                          <div className="absolute left-4 top-4 h-10 w-10 rounded-full border border-blue-400/30 transition duration-700 group-hover:translate-x-8 group-hover:rotate-90" />

                          <div className="absolute bottom-3 right-3 h-5 w-12 rounded-full border border-violet-400/30 transition duration-700 group-hover:-translate-x-4" />

                          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.8)] transition duration-500 group-hover:scale-[2]" />
                        </div>

                        <span className="flex items-center gap-2 text-sm font-medium text-gray-400 transition group-hover:text-white">
                          View Case Study
                          <span className="arrow-move text-xl">↗</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EDUCATION */}
      <ScrollReveal>
        <section id="education" className="relative">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-number">04</p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Education
                  <span className="text-cyan-400">.</span>
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                My academic journey and the foundation behind my technical
                skills.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <article className="group relative border-b border-white/10 p-8 transition duration-500 hover:bg-blue-500/[0.04] sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-center">
                  <span className="text-5xl font-bold text-white/5 transition group-hover:text-blue-400/10">
                    01
                  </span>

                  <div>
                    <p className="text-xs tracking-[0.25em] text-blue-300">
                      BACHELOR&apos;S DEGREE
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      Computer Science and Engineering 
                    </h3>

                    <p className="mt-3 text-gray-400">
                      2023 — 2026
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                      Focused on programming, software development, databases,
                      data structures, and modern computing technologies.
                    </p>
                  </div>

                  <span className="text-sm text-gray-600">
                    Undergraduate
                  </span>
                </div>
              </article>

              <article className="group relative border-b border-white/10 p-8 transition duration-500 hover:bg-violet-500/[0.04] sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-center">
                  <span className="text-5xl font-bold text-white/5 transition group-hover:text-violet-400/10">
                    02
                  </span>

                  <div>
                    <p className="text-xs tracking-[0.25em] text-violet-300">
                      DIPLOMA
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      Computer Engineering
                    </h3>

                    <p className="mt-3 text-gray-400">
                      2020-2023
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                      Developed an early interest in technology, programming,
                      mathematics, and computer science.
                    </p>
                  </div>

                  <span className="text-sm text-gray-600">DIPLOMA</span>
                </div>
              </article>

              <article className="group relative p-8 transition duration-500 hover:bg-cyan-500/[0.04] sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-center">
                  <span className="text-5xl font-bold text-white/5 transition group-hover:text-cyan-400/10">
                    03
                  </span>

                  <div>
                    <p className="text-xs tracking-[0.25em] text-cyan-300">
                      SECONDARY SCHOOL
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      Secondary Education
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                      Built the academic foundation that led toward a deeper
                      interest in technology and software development.
                    </p>
                  </div>

                  <span className="text-sm text-gray-600">10th</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CERTIFICATIONS */}
      <ScrollReveal>
        <section
          id="certifications"
          className="border-y border-white/10 bg-[#070b1c]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-number">05</p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Certifications
                  <span className="text-violet-400">.</span>
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                Certifications, training, and learning experiences that
                complement my academic and project work.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
              {certifications.map((certification, index) => (
                <div
                  key={certification}
                  className="group relative overflow-hidden bg-[#070b1c] p-7 transition duration-500 hover:bg-[#0c1230]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-400/25" />

                  <div className="relative flex items-start gap-5">
                    <span className="text-sm text-violet-400/60">
                      0{index + 1}
                    </span>

                    <div className="flex-1">
                      <p className="font-medium text-gray-200 transition group-hover:text-white">
                        {certification}
                      </p>

                      <div className="mt-5 h-px w-12 bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-violet-400/40" />
                    </div>

                    <span className="text-lg text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-300">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CONTACT */}
      <ScrollReveal>
        <section id="contact" className="relative overflow-hidden bg-white text-black">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                  06
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Let&apos;s Connect.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-xl leading-8 text-gray-600 sm:text-2xl">
                  Have a project, opportunity, or idea? Let&apos;s build
                  something meaningful together.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:your@email.com"
                    className="group inline-flex items-center justify-between rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-blue-600"
                  >
                    samruddhishirgave@gmail.com
                    <span className="arrow-move ml-6 text-lg">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/samruddhi-shirgave-813775270?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between rounded-full border border-black/10 px-6 py-4 text-sm font-medium transition duration-300 hover:border-blue-500 hover:text-blue-600"
                  >
                    LinkedIn
                    <span className="arrow-move ml-6 text-lg">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-6 py-8 text-black lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Portfolio. All rights reserved.</p>

          <p>
            Built with <span className="text-blue-600">code</span> &
            creativity.
          </p>
        </div>
      </footer>
    </main>
  );
}