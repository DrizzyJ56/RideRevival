import {
  bulletPoint,
  ceramicCoated1,
  cleanCar,
  detailedCar,
  dropdown,
  engineBay,
  fullInterior,
  interiorDetail,
} from "../assets";

const Services = () => {
  return (
    <div id="services-container">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${detailedCar})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content mt-[20vh] text-center text-neutral-content">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-8xl font-bold">
              CAR DETAILING BALTIMORE, MD
            </h1>
            <p className="mb-5 text-6xl">
              RideRevival's Car Detailing Packages
            </p>
            <button className="btn btn-info text-white text-xl">
              Get Started
            </button>
            <img src={dropdown} className="mt-[12vh] w-[4vw]" />
          </div>
        </div>
      </div>
      <div className="relative min-w-screen flex flex-col items-center justify-center text-center">
        <h4 className="text-5xl font-extrabold mt-[5vh]">
          RideRevival in Baltimore, MD - Your Destination for Premium Car
          Detailing Services
        </h4>
        <p className="ml-[8vw] mr-[8vw] mt-[3vh] text-2xl">
          If you've been on the hunt for the finest car detailing services in
          Baltimore, you've arrived at the perfect spot. RideRevival is your
          go-to mobile detailing expert, poised to rejuvenate your vehicle to
          perfection! Our assortment of car detailing packages ensures that your
          cherished car not only looks its absolute best but also feels
          fantastic. The best part? We bring our top-notch services right to
          your doorstep.
        </p>
        <p className="ml-[8vw] mr-[8vw] mt-[3vh] text-2xl">
          At RideRevival in Baltimore, we present an array of options, starting
          from our basic interior cleaning and extending all the way to our
          comprehensive paint correction package, complete with a SystemX
          Professional Ceramic Coating add-on. All package details are outlined
          below for your convenience. However, we strongly recommend enhancing
          any of our car detailing packages with SystemX Professional Ceramic
          Coating, the ultimate in paint protection. SystemX Professional
          Ceramic Coating stands as the uncontested industry leader in nano
          ceramic paint protection, ensuring unparalleled shield and longevity.
          Especially in Baltimore's varied climate, traditional wax simply won't
          suffice. With the region's heat and other demanding elements, wax
          can't endure and safeguard your paint as effectively as needed.
          Discover our SystemX Professional Ceramic Coating Packages here and
          take a step towards preserving your vehicle's pristine appearance. Get
          in touch with us today for a complimentary quote, and let RideRevival
          transform your automotive experience!
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-evenly mb-[10vh]">
        <div className="card w-96 max-h-[65vh] bg-base-100 shadow-xl mt-24">
          <figure className="w-96 h-60">
            <img src={ceramicCoated1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Full Paint Correction Package
            </h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Wash & Rinse: Entire Exterior
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Iron Decontamination & Clay Bar Paint
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Wheel & Tire Wash, Detail & Dress with Tire Shine
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                1st Stage: Medium/Heavy Compound Buff
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                2nd Stage: High Speed Polish
              </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-4">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Exterior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Paint
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 max-h-[65vh] bg-base-100 shadow-xl mt-24">
          <figure className="w-96 h-60">
            <img src={detailedCar} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Paint Enhancement Package</h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Wash & Rinse: Entire Exterior
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Iron Decontamination & Clay Bar Paint
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Wheel & Tire Wash, Detail & Dress with Tire Shine
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Single Stage High-Speed Polish
              </p>
            </div>
            <div className="flex"></div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-[2.8rem]">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Exterior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Paint
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl max-h-[65vh] mt-24">
          <figure className="w-96 h-60">
            <img src={engineBay} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Engine Bay Package</h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Wash Brush and Dry Engine Bay
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Protectant Applied to Plastics
              </p>
            </div>
            <div className="flex">
              <p></p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-[6.5rem]">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Exterior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Engine
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl max-h-[65vh] mt-24">
          <figure className="w-96 h-60">
            <img src={cleanCar} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Basic Exterior Package</h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Wash, Rinse & Dry: Entire Exterior
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Wheel & Tire Wash, Detail & Dress with Tire Shine
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Spray Sealant Applied to Paint
              </p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-[4.7rem]">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Exterior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Basic
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl max-h-[65vh] mt-24">
          <figure className="w-96 h-60">
            <img src={interiorDetail} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Basic Interior Package</h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Vacuum: Carpet & Seats
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Thoroughly Clean: Dashboard, Cup Holders, Vents, Door Panels & Jams
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Interior Glass Cleaning
              </p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="flex">
              <p className="font-extrabold text-xl ml-[1vw]"></p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-[2.9rem]">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Interior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Basic
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl max-h-[65vh] mt-24">
          <figure className="w-96 h-60">
            <img src={fullInterior} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Full Interior Package</h2>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Everything in Basic Interior Package
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Deep Extraction: Carpets, Floor Mats, Seats
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Dress with Conditioner: Leather Seats
              </p>
            </div>
            <div className="flex">
              <img src={bulletPoint} className="w-[0.5vw]" />
              <p className="font-extrabold text-xl ml-[1vw]">
                Dress with UV Protectant: Dashboard, Consoles, Door Panels, Door Sills
              </p>
            </div> 
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white font-extrabold text-xl mt-[1.7rem]">
                Contact Today!
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-extrabold text-xl">
                Interior
              </div>
              <div className="badge badge-outline font-extrabold text-xl">
                Basic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
