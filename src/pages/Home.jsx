import profilePhoto from "../images/profile_photo.jpg";
import avatar from "../images/images.jpg";

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 bg-amber-50">
      <section className="mb-12 grid items-center gap-8 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:grid-cols-[1fr_320px] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Full Stack Developer</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Building useful and responsive web applications. </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">Explore my work, technical skills, and experience through this profile.</p>
        </div>
        <div className="relative mx-auto w-full max-w-xs">
          <img src={profilePhoto} alt="Portrait of the developer" className="aspect-4/5 w-full rounded-2xl object-cover" />
          <img src={avatar} alt="Developer avatar" className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-4 border-slate-900 bg-white object-cover shadow-lg" />
        </div>
      </section>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">My profile</p>
      
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Hello, I&apos;m glad you&apos;re here.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Get to know my background, skills, and experience through the links above
      </p>
      <div className="text-lg leading-8 text-slate-600 mt-6 font-bold">
        I am a passionate and dedicated Full Stack Developer focused on building modern, responsive, user-friendly, and high-performance web applications. I enjoy turning ideas into functional digital products and solving real-world problems through clean, efficient, and scalable code.

My development journey started with the fundamentals of web development, including HTML, CSS, and JavaScript. Over time, I expanded my skills into modern frontend frameworks, backend technologies, databases, APIs, authentication systems, and deployment. I believe that becoming a strong developer is not only about learning programming languages but also about understanding how different technologies work together to create complete applications.

On the frontend, I work with HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Bootstrap. I focus on creating responsive interfaces that work smoothly across desktops, tablets, and mobile devices. I also have experience working with React Router, Axios, React Hook Form, React Toastify, Firebase, and other useful tools for developing interactive web applications.

On the backend, I am working with PHP, Laravel, Node.js, and Express.js. I understand how backend systems handle business logic, authentication, API requests, validation, database operations, and communication between the frontend and server. I enjoy creating REST APIs that allow different parts of an application to communicate efficiently.

For database development, I work with technologies such as MySQL, PostgreSQL, and MongoDB. I understand important concepts including database design, CRUD operations, relationships, queries, data validation, and connecting databases with backend applications.

As a Full Stack Developer, I am interested in building different types of applications, including business websites, e-commerce platforms, dashboards, portfolio websites, authentication systems, management systems, blogs, and custom web applications. I always try to keep my projects organized, responsive, maintainable, and easy to understand.

One of my priorities is writing clean and reusable code. I believe good code should not only work but should also be easy to maintain and improve in the future. I pay attention to component structure, file organization, responsive design, validation, error handling, performance, and user experience.

I also use tools such as Git and GitHub for version control and project management. I understand the importance of maintaining repositories, writing meaningful commits, managing branches, and deploying projects so they can be accessed online.

I am continuously improving my JavaScript, React, backend, database, and problem-solving skills. I regularly practice coding problems and build projects to strengthen my understanding of programming concepts. Instead of only learning theory, I prefer learning by creating real applications and solving practical problems.

My goal is to become a highly skilled and reliable Full Stack Developer who can take a project from an initial idea to a complete production-ready application. I am always interested in learning new technologies, improving my development process, and understanding better ways to solve technical problems.

If you are looking for a developer who is focused on responsive design, clean code, modern technologies, reliable functionality, and continuous improvement, I am ready to take on new challenges and build meaningful web solutions.

My core technologies include:
HTML • CSS • JavaScript • React.js • Tailwind CSS • Bootstrap • PHP • Laravel • Node.js • Express.js • MySQL • PostgreSQL • MongoDB • Firebase • REST API • Git • GitHub
      </div>
    </main>
  );
};

export default Home;
