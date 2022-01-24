const data = {
   animals: require('../models/animals'),
   setAnimals: function (data) {
      this.animals = data
   }
};

const getAllAnimals = (req, res) => {
   res.json(data.animals);
}

const getAnimal = (req, res) => {
   const animal = data.animals.find(a => a.id === parseInt(req.params.id));
   if (!animal) {
      return res.status(404).json({
         'message': `Animal ID ${req.body.id} not found.`
      });
   }
   res.status(200).json(animal);
}

const createAnimal = (req, res) => {
   const newAnimal = {
      id: data.animals[data.animals.length - 1].id + 1 || 1,
      name: req.body.name,
      species: req.body.species,
      age: req.body.age
   };

   if (!newAnimal.name || !newAnimal.species || !newAnimal.age) {
      return res.status(404).json({
         'message': 'Name, Species and Age are required.'
      });
   }

   data.setAnimals([...data.animals, newAnimal]);
   res.status(201).json(newAnimal)
}

const updateAnimal = (req, res) => {
   const animal = data.animals.find(a => a.id === parseInt(req.params.id));
   if (!animal) {
      return res.status(404).json({
         'message': `Animal ID ${req.body.id} not found.`
      });
   }
   if (req.body.name) {
      animal.name = req.body.name;
   }
   if (req.body.species) {
      animal.species = req.body.species;
   }
   if (req.body.age) {
      animal.age = req.body.age;
   }
   const filteredArray = data.animals.filter(a => a.id !== parseInt(req.params.id));
   const unsortedArray = [...filteredArray, animal];
   data.setAnimals(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
   res.status(200).json(animal);
}

const deleteAnimal = (req, res) => {
   const animal = data.animals.find(a => a.id === parseInt(req.params.id));
   if (!animal) {
      return res.status(404).json({
         'message': `Animal with ID ${req.params.id} not found`
      });
   }
   const filteredArray = data.animals.filter(a => a.id !== parseInt(req.params.id));
   data.setAnimals([...filteredArray]);
   res.status(200).json(animal);
}

module.exports = {
   getAllAnimals,
   getAnimal,
   createAnimal,
   updateAnimal,
   deleteAnimal
}