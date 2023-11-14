/* eslint-disable react/no-unescaped-entities */
import { paint, vacuum } from "../assets";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="relative flex-col items-center justify-center text-center">
        <div className="py-[1vh] flex min-w-screen border"></div>
        <div className="py-[6vh] flex-col">
          <h3 className="text-7xl font-extrabold">
            About Ride
            <span className="underline underline-offset-[2vh]">Revival A</span>
            uto Detailing
          </h3>
          <p className="py-[3vh] text-2xl">
            Your
            <span className="font-extrabold text-3xl">
              {" "}
              Premium Auto Detailing Company
            </span>{" "}
            Affiliated with{" "}
            <span className="font-extrabold text-3xl">SystemX</span>. We
            Specialize in Car Detailing and Ceramic Car Coatings. Call{" "}
            <span className="font-extrabold text-3xl">(301) 848-9896</span>{" "}
            today to get started.
          </p>
        </div>
        <div className="flex-col">
          <h5 className="text-5xl font-extrabold">
            Ceramic Coating, Detailing, Paint Protection Services Maryland
          </h5>
          <p className="ml-[8vw] w-5/6 text-2xl">
            We are your trusted auto detailing, paint protection and paint
            correction specialists. Serving Maryland and the surrounding
            areas, RideRevival Auto Detailing has the experience to get the job
            done right. We guarantee quality in all of our work and you’ll be
            able to see that with our results. Check out more about our services
            on our website and contact us for pricing!
          </p>
          <div className="mt-12 flex items-center justify-center">
            <div className="w-[30rem] h-fit">
              <div className="flex">
                <img src={paint} className="w-12 sm:w-4 xs:w-4 mr-8 xs:mr-4 sm:mr-4" />
                <h6 className="font-extrabold text-4xl">
                  SystemX Ceramic Paint Protection
                </h6>
              </div>
              <p className="text-2xl">
                SystemX Ceramics, the hardest paint coating today, ensures a
                glossy finish, scratch prevention, and hydrophobic properties.
                Nanoparticles fill paint pores, blocking contaminants like bird
                droppings, bugs, dirt, and tar from causing damage.
              </p>
            </div>
            <div className="ml-[2vw] w-[30rem] h-fit">
              <div className="flex">
                <img src={vacuum} className="w-12 sm:w-4 xs:w-4 mr-8 xs:mr-4 sm:mr-4" />
                <h6 className="font-extrabold text-4xl">
                  Premium Auto Detailing Services
                </h6>
              </div>
              <p className="text-2xl">
                If you've been looking for top-tier auto detailing in Maryland you're in the right place. Trust RideRevival Auto Detailing,
                your certified expert, to refresh your vehicle. We offer various
                detailing packages for a fantastic look and feel to your ride.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[6vh]">
          <h3 className="text-5xl font-extrabold">
            GE<span className="underline underline-offset-[2vh]">T STAR</span>
            TED.
          </h3>
          <p className="text-3xl mt-[2vh]">
            If you’re looking for local car detailing, learn more about
            RideRevival's professional ceramic car coating and car detailing in
            Maryland.
          </p>
          <Link to="/services">
            <button className="btn btn-info text-white text-xl font-extrabold mt-[2vh] mb-[10vh]">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
