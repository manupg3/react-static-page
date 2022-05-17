import React, {useEffect} from 'react';
import '../assets/css/stylescontent.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom';
import {useAnimation, motion,useViewportScroll, useTransform} from 'framer-motion';
import { useInView } from "react-intersection-observer";


const opacitycard1Variants = {
  opacityC1: { transition: { duration: 5,type: "spring" ,ease:'easeInOut',delay:0.2}, opacity: 1 },
  hidden: {  opacity: 0 }
};

const Cards = ({titulo,bodyText,linkCard,iconC}) => {

  const opacityC1= useAnimation();
 
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      opacityC1.start("opacityC1");

    }
  }, [ opacityC1,inView]);

    return (

        <motion.div
        ref={ref}
        animate={opacityC1}
        initial="hidden"
        variants={opacitycard1Variants} 
           
        className="cards-first">
  <Link to={linkCard} className="link-cards">
           <Card className="text-center cards">
  <Card.Body>
  <div className="card-b-header"> 
  <div className='icon-card'>{iconC}
  </div>
    <Card.Title className="title-cards">{titulo}</Card.Title>
  </div>
    <Card.Text className="body-cards-text">
    {bodyText}
    </Card.Text>
  </Card.Body>
</Card>
 </Link>
        </motion.div>

    );
};

export default Cards;

