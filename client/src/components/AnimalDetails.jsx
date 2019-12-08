import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import catHand from '../cat-hand.png';
import { getAnimal, deleteAnimal, saveAnimal, unSaveAnimal, getOwnerProfile } from '../services/api-helper';
import moment from 'moment';
import { Badge, OverlayTrigger, Tooltip, Popover, Button } from 'react-bootstrap';

function AnimalDetails(props) {
  const [listing, setListing] = useState(null);
  const [backGround, setbackGround] = useState(catHand);
  const [isOwner, setIsOwner] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showHide, setshowHide] = useState("Show Owner");
  const [shown, setShown] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(true);


  useEffect(() => {
    loadAnimal(props.animalId);
  }, []);

  const loadAnimal = async (id) => {
    const animalsResponse = await getAnimal(id);
    setListing(animalsResponse);
    setbackGround(animalsResponse.default_image);
    if (animalsResponse.user_id === props.currentUser.id) {
      setIsOwner(true);
      setOwnerProfile(animalsResponse.currentUser);
    }
    else {
      handleGetOwnerProfile(animalsResponse.user_id);
    }
    setIsSaved(animalsResponse.savedAnimals.find(animal => props.currentUser.id === animal.user_id) ? true : false);
  }
  const handleDelete = async (id) => {
    await deleteAnimal(id);
    props.history.push("/");
  }
  const handleSaveAnimal = async (id) => {
    if (isSaved) {
      await unSaveAnimal(id);
      setIsSaved(false);
    }
    else {
      await saveAnimal(id);
      setIsSaved(true);
    }
  }
  const handleGetOwnerProfile = async (id) => {
    const profile = await getOwnerProfile(id);
    setOwnerProfile(profile);
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Owner's Info</Popover.Title>
      <Popover.Content>
        {ownerProfile &&
          <>
            <p>Username: {ownerProfile.username}</p>
            <p>Email: {ownerProfile.email}</p>
            <p>User Since: {moment(new Date(ownerProfile.created_at)).format("MM/YYYY")}</p>
            <p>Name: {ownerProfile.firstname} {ownerProfile.lastname}</p>
            {/* <p>Location: {ownerProfile.location}</p> */}
          </>
        }
      </Popover.Content>
    </Popover>
  );
  const handleShowHide = () => {
    if (shown) {
      setshowHide("Hide Owner");
      setShown(false);
    }
    else {
      setshowHide("Show Owner");
      setShown(true);
    }
  }
  return (
    <div id="listing-details">

      {listing &&
        <>
          <div id="listing-image-group">
            <img id="main-pic" src={backGround} alt="" />

            <div className="listing-pics">
              <img className="listing-pic" src={listing.default_image} alt={catHand} onClick={() => setbackGround(listing.default_image)} />
              {listing.animalImages.map(image => (
                <img className="listing-pic" src={image.image_url} alt={catHand} onClick={() => setbackGround(image.image_url)} />
              ))}
            </div>
          </div>
          <div id="listing-details-group">

            <h1 id="title">{listing.title}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
              >
                {
                  moment(Date.now()).diff(new Date(listing.created_at), "days") < 4 ?
                    <Badge variant="secondary">New</Badge> : <></>
                }</OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Save\Unsave listing!</Tooltip>}
              >
                {isOwner ?
                  <></>
                  :

                  isSaved ?
                    <i class="im im-star" onClick={() => { handleSaveAnimal(listing.id); }}></i>
                    :
                    <i class="im im-star-o" onClick={() => { handleSaveAnimal(listing.id); }}></i>
                }</OverlayTrigger></h1>
            <p>{listing.description}</p>
            <div id="ymm"><p>{listing.year}</p>
              <p>{listing.make}</p>
              <p>{listing.model}</p>
              <p>{listing.mptions}</p>
            </div>
            <p>${parseFloat(listing.price).toFixed(2)}</p>
            <div id="grp-details-small">
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success" onClick={() => handleShowHide()}>{showHide}</Button>
              </OverlayTrigger>
              <p>Age: {listing.timedistance}</p>
              <p>Created on: {moment(new Date(listing.created_at)).format("ddd MM/DD/YYYY hh:mm A")}</p>
            </div>
            {isOwner &&
              <>
                <Link to={`/edit-animal/${listing.id}`}>
                  <Button variant="success">Edit Listing</Button>
                </Link>
                <Button variant="success" onClick={() => { handleDelete(listing.id); }}>Delete Listing</Button>
              </>
            }
          </div>
        </>
      }
    </div >
  )
}
export default withRouter(AnimalDetails);