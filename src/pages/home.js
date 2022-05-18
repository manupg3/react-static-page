import React, {useEffect} from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import Cards from '../components/cards';
import '../assets/css/stylescontent.css';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import Whyus from '../components/whyus';
import Button from 'react-bootstrap/Button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useAnimation, motion,useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const now = 100;

const toRigthVariants = {
  toRigth: { x: 0, transition: { duration: 2,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: { x:-30, opacity: 0 }
};

const toLeftVariants = {
  toLeft: { x: 0, transition: { duration: 2,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: { x:30, opacity: 0 }
};
const opacitycard1Variants = {
  opacityC1: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: {  opacity: 0 }
};

const opacitycard2Variants = {
  opacityC2: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: {  opacity: 0 }
};

const opacitycard3Variants = {
  opacityC3: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: {  opacity: 0 }
};
const opacityVariants = {
  visible: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: {  opacity: 0 }
};

const opacityAndScaleVariants= {
  opacityAndScale:{ opacity:1 , scale: 1, transition:{ duration: 2,type: "spring" ,ease:'easeInOut' } },
  hidden:{ scale:0.5, opacity:0 }
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Profit', 'TI', 'Customers'],
  datasets: [
    {
      label: 'in porcentaje %',
      data: [70, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




const Statistics = () => {

  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
   
    }
  }, [toRigth,Opacity,toLeft,opacityAndScale, inView]);


    return (
        <div className='statistics'>
            <div className="content">
  <div className="row st-row">
    <div className="col-sm st-col" >
    <div className="st-col-first">      
    <motion.h1 
     ref={ref}
     animate={opacityAndScale}
     initial="hidden"
     variants={opacityAndScaleVariants}
    className='st-title'>Your stats will fly with us, dont wait</motion.h1>
    <motion.p 
     ref={ref}
     animate={Opacity}
     initial="hidden"
     variants={opacityVariants}
    className='st-text'>We optimize all the processes of your business, leading to an intrinsic increase in all the value statistics of your business.</motion.p>
    <motion.div
     ref={ref}
    animate={Opacity}
    initial="hidden"
    variants={opacityVariants}
   >
      <Button className='st-button'>Learn More</Button>  
    </motion.div>
    </div>
    </div>
    <motion.div
     ref={ref}
     animate={toLeft}
     initial="hidden"
     variants={toLeftVariants}   
    className="col-sm st-col">
    <Doughnut className='chart-home' data={data} />
    </motion.div>
  </div>
</div>
        </div>
    );
};

const MakeItEasy = () => {

  
  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
   
    }
  }, [toRigth,Opacity,toLeft,opacityAndScale, inView]);



    return (
        <div className='statistics'>
            <div className="content">
  <div className="row me-row">
    <motion.div 
     ref={ref}
     animate={toRigth}
     initial="hidden"
     variants={toRigthVariants}
    
    className="col-sm st-col" >
    <div className="pb-col-first">      
    <h1 className='pb-text'>Sales</h1> 
    <ProgressBar now={now} label={`${now}%`} />
    <h1 className='pb-text'>Optimization</h1> 
    <ProgressBar now={now} label={`${now}%`} />
    <h1 className='pb-text'>Always updated</h1> 
    <ProgressBar now={now} label={`${now}%`} />

    </div>
    </motion.div>
    <div className="col-sm st-col">

    <motion.h1 
     ref={ref}
     animate={opacityAndScale}
     initial="hidden"
     variants={opacityAndScaleVariants}
    className='st-title'>Simplify your workflow</motion.h1>
    <motion.p
     ref={ref}
     animate={Opacity}
     initial="hidden"
     variants={opacityVariants} 
    className='st-text'>We optimize all the processes of your business, leading to an intrinsic increase in all the value statistics of your business.</motion.p>
    <motion.div
     ref={ref}
    animate={Opacity}
    initial="hidden"
    variants={opacityVariants}
   >
      <Button className='me-button'>Learn More</Button>  
    </motion.div>
    </div>
  </div>
</div>
        </div>
    );
};


const HomePage = () => {
  
  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const opacityC1= useAnimation();
  const opacityC2 = useAnimation();
  const opacityC3 = useAnimation();
 
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
      opacityC1.start("opacityC1");
      opacityC2.start("opacityC2");
      opacityC3.start("opacityC3");
    }
  }, [toRigth,Opacity,toLeft,opacityAndScale, opacityC1,opacityC2, opacityC3, inView]);



    const icon = <FontAwesomeIcon icon={faAtom} />
    const iconD = <FontAwesomeIcon icon={faCircleDollarToSlot} />

    return (

        <> 
        
          <Page>
             <TituloPage titulo="For businesses.">
            </TituloPage>
            <div className="div-cards">
            <Cards titulo="Management" iconC={icon} linkCard="/management"   bodyText="Simplify your work"></Cards>
            <Cards titulo="Invest" iconC={iconD} linkCard="/invest" bodyText="Global investors"></Cards>
            <Cards titulo="Advisor" iconC={icon} linkCard="/advisor" bodyText="Support our startup"></Cards>
            </div> 
            <Statistics />
            <MakeItEasy />
            
            <motion.div
               ref={ref}
               animate={Opacity}
               initial="hidden"
               variants={opacityVariants} 
                   
            >    
            <Whyus />
            </motion.div>
         </Page>
            
        </>

    );
};

export default HomePage;