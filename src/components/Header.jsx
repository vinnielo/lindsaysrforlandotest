import { Link } from "react-router-dom";
import selfRealizationLogo from "../assets/images/srf-wordmark-navy.png";
import srfLogo from "../assets/images/Updated_logo.png";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-white">
      {/* <!-- Hero --> */}
      <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
        {/* <!-- Menu/Logo Container --> */}
        <nav className="flex items-center justify-between font-bold text-blue">
          {/* <!-- Logo --> */}
          <a href="/lindsaysrforlandotest/" className="flex-col h-10">
            <div className="flex">
              <img
                className="max-h-10"
                src={srfLogo}
                alt="Self Realization Fellowship Logo"
              />
              <img
                className="hidden md:h-10 md:flex"
                src={selfRealizationLogo}
                alt="Self Realization Fellowship Logo"
              />
            </div>

            <p className="text-amber-600 md:pl-10">Orlando Meditation Group</p>
          </a>
          {/* <!-- Menu --> */}
          <div className="hidden h-10 md:flex md:space-x-8">
            <div className="group">
              <Link
                to="/lindsaysrforlandotest/contact"
                className="text-blue-950"
              >
                Contact
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-amber-600"></div>
            </div>
            <div className="group">
              <a
                className="text-blue-950"
                href="https://yogananda.org/lessons"
                target="_blank"
              >
                Events
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-amber-600"></div>
            </div>
            <div className="group">
              <a
                className="text-blue-950"
                href="https://yogananda.org/lessons"
                target="_blank"
              >
                Lessons
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-amber-600"></div>
            </div>
            <div className="group">
              <a
                className="text-blue-950"
                href="https://www.youtube.com/user/YoganandaSRF"
                target="_blank"
              >
                Listen
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-amber-600"></div>
            </div>
            <div className="group">
              <a
                className="text-blue-950"
                href="https://yogananda.org/self-realization-fellowship"
                target="_blank"
              >
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-amber-600"></div>
            </div>
          </div>
          {/* <!-- hamburger button  --> */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className={
                toggle
                  ? "z-40 block hamburger md:hidden focus:outline-none open"
                  : "z-40 block hamburger md:hidden focus:outline-none"
              }
              onClick={() => setToggle(!toggle)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        {/* <!-- mobile menu --> */}
        <div
          id="menu"
          className={
            toggle
              ? "absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-amber-600 uppercase bg-white"
              : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-amber-600 uppercase bg-white"
          }
        >
          <Link
            to="/lindsaysrforlandotest/contact"
            className="hover:text-amber-600"
          >
            Contact
          </Link>
          <a
            href="https://yogananda.org/events-and-programs"
            target="_blank"
            className="hover:text-amber-600"
          >
            Events
          </a>
          <a
            href="https://yogananda.org/lessons"
            target="_blank"
            className="hover:text-amber-600"
          >
            Lessons
          </a>
          <a
            href="https://www.youtube.com/user/YoganandaSRF"
            target="_blank"
            className="hover:text-amber-600"
          >
            Listen
          </a>
          <a
            href="https://yogananda.org/self-realization-fellowship"
            target="_blank"
            className="hover:text-amber-600"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
