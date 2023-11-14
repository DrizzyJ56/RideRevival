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
            <img src={phoneIcon} className="w-[1.5vw] xs:w-1 sm:w-2 pt-2 xs:pt-6 sm:pt-6" />
            <img src={emailIcon} className="w-[1.5vw] xs:w-1 sm:w-2 pt-2 xs:pt-6 sm:pt-6" />
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
        <header className="text-2xl underline underline-offset-[1vh] text-white ml-[2rem] sm:ml-2 xs:ml-2">
          Social
        </header>
        <div className="grid grid-flow-col gap-4">
          <a
            target="_blank"
            href="https://www.instagram.com/riderevival/"
            rel="noreferrer"
            className="ml-[2.2rem] xs:ml-1 sm:ml-1"
          >
            <img src={instagram} className="w-8 xs:w-4 sm:w-4" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
