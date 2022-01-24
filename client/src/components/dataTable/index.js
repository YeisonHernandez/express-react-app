import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { eraseAnimal, updateAnimal } from '../../redux/reducers/thunks';

const DataTable = ({ data }) => {
   const dispatch = useDispatch()
   const [animal, setAnimal] = useState({
      age: '',
      id: '',
      name: '',
      species: ''
   });

   const callDelete = (id) => {
      dispatch(eraseAnimal(id));
   };

   const handleAction = (row) => {
      if(animal.id === row.id){
         dispatch(updateAnimal(animal));
         setAnimal(prev => ({...prev, id: ''}));
      } else {
         setAnimal(row);
      }
   }

   const handleChange = (e) => {
      const {name, value} = e.target;
      setAnimal(prev => ({...prev, [name]: value}))
   };

   const renderRows = () => {
      if(data.length) {
         const rows = data.map(
            (row) => 
            <tr key={row.id + '_row'}>
               <td key={`${row.id}_td_name_age`}>
                  {animal.id !== row.id ? 
                     <>
                        <span>{row.name}</span>
                        <span>{row.age}</span>
                     </>
                     :
                     <>
                        <input value={animal.name} name="name" onChange={handleChange}/>
                        <input value={animal.age} name="age" onChange={handleChange}/>
                     </>
                  }
               </td>
               <td key={`${row.id}_td_species`}>
               {animal.id !== row.id ? 
                     <>
                        <span>{row.species}</span>
                     </>
                     :
                     <>
                        <input value={animal.species} name="species" onChange={handleChange}/>
                     </>
                  }
               </td>
               <td key={`${row.id}_td_actions`}>
                     <button onClick={() => handleAction(row)} >
                        {animal.id === row.id ? 'Save' : 'Edit'}
                     </button>
                  <button onClick={() => callDelete(row.id)}>
                     Delete
                  </button>
               </td>
            </tr>
         );
         return rows;
      }
      return <tr><td>No Results</td></tr>;
   }

   return (
      <table cellPadding={0} cellSpacing={0}>
         <thead>
            <tr>
               <th>Name/Age</th>
               <th>Species</th>
            </tr>
         </thead>
         <tbody>
            {renderRows()}
         </tbody>
      </table>
   )
}

export default DataTable;