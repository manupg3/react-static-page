import React from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import Tabs from '../components/tabs';
import SubtitlePage from '../components/subtitlePage';
import {motion} from 'framer-motion';
import { BarChart } from '../components/charts';

const AdvisorPage = () => {

    const subtitle = "we connect you with highly prestigious advisors.";

const titleTabs = ["We connect","know your process","improvements"]
const textTabs = ["we connect you with an advisor","The advisor integrates the processes of your company"
                 ,"The advisor proposes optimizations and improvements"]
const labelsChart = ["Effectiveness","Profits"];

    return (

        <>  <Page>
          <TituloPage titulo="Advisor.">
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
              <Tabs  titleTabs={titleTabs} textTabs={textTabs}/>
              <div className='chart-pages'>
              <h1>Your Stats Will Fly With Us</h1>     
              <BarChart   dataChartLabels={labelsChart} />  
              </div>
            </Page>
        </>
    );
};

export default AdvisorPage;