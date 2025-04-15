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
                A simple yet powerful tool that allows users to download YouTube
                videos quickly and easily.
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
                A minimalist microblogging platform built with JavaScript and
                MongoDB.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
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
                A fast, lightweight NES emulator written in Rust. Emulates CPU,
                PPU, APU and basic mappers with a focus on accuracy and
                performance.
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
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
