import { RevealOnScroll } from "../RevealOnScroll";
import mongodb from "../../assets/mongodb.svg";
import nodejs from "../../assets/node.svg";
import js from "../../assets/js.svg";
import restapi from "../../assets/rest-api.svg";
import python from "../../assets/python.svg";
import flask from "../../assets/flask.svg";
import ctk from "../../assets/CustomTkinter.ico";
import rust from "../../assets/rust.svg";
import java from "../../assets/java.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import daisyui from "../../assets/daisyui.svg";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">YtDownloader</h3>
              <p className="text-gray-400 mb-4">
                A versatile YouTube video downloader available as both a Windows desktop app and a web app, leveraging yt_dlp for reliable video extraction with support for multiple formats and real-time download progress tracking.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <img src={python} alt="Python" />
                <img src={ctk} alt="CustomTkinter" />
                <img src={flask} alt="Flask" />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/H-Kann/YtDownloader"
                  className="bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent hover:text-coral2/80 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">miniWall</h3>
              <p className="text-gray-400 mb-4">
                MiniWall is a full-stack minimalist microblogging platform inspired by Twitter, built with React, Node.js, and MongoDB, featuring user authentication and full CRUD operations for seamless posting and interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <img src={react} alt="React" />
                <img src={tailwind} alt="TailwindCSS" />
                <img src={mongodb} alt="MongoDB" />
                <img src={restapi} alt="RESTfulAPI" />
                <img src={js} alt="Javascript" />
                <img src={nodejs} alt="NodeJs" />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/H-Kann/miniWall"
                  className="bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent hover:text-coral2/80 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Nes Emulator</h3>
              <p className="text-gray-400 mb-4">
                A fully functional NES emulator written in Rust, accurately emulating CPU, PPU, and APU components, complete with real-time controller input and a responsive user interface running at a smooth 60 FPS.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <img src={rust} alt="Rust" />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Memory Game</h3>
              <p className="text-gray-400 mb-4">
                Memory Game challenges players to match pairs of hidden tiles in
                the fewest possible attempts. Designed using multi-threading,
                and object-oriented principles.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <img src={java} alt="Java" />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Notes App</h3>
              <p className="text-gray-400 mb-4">
                A full-featured notes application built with React, Tailwind CSS, and DaisyUI, allowing users to create, edit, and organize notes through a clean, responsive interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <img src={react} alt="React" />
                <img src={tailwind} alt="TailwindCSS" />
                <img src={daisyui} alt="daisyui" />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/H-Kann/notes-app"
                  className="bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent hover:text-coral2/80 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-coral2/80 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Shutdown Timer</h3>
              <p className="text-gray-400 mb-4">
                A desktop timer utility developed in Java using Atlantafx for modern theming, enabling users to schedule system shutdowns or reminders with precise countdown functionality and an intuitive, visually appealing interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <img src={java} alt="Java" />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/H-Kann/ShutdownTimer"
                  className="bg-gradient-to-r from-coral1 to-coral2 bg-clip-text text-transparent hover:text-coral2/80 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
