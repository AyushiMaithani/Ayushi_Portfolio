import img from "../../assets/animated-ayushi1.png";
import Marquee from '../Marquee';

function Hero() {
  return (
      <div className="flex justify-center items-center relative ">
        <Marquee/> 
        <img className="w-[54%] relative z-20" src={img} alt="Ayushi Maithani" />
      </div>
  );
}

export default Hero;
