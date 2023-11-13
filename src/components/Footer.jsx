import { emailIcon, instagram, locationIcon, phoneIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="footer flex justify-evenly bg-black text-slate-300">
      <div>
        <header className="text-2xl underline underline-offset-[1vh] text-white ml-[2vw]">
          Contact
        </header>
        <div className="flex">
          <div className="flex flex-col mr-[0.8vw]">
            <img src={locationIcon} className="w-[1.5vw]" />
            <img src={phoneIcon} className="w-[1.5vw] pt-[1vh]" />
            <img src={emailIcon} className="w-[1.5vw] pt-[1vh]" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl">Baltimore, MD</p>
            <a href= "tel:3018489896" target="_top" className="text-xl pt-[1vh] hover:text-ride-blue link link-hover">(301) 848-9896</a>
            <a href= "mailto:riderevivalad@gmail.com" target="_top" className="text-xl pt-[1vh] hover:text-ride-blue link link-hover">riderevivalad@gmail.com</a>
          </div>
        </div>
      </div>
      <nav>
        <header className="text-2xl underline underline-offset-[1vh] text-white">
          Services
        </header>
        <a className="link link-hover text-xl">Products</a>
        <a className="link link-hover text-xl">Ceramic Coating</a>
        <a className="link link-hover text-xl">Gallery</a>
      </nav>
      <nav>
        <header className="text-2xl underline underline-offset-[1vh] text-white">
          Company
        </header>
        <a className="link link-hover text-xl">Home</a>
        <a className="link link-hover text-xl">About Us</a>
        <a className="link link-hover text-xl">Contact</a>
      </nav>
      <nav>
        <header className="text-2xl underline underline-offset-[1vh] text-white ml-[2rem]">
          Social
        </header>
        <div className="grid grid-flow-col gap-4">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/riderevival/"
            rel="noreferrer"
          >
            <img src={instagram} className="w-8 xs:w-4 sm:w-4" />
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
