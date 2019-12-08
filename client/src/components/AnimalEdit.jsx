import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getAnimal, editAnimal, deleteImage, addAnimalImage } from '../services/api-helper';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AnimalEdit = (props) => {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnimal(props.animalId);
  }, []);

  const loadAnimal = async (id) => {
    const animalsResponse = await getAnimal(id);
    setTitle(animalsResponse.title);
    setDescription(animalsResponse.description);
    setImages(animalsResponse.animalImages);
    setLoading(false);
  }


  const editExistingAnimal = async () => {
    const image = images.pop();
    const add = await editAnimal({ id: props.animalId, title: title, description: description, default_image: image });
    props.history.push("/")
  }
  const addNewImage = async (image) => {
    const add = await addAnimalImage(props.animalId, image)
    let im = images;
    im.push(add);
    setImages(im);
    setSelectedImage("");
  }
  const removeImage = async (id) => {
    setImages(images.filter(img => img.id != id));
    await deleteImage(id);
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
        
        <div className="delete-image-group">
          {images.map(image => (
            <div className="edit-animal-img-container">
              <img className="new-animal-images" src={image.image_url} alt="none" />
              <div onClick={() => { removeImage(image.id); }} className="delete-img">X</div>
            </div>
          ))}
        </div>
      </div>
      <button id="add-new-animal-btn" onClick={() => { editExistingAnimal(); }} >Edit</button>
    </div>
  )
}

export default withRouter(AnimalEdit);