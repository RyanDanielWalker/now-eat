import { v4 } from 'uuid';

const wendys = v4();
const oliveGarden = v4();

const SeedData = {
  masterRestaurantsList: {
    [wendys]: {
      name: "Wendy's",
      price: "$$",
      url: "www.com",
      id: wendys
    },
    [oliveGarden]: {
      name: "Olive Garden",
      price: "$$",
      url: "www.com",
      id: oliveGarden
    },
  }
}

export default SeedData;
