import { useState } from "react";
import { Link } from "react-router-dom";
import { logo2 } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar bg-slate-300 bg-opacity-50">
      {!toggle ? (
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => {
              if (!toggle) {
                setToggle(true);
                console.log(toggle);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => {
              if (toggle) {
                setToggle(false);
                console.log(toggle);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            {toggle && (
              <ul className="flex flex-col justify-center items-center ml-[5rem] mt-8 menu bg-base-200 w-[10rem] rounded-box text-xl font-extrabold">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/ceramic">Ceramic Coating</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <a>Gallery</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            )}
          </button>
        </div>
      )}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-5xl font-extrabold hover:text-ride-blue"
        >
          <div className="">
            <img src={logo2} className="w-12" />
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
