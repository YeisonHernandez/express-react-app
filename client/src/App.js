import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import DataTable from './components/dataTable';
import AnimalForm from './components/animalForm';
import { fetchAnimals } from './redux/reducers/thunks';

function App() {
  const { entities } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <div className="App">
      <AnimalForm />
      <DataTable data={entities} />
    </div>
  );
}

export default App;
