import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAnimal } from '../../redux/reducers/thunks';

const AnimalForm = () => {
   const dispatch = useDispatch();
   const [animal, setAnimal] = useState({
      name: '',
      age: '',
      species: ''
   });

   const handleSubmit = () => {
      dispatch(createAnimal(animal));
   };

   const handleChange = (e) => {
      const {name, value} = e.target;
      setAnimal(prev => ({...prev, [name]: value}))
   };

   return (
      <form className="form_wrapper" onSubmit={e => handleSubmit(e)}>
         <div>
            <label>
               Name:
               <input className="form_input" type="text" value={animal.name} name="name" onChange={handleChange}/>
            </label>
            <label>
               Age:
               <input type="text" value={animal.age} name="age" onChange={handleChange}/>
            </label>
            <label>
               Species:
               <input type="text" value={animal.species} name="species" onChange={handleChange}/>
            </label>
            <input type="submit" value="Add" />
         </div>
      </form>
   )
}

export default AnimalForm;