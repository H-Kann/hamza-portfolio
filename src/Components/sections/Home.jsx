import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent leading-right">
            Hi, I'm Hamza Kannouch
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a fullstack developer with a focus on building powerful,
            reliable systems for both web and desktop applications. Whether it's
            designing APIs, managing data flow, or integrating with third-party
            services, I prioritize performance, scalability, and clean
            architecture in every project.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border text-white-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-gradient-to-r from-coral1/80 to-coral2/80"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border text-white-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-gradient-to-r from-coral1/80 to-coral2/80"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
