import React, {useEffect} from 'react';
import '../assets/css/stylescontent.css';
import {motion} from 'framer-motion';


const subtitlePage = ({subtitulo}) => {

    
    return (

        <div className="">
           <motion.p className="subtitle-page"
            initial={
            {  opacity: 0,
            scale: 0.8}
            }
             animate={{
                 opacity: 1,
                 scale:1,
                  
             }}
             transition={{ duration: 3,type: "spring" ,ease:'easeInOut', delay:0.6}}
               
           >{subtitulo}</motion.p>
        </div>

    );
};

export default subtitlePage;