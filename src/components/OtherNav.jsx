import { emailIcon, phoneIcon } from "../assets"


const OtherNav = () => {
    return(
        <div className="flex items-center bg-black w-full text-white text-2xl">
            <img src={phoneIcon} className="w-[1vw] ml-[2vw]" />
            <p className="text-xl ml-[0.5vw]">Call Us Today <a href="tel:3018489896" className="text-slate-300 hover:text-ride-blue link link-hover">(301) 848-9896</a></p>
            <img src={emailIcon} className="w-[1vw] ml-[2vw]" />
            <a href= "mailto:riderevivalad@gmail.com" target="_top" className="text-xl ml-[0.5vw] text-slate-300 hover:text-ride-blue link link-hover">riderevivalad@gmail.com</a>
        </div>
    )
}

export default OtherNav
