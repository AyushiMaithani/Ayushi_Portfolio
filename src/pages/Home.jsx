import img from "../assets/animated-ayushi1.png";
import Marquee from '../components/Marquee';

function Home() {
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: '6vh',
        width: '100%',
        height: '100vh',
      }}
      className="flex justify-center items-center relative overflow-hidden"
    >
      <Marquee />
      <img 
        className="w-[90%] md:w-[70%] lg:w-[54%] relative z-20  " 
        src={img} 
        alt="Ayushi Maithani" 
      />
    </div>
  );
}

export default Home;