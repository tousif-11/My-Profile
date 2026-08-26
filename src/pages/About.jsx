const About = () => {
  return (
    <main className="bg-amber-50 px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">About me</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">Curious by nature. Focused on useful digital products.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">I&apos;m a passionate Full Stack Web Developer who enjoys turning ideas into modern, functional, and user-friendly web experiences.</p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">My journey</p>
            <h2 className="mt-4 text-3xl font-bold">From curiosity to full-stack development.</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
              <p>I started with HTML and CSS, then moved into JavaScript to understand programming logic, interactivity, and dynamic applications.</p>
              <p>Today I enjoy working across the full development process, from shaping a clear interface to connecting it with APIs, servers, and databases.</p>
              <p>I learn by building real projects, solving problems, and improving each version. That process keeps my work practical and my skills growing.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What matters to me</p>
            <ul className="mt-6 space-y-5 text-slate-700">
              <li className="border-b border-slate-100 pb-5"><strong className="block text-slate-900">Useful first</strong><span className="mt-1 block text-sm leading-6">Technology should solve a real problem and feel simple to use.</span></li>
              <li className="border-b border-slate-100 pb-5"><strong className="block text-slate-900">Clean foundations</strong><span className="mt-1 block text-sm leading-6">Organized, maintainable code makes future improvements easier.</span></li>
              <li><strong className="block text-slate-900">Keep learning</strong><span className="mt-1 block text-sm leading-6">Every bug and new project is an opportunity to get better.</span></li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Current toolkit</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Frontend", "HTML, CSS, JavaScript, React.js, Tailwind CSS"],
              ["Backend", "Node.js, PHP, Laravel, Express.js"],
              ["Data & APIs", "MySQL, PostgreSQL, MongoDB, REST APIs"],
              ["Workflow", "Git, GitHub, Vite, responsive design"],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <h2 className="font-bold text-slate-900">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
