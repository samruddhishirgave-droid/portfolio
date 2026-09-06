import Link from "next/link";

export default function DiseasePredictionPage() {
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
            03 / Machine Learning
          </p>

          <h1 className="mt-7 max-w-6xl text-black text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.85] tracking-[-0.07em]">
            Disease
            <br />
            <span className="text-gray-500">Prediction</span>
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A Python machine learning project focused on processing
            healthcare datasets and building a model for disease prediction.
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
              03
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Type
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Machine Learning
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Focus
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Healthcare Data
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Technologies
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Python · NumPy · Pandas · ML
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
              Using data and machine learning to explore predictive
              healthcare applications.
            </h2>

            <p className="mt-10 max-w-3xl text-sm leading-8 text-gray-500 sm:text-base">
              This project explores how machine learning can be applied to
              healthcare datasets to identify patterns associated with
              different diseases. The workflow focuses on preparing data,
              analyzing relevant features and using machine learning
              techniques to generate predictions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
              02 / Problem
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning raw healthcare data into useful information.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Healthcare datasets can contain many variables and require
              careful preparation before machine learning algorithms can
              work effectively. Understanding the data and identifying
              useful features are important parts of the process.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
              03 / Solution
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured machine learning workflow.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Python was used to process the dataset, perform data analysis
              and prepare the information for machine learning. The project
              then uses the prepared data to develop a predictive model and
              evaluate its results.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DATA WORKFLOW ================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600">
              04 / Workflow
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              From data to prediction.
            </h2>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-gray-500 sm:text-base">
              The project follows a structured process where raw data is
              inspected, processed and transformed before being used by the
              machine learning model.
            </p>

            <div className="mt-12 border-l border-t border-white/10">
              {[
                ["01", "Data Collection", "Working with the healthcare dataset."],
                ["02", "Data Processing", "Cleaning and preparing the data."],
                ["03", "Feature Analysis", "Examining useful variables and patterns."],
                ["04", "Prediction", "Using machine learning for classification."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-5 border-b border-r border-white/10 p-7 transition duration-300 hover:bg-white hover:text-black sm:grid-cols-[80px_0.35fr_0.65fr]"
                >
                  <span className="text-xs font-bold tracking-widest text-gray-600">
                    {number}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-widest">
                    {title}
                  </span>

                  <span className="text-sm leading-6 text-gray-500">
                    {description}
                  </span>
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

              <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
                {["Python", "NumPy", "Pandas", "Machine Learning"].map(
                  (technology) => (
                    <div
                      key={technology}
                      className="border-b border-r border-white/10 px-5 py-8 text-xs font-bold uppercase tracking-widest text-gray-500 transition duration-300 hover:bg-white hover:text-black"
                    >
                      {technology}
                    </div>
                  )
                )}
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
            This project strengthened my understanding of Python,
            data-processing techniques and the fundamentals of applying
            machine learning to real-world datasets.
          </h2>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

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