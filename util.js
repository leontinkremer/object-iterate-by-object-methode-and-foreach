const car = {
  name: "Toyota Corolla",
  year: 2017,
  isNew: false,
};

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`));
