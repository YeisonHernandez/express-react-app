const express = require('express');
const router = express.Router();
const {
   getAllAnimals,
   getAnimal,
   createAnimal,
   updateAnimal,
   deleteAnimal
} = require('../../controllers/animalsController')

router.route('/')
   .get(getAllAnimals)
   .post(createAnimal)

router.route('/:id')
   .get(getAnimal)
   .put(updateAnimal)
   .delete(deleteAnimal)

module.exports = router;
