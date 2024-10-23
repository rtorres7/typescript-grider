export {};
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const carPop = carMakers.pop();

// prevent incompatible values
// carMakers.push(100)

// help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), '2024-09-11'];
importantDates.push('2024-10-10');
importantDates.push(new Date());
// importantDates.push(100)
