import { motion } from 'framer-motion'

function Marquee() {
  const Words = [
    'Ayushi Maithani', 'Ayushi Maithani', 'Ayushi Maithani'
  ];

  return (
    <div className='overflow-hidden flex absolute z-10 font-mono font-extrabold whitespace-nowrap top-36 lg:top-64'>
      <motion.div 
        initial={{ x: "0" }}
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex gap-5 sm:gap-10 md:gap-20 flex-shrink-0 pl-4 sm:pl-8 md:pl-16'
      >
        {Words.map((word, index) => (
          <p 
            key={index} 
            className="text-[150px] sm:text-[250px] md:text-[300px] lg:text-[400px] leading-none"
          >
            {word}
          </p>
        ))}
      </motion.div>
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex gap-5 sm:gap-10 md:gap-20 flex-shrink-0 pl-4 sm:pl-8 md:pl-16'
      >
        {Words.map((word, index) => (
          <p 
            key={index} 
            className="text-[150px] sm:text-[250px] md:text-[300px] lg:text-[400px] leading-none"
          >
            {word}
          </p>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;