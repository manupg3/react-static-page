import React,{useEffect, useRef} from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import { Container,Col,Row } from 'react-bootstrap';
import '../assets/css/stylehowitwork.css';
import SubtitlePage from '../components/subtitlePage';
import { useAnimation, motion,useViewportScroll, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useManager from 'rsuite/esm/List/helper/useManager';


const toRigthVariants = {
    toRigth: { x: 0, transition: { duration: 1.2,type: "spring" ,ease:'easeInOut',delay:0.4}, opacity: 1 },
    hidden: { x:-50, opacity: 0 }
  };
  const toLeftVariants = {
    toLeft: { x: 0, transition: { duration: 1.2,type: "spring" ,ease:'easeInOut',delay:0.4}, opacity: 1 },
    hidden: { x:30, opacity: 0 }
  };
  
const toRigthVariants2 = {
    toRigth2: { x: 0, transition: { duration: 1.2,type: "spring" ,ease:'easeInOut',delay:0.4}, opacity: 1 },
    hidden: { x:-50, opacity: 0 }
  };
  const opacityVariants = {
    visible: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
    hidden: {  opacity: 0 }
  };
  
  const opacityVariants2 = {
    visible2: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
    hidden: {  opacity: 0 }
  };
  const opacityVariants3 = {
    visible3: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
    hidden: {  opacity: 0 }
  };
  

const HowItWorks = () => {

    const toRigth = useAnimation();
    const toRigth2 = useAnimation();
    const toLeft = useAnimation();
    const opacity = useAnimation()
    const opacity2 = useAnimation()
    const opacity3 = useAnimation()

   

    const options = { rootMargin: '100px', threshold: 0.25 }
    const [ref, inView] = useInView();
    const [refStep2, inviewStep2  ] = useInView();
    const [refStep3, inviewStep3  ] = useInView();
    const [refN1, inviewNStep1  ] = useInView();
    const [refStepN2, inviewNStep2  ] = useInView();
    const [refStepN3, inviewNStep3  ] = useInView();

    
    
    useEffect(() => {
        
      if (inView) {
       
        toRigth.start("toRigth");

    }
      if (inviewNStep1) {

        opacity.start("visible");   
      
    }
    if(inviewNStep2)
    {

        opacity2.start("visible2");

    }
       
      
    if(inviewStep2){

        toLeft.start("toLeft");
      
      }
      if (inviewNStep2) {
       
        opacity2.start("visible");   
      
    }
       
    
    if(inviewStep3){

        toRigth2.start("toRigth2");  
     
      }
      if (inviewNStep3) {
       
        opacity3.start("visible3");   
      
    }
       
    
    }, [toRigth, toLeft,opacity2,opacity3, toRigth2,inviewStep2,inviewStep3,inviewNStep1,inviewNStep2,inviewNStep3,inView]);

    const subtitle = "Our process is fast and simple. Leave with us.";

    return (
        <>  
     <Page>
     <TituloPage titulo="How it works?">
     </TituloPage>
     <div className='text-center div-subtitle-page'>
         <SubtitlePage subtitulo={subtitle} />  
         <motion.button 
           initial={{  opacity: 0,
            scale: 0.8}
            }
             animate={{
                 opacity: 1,
                 scale:1,       
             }}
             transition={{ duration: 3,type: "spring" ,ease:'easeInOut', delay:0.9}}
                
         className='whyus-button btn btn-primary'>Talk with us.</motion.button>       
      </div>
       <div className='text-center'>
       <h3>Steps</h3>
       </div>
       <div>
       <Container>
       <div>
       <Row className='row-steps' >
                <Col > 
                  <motion.div  
                  ref={ref}   
                  animate={toRigth}
                  initial="hidden"
                  variants={toRigthVariants} 
                  className='text-center text-steps'>
                    <h3 className=''>Knowing your business</h3>
                    <p className='description-steps'>First we must know all the processes of your business to define the action plan</p>
                    <button className='btn btn-primary whyus-button'>
                        Learn more 
                    </button>   
                  </motion.div>
            
                  </Col>
                <Col className='col-3-b'><motion.h2 
                 ref={refN1}   
                 animate={opacity}
                 initial="hidden"
                 variants={opacityVariants} 
               >1</motion.h2></Col>
            </Row>
            </div>
            <div>  
            <Row className='row-steps'>
                <Col  xs={6} className='col-2-a'>
                <motion.h2 
                 ref={refStepN2}   
                 animate={opacity2}
                 initial="hidden"
                 variants={opacityVariants2} 
               >2</motion.h2>
                       </Col>
                <Col className='col-2-b'> 
                  <motion.div 
                  ref={refStep2}
                  animate={toLeft}
                  initial="hidden"
                  variants={toLeftVariants}  
                  className='text-center text-steps'>
                    <h3 className=''>Knowing your business</h3>
                    <p className='description-steps'>First we must know all the processes of your business to define the action plan</p>
                    <button className='btn btn-primary me-button'>
                        Learn more 
                    </button>   
                     </motion.div></Col>
            </Row>
            </div>
            <div> 
            <Row className='row-steps' >
                <Col > 
                  <motion.div     
                  ref={refStep3}
                  animate={toRigth2}
                  initial="hidden"
                  variants={toRigthVariants2}  
                  className='text-center text-steps'>
                    <h3 className=''>Knowing your business</h3>
                    <p className='description-steps'>First we must know all the processes of your business to define the action plan</p>
                    <button className='btn btn-primary whyus-button'>
                        Learn more 
                    </button>   
                    </motion.div>
                  </Col>
                <Col className='col-3-b'><motion.h2 
                 ref={refStepN3}   
                 animate={opacity3}
                 initial="hidden"
                 variants={opacityVariants3} 
               >3</motion.h2></Col>
            </Row>
            </div>
      </Container> 
       </div> 
    </Page>
            
        </>
    );
};

export default HowItWorks;