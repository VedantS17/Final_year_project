import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-900 text-white py-20 rounded-t-3xl">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-left">
              <span>Take your resume to</span> <br />
              <span>the next level</span>
            </h1>
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            >
              Make a new resume
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          </div>
        </header>

        <footer className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8 space-x-4">
              <div className="flex items-center">
                <i className="fas fa-file-alt text-2xl mr-2"></i>
                <span className="text-xl font-bold">Resume Now.</span>
              </div>

              <div className="text-center max-w-lg mx-auto">
                <p className="text-sm">
                  Our mission. Resume Now's mission is to empower job seekers to
                  create a resume they're confident in by offering a simple
                  resume-building experience.
                </p>
              </div>

              <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            >
              Make a new resume
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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

              <div className="flex space-x-4">
                {[
                  { icon: "facebook-f", url: "https://www.facebook.com" },
                  { icon: "pinterest-p", url: "https://www.pinterest.com" },
                  { icon: "linkedin-in", url: "https://www.linkedin.com" },
                  { icon: "xing", url: "https://www.xing.com" },
                  { icon: "reddit-alien", url: "https://www.reddit.com" },
                ].map(({ icon, url }) => (
                  <a
                    key={icon}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                  >
                    <i className={`fab fa-${icon} text-black`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-6 gap-8 mb-8">
              <div>
                <h2 className="font-bold mb-2">Resume</h2>
                <ul className="space-y-1">
                  <li>AI Resume Builder</li>
                  <li>Resume Templates</li>
                  <li>Resume Examples</li>
                  <li>Resume Formats</li>
                  <li>ATS Resume Checker</li>
                  <li>How To Make A Resume</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Cover Letter</h2>
                <ul className="space-y-1">
                  <li>Cover Letter Builder</li>
                  <li>Cover Letter Templates</li>
                  <li>Cover Letter Examples</li>
                  <li>Cover Letter Formats</li>
                  <li>How To Make A Cover Letter</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">CV</h2>
                <ul className="space-y-1">
                  <li>CV Builder</li>
                  <li>CV Templates</li>
                  <li>CV Examples</li>
                  <li>How To Write A CV</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Resume Now</h2>
                <ul className="space-y-1">
                  <li>About Us</li>
                  <li>Customer Reviews</li>
                  <li>Editorial Guidelines</li>
                  <li>Privacy Policy</li>
                  <li>Terms Of Service</li>
                  <li>Cookies & Tracking Policy</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Support</h2>
                <ul className="space-y-1">
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Accessibility</li>
                  <li>Affiliates</li>
                  <li>Press Coverage</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Customer Service</h2>
                <ul className="space-y-1">
                  <li>Phone Number:</li>
                  <li className="mb-2">844-351-7484</li>
                  <li>Email:</li>
                  <li className="mb-2">customerservice@resume-now.com</li>
                  <li>CS Support Schedule:</li>
                  <li>Mon - Fri 8:00 AM - 8:00 PM CST</li>
                  <li>Sat 8:00 AM - 5:00 PM CST</li>
                  <li>Sun 10:00 AM - 6:00 PM CST</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
