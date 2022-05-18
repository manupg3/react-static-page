import React from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import Tabs from '../components/tabs';
import SubtitlePage from '../components/subtitlePage';
import {motion} from 'framer-motion';
import { BarChart } from '../components/charts';


const ManagementPage = () => {

const subtitle = "We take care of everything. Leave with us.";
const titleTabs = ["Know your business","Define the process","We take care"]
const textTabs = ["we know all the processes of the company","We redefine the processes, to improve the efficiency of each process"
                 ,"Our specialists will be in charge of directing and controlling the new processes"]
const labelsChart = ["Management","Profits"];

                


    return (

        <>  <Page>
          <TituloPage titulo="Management.">
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

export default ManagementPage;