// import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
// // import { getAutoMakes, getAutoModels, getAutoYears, getAutoModelOptions, addItem } from '../services/api-helper';
// import { InputGroup, FormControl, Button } from 'react-bootstrap';

// const AddItem = (props) => {

//   const [title, setTitle] = useState(null);
//   const [description, setDescription] = useState(null);
//   const [age, setAge] = useState(null);
//   const [sex, setSex] = useState(null);
//   const [defaultImage, setDefaultImage] = useState([]);
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState('');


//   useEffect(() => {
//     getYears();
//   }, []);

//   const clearMake = async () => {
//     setMake(null);
//     setMakes(null);
//     setSelection(null);
//   }
//   const clearModel = async () => {
//     setModel(null);
//     setModels(null);
//     setSelection(null);
//   }


//   const getYears = async () => {
//     const autoYears = await getAutoYears();
//     clearMake();
//     clearModel();
//     clearModelOption();
//     setYears(autoYears.map(year => ((<option>{year.text}</option>))));
//   }
//   const getMakes = async (event) => {
//     setYear(event.target.value);
//     clearMake();
//     clearModel();
//     clearModelOption();
//     const autoMakes = await getAutoMakes(event.target.value);
//     setMakes(autoMakes.map(make => ((<option>{make.text}</option>))));
//   }

//   const getModels = async (event) => {
//     setMake(event.target.value);
//     clearModel();
//     clearModelOption();
//     const autoModels = await getAutoModels(year, event.target.value);
//     setModels(autoModels.map(model => ((<option>{model.text}</option>))));
//   }
//   const getModelsOptions = async (event) => {
//     setModel(event.target.value);
//     clearModelOption();
//     const autoModelsOptions = await getAutoModelOptions(year, make, event.target.value);

//     autoModelsOptions.unshift({ text: '', value: '' });
//     setModelOptions(autoModelsOptions.map(model => ((<option>{model.text}</option>))));
//   }

//   const setAutomobile = async (event) => {
//     setModelOption(event.target.value)
//   }

//   const addNewItem = async () => {
//     const image = images.pop();
//     const add = await addItem({ title: title, description: description, price: price, year: year, make: make, model: model, mptions: modelOption, default_image: image }, images);
//     props.history.push(`/item-details/${add.id}`);
//   }

//   const addNewImage = async (image) => {
//     let i = images;
//     i.push(image);
//     setImages(i);
//     setSelectedImage("");
//   }

//   return (
//     <div className="add-item-comp">
//       <form className="add-item-form" >
//         <label>Title</label>
//         <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
//         <label>Description</label>
//         <textarea value={description} onChange={e => setDescription(e.target.value)} />
//         <InputGroup className="mb-3">
//           <InputGroup.Prepend>
//             <InputGroup.Text>$</InputGroup.Text>
//           </InputGroup.Prepend>
//           <FormControl aria-label="Amount" onChange={e => setPrice(e.target.value)} />
//           <InputGroup.Append>
//             <InputGroup.Text>.00</InputGroup.Text>
//           </InputGroup.Append>
//         </InputGroup>
//         <label>Year</label>
//         <select onChange={getMakes} name="year" type="text" placeholder="year">
//           {years}
//         </select>
//         <label>Make</label>
//         <select onChange={getModels} name="make" type="text" placeholder="make">
//           {makes}
//         </select>
//         <label>Model</label>
//         <select onChange={getModelsOptions} name="model" type="text" placeholder="model">
//           {models}
//         </select>
//         <label>Model Options</label>
//         <select onChange={setAutomobile} name="model" type="text" placeholder="model">
//           {modelOptions}
//         </select>
//       </form>
//       <div className="image-list">
//         <InputGroup className="mb-3">
//           <FormControl
//             placeholder="Add Image"
//             aria-label="Add Image"
//             aria-describedby="basic-addon2"
//             value={selectedImage}
//             onChange={e => setSelectedImage(e.target.value)}
//           />
//           <InputGroup.Append>
//             <Button variant="outline-secondary" onClick={() => { addNewImage(selectedImage); }}>Add</Button>
//           </InputGroup.Append>
//         </InputGroup>
//         <div>
//           {images.map(image => <img className="new-item-images" src={image} alt="none" />)}
//         </div>
//       </div>
//       <button id="add-new-item-btn" onClick={() => { addNewItem(); }} >Add</button>
//       <p>{selection}</p>
//     </div>
//   )
// }

// export default withRouter(AnimalAdd);