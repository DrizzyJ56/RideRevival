/* eslint-disable react/no-unescaped-entities */
import { dropdown, coating, systemX } from "../assets";
import { Link } from "react-router-dom";

const Coating = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${coating})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content mt-[20vh] text-center text-neutral-content">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-8xl font-bold">
              CERAMIC CAR COATING MARYLAND
            </h1>
            <p className="mb-5 text-6xl">SystemX Ceramic Coating Installers</p>
            <button className="btn btn-info text-white text-xl">Get Started</button>
            <img src={dropdown} className="mt-[12vh] w-[4vw]" />
          </div>
        </div>
      </div>
      <div className="relative min-w-screen flex flex-col items-center justify-center text-center">
        <img src={systemX} className="w-full" />
        <h5 className="text-7xl mt-[4vh] font-extrabold">Ceramic Car Coating by SystemX</h5>
        <p className="ml-[8vw] mr-[8vw] mt-[3vh] text-2xl">
          At RideRevival, we bring you the pinnacle of automotive care. Our
          partnership with SystemX ensures that you experience the finest
          ceramic car coating available in Maryland. In the ever-evolving realm
          of paint protection, we've committed ourselves to lead the charge in
          innovation. Witnessing the astounding capabilities of System X
          nano-ceramic coating left us in awe, and we're confident you'll share
          our amazement.
          </p>
          <p className="ml-[8vw] mr-[8vw] mt-[3vh] text-2xl">
          System X ceramic coating is a multi-layer, transparent,
          liquid nano-ceramic application. Once cured, it forms an enduring and
          adaptable glass-like shield that bonds permanently to your vehicle's
          surface. Picture it as an additional clear coat, one that's harder,
          shinier, and self-cleans. System X coatings integrate their molecular
          structure with your paintwork's surface molecules, effectively
          becoming the functional surface of your vehicle's exterior. This
          glass-like shield acts as a guardian, warding off minor scratches,
          delivering an exquisite gloss finish, and showcasing hydrophobic
          properties. Nanoparticles adeptly fill your paint's pores, serving as
          a barrier against environmental contaminants like bird droppings,
          bugs, dirt, tar, and more, preventing them from adhering and causing
          harm. When water graces your vehicle, dirt effortlessly washes away,
          effortlessly rolling off the surface. 
          </p>
          
          
          
          <p className="ml-[8vw] mr-[8vw] mt-[3vh] text-2xl"> System X doesn't just make your
          car look exceptional; it simplifies maintenance. Living in the
          Maryland area, where keeping your vehicle clean and safeguarded from
          the elements can be a challenge, we understand your needs. There's no
          superior solution for safeguarding your vehicle from Maryland's
          diverse conditions. Explore our diverse packages, including the
          Platinum Package, Gold Package, and Sport Package, each tailored to
          provide distinct levels of paint protection for various aspects of
          your vehicle. Connect with us today to discover more about how
          RideRevival can transform your automotive experience.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[5vh] mb-[6vh] text-center">
        <h4 className="text-5xl font-extrabold">Ceram<span className="underline underline-offset-[2vh]">ic Coat A</span>dd-On.</h4>
        <p className="py-[3vh] text-2xl">Add a Ceramic Coat package to any of our services here!</p>
        <Link to="/services"><button className="btn btn-info text-xl text-white">Services</button></Link>
      </div>
    </div>
  );
};

export default Coating;
