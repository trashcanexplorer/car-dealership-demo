import { fetchData } from './fetchdata'

export async function getCarData(id) {
    console.log(id);
    const cars = await fetchData();
    var carData = null;
    for (let i = 0; i < cars.length; i++) { 
        if (id == cars[i].id) {
            carData = cars[i];
        } 
    }
    return {
      id,
      carData,
    };
}
  