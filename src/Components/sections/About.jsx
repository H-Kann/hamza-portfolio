import { RevealOnScroll } from "../RevealOnScroll";
import vue from "../../assets/vue.svg";
import react from "../../assets/react.svg";
import js from "../../assets/js.svg";
import tailwind from "../../assets/tailwind.svg";
import nodejs from "../../assets/node.svg";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import c from "../../assets/C.svg";
import rust from "../../assets/rust.svg";
import mongodb from "../../assets/mongodb.svg";
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building web and desktop
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <img src={react} alt="React" />
                  <img src={vue} alt="Vue" />
                  <img src={js} alt="Javascript" />
                  <img src={tailwind} alt="TailwindCSS" />
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <img src={nodejs} alt="NodeJS" />
                  <img src={java} alt="Java" />
                  <img src={python} alt="Python" />
                  <img src={c} t="C#" />
                  <img src={rust} alt="Rust" />
                  <img src={mongodb} alt="MangoDB" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>MSc in Computer Science</strong> -
                  <a
                    href="https://www.london.ac.uk/study/courses/postgraduate/msc-computer-science"
                    className="pr-2"
                  >
                    <span className="font-bold hover:bg-gradient-to-r from-coral1 to-coral2 bg-clip-text hover:text-transparent">
                      University of London
                    </span>
                  </a>
                  (2022-2024)
                </li>

                <li>
                  Relevant Coursework: Cloud Computing, Computer Systems,
                  Software Design and Programming.
                </li>
                <li>
                  <strong>BSc in Computer Science</strong> -
                  <a
                    href="https://www.isl.ac.ma/bachelor-of-computer-science/"
                    className="pr-2"
                  >
                    <span className="font-bold hover:bg-gradient-to-r from-coral1 to-coral2 bg-clip-text hover:text-transparent">
                      ISLBT
                    </span>
                  </a>
                  (2020-2022)
                </li>

                <li>
                  Relevant Coursework: Cloud Computing, Advanced databases
                  management, Cryptography & Secure Information Systems,
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Intern at Yago TRANS (2019)</h4>
                  <p>Developed and maintained an employee management system</p>
                </div>

                <div>
                  <h4 className="font-semibold">Intern at Yago TRANS (2022)</h4>
                  <p>
                    Assisted in building front-end components and implemented
                    back-end and security logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
