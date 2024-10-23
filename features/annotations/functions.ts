// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// return void
const logger = (message: string): void => {
  console.log(message);
  // return null or undefined
};

// return never
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring with annotations
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// es2015
// const logWeather = ({date, weather}) => {
//     console.log(date)
//     console.log(weather)
// }

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
