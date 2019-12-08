import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSavedAnimals } from '../services/api-helper';
import catHand from '../cat-hand.png';
import moment from 'moment';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SavedAnimals(props) {
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    getAnimals(props.currentUser);
  }, []);

  const getAnimals = async (user) => {
    const animalsResponse = await getSavedAnimals(user.id);
    setAnimals(animalsResponse);
  }

  return (
    <div>
      {animals && animals.map(animal => (
        <>
          <div className="listing-row">
            <Link to={`/animal-details/${animal.id}`}>
              <img className="listing-image" src={animal.default_image} alt={catHand} />
            </Link>
            <div classname="listing-row-details">
              <Link to={`/animal-details/${animal.id}`}>
                <h2>{animal.title}
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>Listing is less than 4 days old!</Tooltip>}
                  >
                    {
                      moment(Date.now()).diff(new Date(animal.created_at), "days") < 4 ?
                        <Badge variant="secondary">New</Badge> : <></>
                    }
                  </OverlayTrigger>
                </h2>
              </Link>
              <p>{animal.description}</p>
              <p>${parseFloat(animal.price).toFixed(2)}</p>
              <p>Location: {props.currentUser.location}</p>
            </div>
            <div>
              <p>ID: {animal.id}</p>
              <p>Age: {animal.timedistance}</p>
              <p>Posted by: {animal.user.username}</p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}
