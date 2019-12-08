import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { addAnimal } from '../services/api-helper';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AnimalAdd = (props) => {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [defaultImage, setDefaultImage] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');


  const addAnimal = async () => {
    const image = images.pop();
    const add = await addAnimal({ title: title, description: description, age: age, sex: sex, default_image: image }, images);
    props.history.push(`/animal-details/${add.id}`);
  }

  const addNewImage = async (image) => {
    let i = images;
    i.push(image);
    setImages(i);
    setSelectedImage("");
  }

  return (
    <div className="add-animal-comp">
      <form className="add-animal-form" >
        <label>Title</label>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </form>
      <div className="image-list">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Image"
            aria-label="Add Image"
            aria-describedby="basic-addon2"
            value={selectedImage}
            onChange={e => setSelectedImage(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => { addNewImage(selectedImage); }}>Add</Button>
          </InputGroup.Append>
        </InputGroup>
        <div>
          {images.map(image => <img className="new-animal-images" src={image} alt="none" />)}
        </div>
      </div>
      <button id="add-new-animal-btn" onClick={() => { AnimalAdd(); }} >Add</button>
    </div>
  )
}

export default withRouter(AnimalAdd);