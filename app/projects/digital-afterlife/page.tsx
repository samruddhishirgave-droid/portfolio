import Link from "next/link";

export default function DigitalAfterlifePage() {
  return (
    <main className="project-page min-h-screen bg-[#0a0a0a] text-black">
      {/* ================= HEADER ================= */}

      <header className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 transition hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          Back to Projects
        </Link>

        <div className="mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
            02 / AI & Cloud
          </p>

          <h1 className="mt-7 max-w-6xl text-black text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.85] tracking-[-0.07em]">
            Digital
            <br />
            <span className="text-gray-500">Afterlife</span>
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            An AI-powered cloud platform focused on digital memory
            preservation and virtual legacy management using modern cloud
            technologies.
          </p>
        </div>
      </header>

      {/* ================= PROJECT INFO ================= */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Project
            </p>

            <p className="mt-3 text-sm text-gray-300">
              02
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Type
            </p>

            <p className="mt-3 text-sm text-gray-300">
              AI / Cloud
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Focus
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Digital Memory
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Technologies
            </p>

            <p className="mt-3 text-sm text-gray-300">
              AI · AWS · Cloud
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Exploring how technology can preserve digital memories for the
              future.
            </h2>

            <p className="mt-10 max-w-3xl text-sm leading-8 text-gray-500 sm:text-base">
              The Digital Afterlife project explores the idea of preserving
              a person's digital memories, information and online presence
              beyond their lifetime. The concept combines artificial
              intelligence with cloud computing to create a platform for
              managing and preserving digital legacy information.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              02 / Problem
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Digital memories are becoming increasingly important.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              People create large amounts of digital content throughout
              their lives, including photographs, documents, messages and
              personal information. Managing what happens to this data in
              the future creates an interesting technological challenge.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              03 / Solution
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              A cloud-based digital legacy concept.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              The project proposes a secure cloud platform where important
              digital memories and information can be organized and
              preserved. AI can assist with organizing information and
              creating a more intelligent digital memory experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= AI ================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              04 / Intelligence
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI + Memory.
            </h2>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-gray-500 sm:text-base">
              Artificial intelligence adds an intelligent layer to the
              platform by helping process and organize digital information.
              This creates possibilities for searching, categorizing and
              interacting with preserved memories in a more natural way.
            </p>

            <div className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-3">
              {[
                "Memory",
                "Intelligence",
                "Preservation",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-r border-white/10 px-5 py-8 text-xs font-bold uppercase tracking-widest text-gray-500 transition duration-300 hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
                05 / Stack
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Technologies.
              </h2>

              <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
                {["AI", "AWS", "Cloud"].map((technology) => (
                  <div
                    key={technology}
                    className="border-b border-r border-white/10 px-5 py-8 text-xs font-bold uppercase tracking-widest text-gray-500 transition duration-300 hover:bg-white hover:text-black"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TAKEAWAY ================= */}

      <section className="border-t border-white/10 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
            06 / Takeaway
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            This project strengthened my understanding of cloud computing,
            artificial intelligence and how emerging technologies can be
            combined to solve future-oriented problems.
          </h2>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-black px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600">
          <span>
            Samruddhi Shirgave
          </span>

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