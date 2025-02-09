import { FaArrowTurnDown } from "react-icons/fa6";

function About() {
  return (
    <div 
      style={{
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
      }}  
      id='about' 
      className="bg-gray-100 text-gray-800 flex py-10  md:py-20 flex-col font-mono mt-[-250px] lg:mt-[0px] "
    >
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl py-6 md:py-10 flex items-center">
          <FaArrowTurnDown className="mr-2 mt-2 md:mt-6" /> About
        </h2>
        <p className="text-gray-700 text-lg md:text-2xl lg:text-4xl font-mono p-2">
          I am Ayushi Maithani, a MERN stack developer passionate about creating efficient and visually dynamic web applications. I work with technologies like MongoDB, Express, React, Node.js, Appwrite, and GSAP to build seamless and engaging user experiences. With a focus on modern development and design, I bring ideas to life through innovative tech solutions.
        </p>
      </div>
    </div>
  );
}

export default About;