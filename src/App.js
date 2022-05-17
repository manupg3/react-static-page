import React from 'react';
import {lastIndexOf, substr} from '@7urtle/lambda';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesApp from './routes/routes';
import './App.css';
import Header from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './components/footer';
import './assets/css/stylesfooter.css';

const getBasename = path => substr(lastIndexOf('/')(path))(0)(path);


const App = () => {
    return (
        <div className='content'>
           
                <Router>
                <Header className="header"/>

                    <RoutesApp />
                    <FooterPage />
                </Router>
        </div>
    );
};

export default App;
