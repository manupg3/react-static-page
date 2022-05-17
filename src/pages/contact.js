import React from 'react';
import Page from '../components/pageScrolling';
import FormPage from '../components/formpage';
import TitlePage from '../components/titlePages';
/**
 * Application home page component
 * @returns {JSX}
 */
const ContactPage = () => {

    return (
        <>  
       <TitlePage titulo="Talk with us."></TitlePage>   
          <FormPage></FormPage>
       
        </>
    );
};

export default ContactPage;