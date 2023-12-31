import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/** Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='exit'
              className='h2 xl:mt-8'>
              My service <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='exit'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              I`m here to save your time and help you do better with the time you earn.I am ready to help you with everything from A to Z in your new projects.
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='exit'
            className='w-full xl:max-w-[65%]'>
            {/** Slider */}
          <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
