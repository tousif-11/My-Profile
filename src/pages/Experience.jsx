const Experience = () => {
  return (
    <main className="bg-amber-50 px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Experience</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">Building, learning, and shipping one project at a time.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">My experience spans frontend interfaces, backend foundations, API integration, and the problem-solving that connects them.</p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="lg:border-r lg:border-amber-200 lg:pr-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Current role</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Full Stack Developer</h2>
            <p className="mt-2 font-medium text-blue-700">CodemanBD</p>
            <p className="mt-1 text-sm text-slate-500">March 15, 2025 - Present</p>
            <div className="mt-8 h-1 w-16 rounded-full bg-amber-400" />
          </aside>

          <div className="space-y-8">
            <article className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:p-10">
              <h2 className="text-2xl font-bold">A practical full-stack foundation</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">I focus on creating modern, responsive, and user-friendly applications. Working across the stack helps me understand how an interface, server, database, and API work together as one product.</p>
            </article>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Frontend development", "Reusable React components, responsive layouts, navigation with React Router, and polished interfaces with Tailwind CSS."],
                ["Backend development", "Exploring Node.js, PHP, Laravel, and MySQL while building an understanding of APIs, CRUD operations, and authentication."],
                ["Project-based learning", "Personal and practice projects turn new concepts into working products and strengthen my ability to debug real issues."],
                ["Continuous growth", "Currently deepening my JavaScript, React, databases, APIs, Git, and data structures knowledge while exploring Next.js."],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-amber-200 bg-white p-7 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>

            <p className="border-l-4 border-amber-400 pl-5 text-lg font-semibold leading-8 text-slate-800">My goal is simple: to build fast, responsive, accessible, and reliable web applications that provide real value to users.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experience;
