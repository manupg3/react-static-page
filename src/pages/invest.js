import React from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import Tabs from '../components/tabs';
import SubtitlePage from '../components/subtitlePage';
import {motion} from 'framer-motion';

const InvestPage = () => {

    const subtitle = "We get you world-class investments.";

const titleTabs = ["We define investment","Connect with investors" 
                  ,"implementation of investments"]

const textTabs = ["We define the necessary investment","we connect you with global investors" 
                  ,"We guide you in the implementation of these investments"]
                  
    return (

        <>  <Page>
          <TituloPage titulo="Invest.">
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
              <Tabs  titleTabs={titleTabs} textTabs={textTabs} />
            </Page>
        </>
    );
};

export default InvestPage;