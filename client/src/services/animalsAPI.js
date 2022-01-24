import instance from './serviceInstance';

export const getAnimals = async () => {
   try {
      const res = await instance.get('/animals');
      return res;
   } catch (err) {
      return err;
   }
};

export const postAnimal = async (body) => {
   try {
      const res = await instance.post('/animals', body);
      return res;
   } catch (err) {
      return err;
   }
};

export const putAnimal = async ( animal) => {
   try {
      const res = await instance.put(`/animals/${animal.id}`, animal);
      return res;
   } catch (err) {
      return err;
   }
};

export const deleteAnimal = async (id) => {
   try {
      const res = await instance.delete(`animals/${id}`);
      return res;
   } catch (err) {
      return err;
   }
};