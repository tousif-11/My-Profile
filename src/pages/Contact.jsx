import { useState } from "react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="bg-amber-50 px-6 py-16 md:px-8 md:py-24">
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Contact</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Let&apos;s build something useful.</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
              Have a project idea, a question, or an opportunity to collaborate? Send a message and let&apos;s start a conversation.
            </p>
          </div>

          <div className="mt-12 space-y-5 border-t border-slate-700 pt-8 text-sm">
            <a className="block text-slate-200 transition hover:text-amber-300" href="mailto:your.email@example.com">
              <span className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Email</span>
              ajtousif71@gmail.com
            </a>
            <p className="text-slate-200">
              <span className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Based in</span>
              Bangladesh, available worldwide
            </p>
            <p className="text-slate-200">
              <span className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Currently</span>
              Open to freelance and collaboration opportunities
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 text-slate-900 md:p-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Send a message</p>
            <h2 className="mt-3 text-2xl font-bold">Tell me about your idea</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Your name
              <input required name="name" type="text" placeholder="Jane Smith" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Email address
              <input required name="email" type="email" placeholder="jane@example.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
            </label>
            <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
              What can I help with?
              <select name="projectType" defaultValue="" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                <option value="" disabled>Select a project type</option>
                <option>Website development</option>
                <option>React application</option>
                <option>Full-stack web application</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
              Your message
              <textarea required name="message" rows="5" placeholder="Share a little about your goals, timeline, or idea..." className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
            </label>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Send message
            </button>
            {isSent && <p className="text-sm font-medium text-emerald-600" role="status">Thanks, your message is ready to send.</p>}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
