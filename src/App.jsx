import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../src/components/Preloader';
import "../src/App.css"
import styles from './components/Preloader/style.module.scss';
import Hero from './components/Hero/Hero'; 
import Navbar from './components/Navbar/Navbar'; 
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (

    <div className='h-full w-full overflow-hidden'>
    <section 
    id='home'
        className="h-screen relative"
        
      >
        <Navbar/>
        <Home/>
      </section>

      {/* About Section */}
      <section
        className="relative "
      >

      <About/>
      </section>

      
<section
       className="relative "
  id="projects"
>
  <Projects/>

 
</section>

<section
       className="relative "
  id="skills"
>
  <Skills/>

 
</section>
      <section
      id='contact'
        className="relative">
      <Contact/>
      </section>

      

      <div className={styles.main}>
    <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
    </AnimatePresence>
    </div>
    </div>

  )
}