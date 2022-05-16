import React, {useEffect} from 'react';
import '../assets/css/stylescontent.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom';

const Cards = ({titulo,bodyText,linkCard,iconC}) => {


    return (

        <div className="cards-first">
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
        </div>

    );
};

export default Cards;

