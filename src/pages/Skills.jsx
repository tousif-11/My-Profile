const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend craft",
      description: "Interfaces that feel clear, responsive, and effortless to use.",
      skills: [
        ["HTML5 & accessibility", "90%"],
        ["CSS3 & responsive design", "88%"],
        ["JavaScript & React", "82%"],
      ],
      tone: "bg-sky-50 text-sky-950",
      bar: "bg-sky-500",
    },
    {
      number: "02",
      title: "Backend systems",
      description: "Reliable application logic, APIs, and validation behind the scenes.",
      skills: [
        ["PHP & Laravel", "78%"],
        ["Node.js & Express", "72%"],
        ["REST API design", "80%"],
      ],
      tone: "bg-amber-50 text-amber-950",
      bar: "bg-amber-500",
    },
    {
      number: "03",
      title: "Data & workflow",
      description: "Well-structured data and practical tools that keep projects moving.",
      skills: [
        ["MySQL & PostgreSQL", "78%"],
        ["MongoDB & database design", "68%"],
        ["Git, GitHub & DevTools", "86%"],
      ],
      tone: "bg-emerald-50 text-emerald-950",
      bar: "bg-emerald-500",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50 px-6 py-14 text-slate-900 md:px-10 md:py-20 backdrop:blur-sm dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-4xl bg-slate-950 px-7 py-10 text-white shadow-2xl shadow-slate-200 md:px-14 md:py-16">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">The toolkit</p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight md:text-6xl">Turning ideas into useful digital products.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              A practical mix of frontend polish, backend thinking, and a steady curiosity for what comes next.
            </p>
          </div>
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-32 border-cyan-400/20 md:h-80 md:w-80" aria-hidden="true" />
          <div className="absolute bottom-0 right-16 h-20 w-20 rounded-full bg-amber-300/90 blur-[1px]" aria-hidden="true" />
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-3" aria-label="Technical skills">
          {skillGroups.map((group) => (
            <article key={group.number} className={`rounded-2xl p-7 shadow-sm ring-1 hover:bg-bottom-right-blur ring-black/5 ${group.tone}`}>
              <div className="flex items-start justify-between">
                <span className="text-sm font-black opacity-50">{group.number}</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider">Core</span>
              </div>
              <h2 className="mt-10 text-2xl font-extrabold tracking-tight">{group.title}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 opacity-75">{group.description}</p>
              <div className="mt-8 space-y-5">
                {group.skills.map(([skill, level]) => (
                  <div key={skill}>
                    <div className="mb-2 flex justify-between gap-4 text-sm font-bold">
                      <span>{skill}</span>
                      <span className="opacity-60">{level}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/70" role="progressbar" aria-label={`${skill} proficiency`} aria-valuenow={parseInt(level, 10)} aria-valuemin="0" aria-valuemax="100">
                      <div className={`h-full rounded-full ${group.bar}`} style={{ width: level }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-5 grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">How I work</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Good products need more than good code.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">I break complex problems into clear steps, care about the details users feel, and use Git, browser tools, and testing to keep the work dependable.</p>
          </article>
          <article className="rounded-2xl bg-amber-300 p-7 text-amber-950 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em]">Currently exploring</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Sharper React patterns & scalable architecture.</h2>
            <p className="mt-4 text-sm leading-6 opacity-75">Always learning, always building, always refining the process.</p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Skills;
