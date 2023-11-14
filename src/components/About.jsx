import { danielLongSignature } from "../assets";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-slate-300">
      <div className="relative flex flex-col text-center justify-center items-center pt-40 sm:pt-28 xs:pt-28">
        <h3 className="text-8xl sm:text-4xl xs:text-4xl font-bold">
          Ride
          <span className="underline underline-offset-[2vh]">Revival Fou</span>
          nder
        </h3>
        <p className="text-4xl ml-24 mr-24 mt-16 mb- sm:mt-8 xs:mt-8 sm:text-2xl xs:text-2xl">
          I launched Ride Revival in 2023 after years of detailing as a hobby.
          My first car was a Mustang that was rough around the edges. I spent
          countless hours trying to perfect that car from the moment it got
          home. As time went on and I invested in new vehicles, I continued
          polishing them and cleaning the interiors as thoroughly as I could and
          learning tricks of the trade along the way. Soon, I began to work on
          friends’ and family member’s vehicles as well. Seeing the joy and
          excitement on someone’s face when I presented them with a clean,
          shining vehicle made me consider detailing as more than just a hobby.
          After years of perfecting my ability to detail interiors, polish and
          correct paint, and apply ceramic coatings, I launched Ride Revival in
          order to bring this dream to life. My goal is to provide 100% customer
          satisfaction, regardless of whether your vehicle is brand new or has
          been passed down through generations. I take pride in my work and am
          meticulously detailed as if the client’s car is my own. Give me a call
          to see how Ride Revival can enhance and protect one of your largest
          investments.
        </p>
        <div className="flex pb-8 ml-[55rem] sm:ml-[1rem] xs:ml-[1rem] md:ml-[34rem]">
          <p className="text-4xl">~</p>
          <img src={danielLongSignature} className="w-72 sm:w-48 xs:w-48 md:w-60" />
        </div>
      </div>
    </div>
  );
};

export default About;
