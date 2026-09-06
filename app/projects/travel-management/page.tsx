import Link from "next/link";

export default function TravelManagementPage() {
  return (
    <main className="project-page min-h-screen bg-[#0a0a0a] text-black">
      {/* Header */}

      <header className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 transition hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>

          Back to Projects
        </Link>

        <div className="mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
            01 / Full-Stack Development
          </p>

          <h1 className="mt-7 max-w-6xl text-black text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.85] tracking-[-0.07em]">
            Travel
            <br />
            <span className="text-gray-500">Management</span>
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A full-stack travel management system focused on organizing
            travel services and creating a responsive web experience.
          </p>
        </div>
      </header>

      {/* Project information */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Project
            </p>

            <p className="mt-3 text-sm text-gray-300">
              01
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Type
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Full-Stack
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Focus
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Travel Services
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Technologies
            </p>

            <p className="mt-3 text-sm text-gray-300">
              HTML · CSS · JavaScript · PHP
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Bringing travel-related services into one practical digital
              experience.
            </h2>

            <p className="mt-10 max-w-3xl text-sm leading-8 text-gray-500 sm:text-base">
              This project was designed as a full-stack travel management
              website with the goal of making travel-related information
              easier to organize and access through a responsive web
              interface.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              02 / Problem
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Organizing travel services clearly.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Travel information can become difficult to manage when
              services, destinations and user interactions are separated
              across different parts of a system.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              03 / Solution
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured web experience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              The project brings the core travel functionality into a
              responsive interface while using frontend technologies
              together with PHP-based backend functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              04 / Stack
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Technologies.
            </h2>

            <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
              {["HTML", "CSS", "JavaScript", "PHP"].map((technology) => (
                <div
                  key={technology}
                  className="border-b border-r border-white/10 px-5 py-7 text-xs font-bold uppercase tracking-widest text-gray-500 transition hover:bg-white hover:text-black"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role */}

      <section className="border-t border-white/10 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
            05 / Takeaway
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Building this project strengthened my understanding of full-stack
            web development and how frontend and backend components work
            together.
          </h2>
        </div>
      </section>

      {/* Footer navigation */}

      <footer className="bg-black px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600">
          <span>Samruddhi Shirgave</span>

          <Link
            href="/#work"
            className="transition hover:text-white"
          >
            All Projects →
          </Link>
        </div>
      </footer>
    </main>
  );
}