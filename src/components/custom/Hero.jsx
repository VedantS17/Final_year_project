import React from "react";
import { Button } from "../ui/button";
import teslaImg from "../../assets/tesla.png";
import googleImg from "../../assets/google.png";
import pintrestImg from "../../assets/pintrest.png";
import spotifyImg from "../../assets/spotify.png";
import resumeImg from "../../assets/resume_img.jpg";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-col items-center w-full text-center relative py-20 bg-black">
        <div className="w-full flex justify-center items-center bg-black">
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-bold">AI Resume Builder</h1>
            <p className="mt-4 text-white max-w-2xl mx-auto">
              Powered by ChatGPT, Enhancv is the easiest way to create a
              tailored resume containing all the right keywords, improve your
              writing & highlight your strengths.
            </p>
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-4 mb-2"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <p className="mt-4 text-white">
              Our resumes get people hired at top companies
            </p>
            <div className="flex space-x-4 mt-4 justify-center bg-black p-4 rounded-lg">
              <img
                src={teslaImg}
                alt="Tesla logo"
                className="h-20 w-auto bg-black"
              />
              <img
                src={googleImg}
                alt="Google logo"
                className="h-20 w-auto text-white bg-black"
              />
              <img
                src={spotifyImg}
                alt="Spotify logo"
                className="h-20 w-auto"
              />
              <img
                src={pintrestImg}
                alt="Pinterest logo"
                className="h-20 w-auto"
              />
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={resumeImg}
              alt="AI Assistant Chat"
              className="h-auto w-auto mx-auto"
            />
          </div>
        </div>
      </main>

      <section className="w-full bg-gradient-to-r from-black to-purple-900 py-20">
        <h2 className="text-4xl text-white font-bold text-center">
          AI resume writer, powered by Gemini
        </h2>
        <p className="text-center text-white mt-4 max-w-3xl mx-auto">
          Resumizer wraps the power of Gemini in a quick interface that ensures
          you can focus on creating a resume, rather than switching between
          tools. Fine-tuned to deliver professional suggestions, the Enhancv
          ChatGPT AI assistant takes you one step closer to the next step in
          your career.
        </p>
        <div className="flex justify-center mt-10">
          <i className="fas fa-brain text-white text-6xl"></i>
        </div>
      </section>
    </div>
  );
}

export default Hero;
