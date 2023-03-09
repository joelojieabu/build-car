// let scores = [
//   60,
//   50,
//   60,
//   58,
//   54,
//   54,
//   58,
//   50,
//   52,
//   54,
//   48,
//   69,
//   34,
//   55,
//   51,
//   52,
//   44,
//   51,
//   69,
//   64,
//   66,
//   55,
//   52,
//   61,
//   46,
//   31,
//   57,
//   52,
//   44,
//   18,
//   41,
//   53,
//   55,
//   61,
//   51,
//   100,
//   100
// ];
// let result = scores.indexOf(Math.max(...scores));
// let highest = scores[result];
// let secHigh = scores.lastIndexOf(highest);
// console.log("the highest score is " + highest);
// console.log("It occurs at indexes " + result + ", and " + secHigh);

// let highest = 0;
// for (let i = 0; i <= scores.length; i++) {
//   if (scores[i] > highest) highest = scores[i];
// }
// console.log(highest);

// let highest = 0;
// for (let i = 0; i <= scores.length; i++) {
//   if (scores[i] > highest) {
//     highest = scores[i];
//   }
//   console.log(highest);
// }

// let highest = 0;
// let highestIndexes = [];
// for (let i = 0; i <= scores.length; i++) {
//   if (scores[i] > highest) {
//     highest = scores[i];
//   }
// }
// console.log(highest);

// for (let i = 0; i <= scores.length; i++) {
//   if (scores[i] === highest) {
//     highestIndexes.push(i);
//   }
// }

// console.log(highestIndexes);
// let redCar = {
//   yearMade: 2000,
//   mileage: 1000
// };

// function buyCar(car, approvYear, approvMileage) {
//   if (car.yearMade < approvYear) {
//     console.log("Car is too old");
//     console.log("Purchase failed");
//     return false;
//   }
//   if (car.mileage > approvMileage) {
//     console.log("Mileage is too high");
//     console.log("Purchase failed");
//     return false;
//   } else {
//     console.log("This car is okay for purchase!");
//   }
//   return true;
// }
// let m = buyCar(redCar, 1000, 3000)
// if (m) {
//   console.log("Congratulations! you have a new car.");
// }

// function buyCar(car, goodPrice) {
//   if (car.condition === "new") {
//     console.log("This car has never been driven...");
//   }
//   if (car.condition !== "new") {
//     console.log("This car is used. Quiting purchase process...");
//     return false;
//   }
//   if (car.price > goodPrice) {
//     console.log(
//       "This car is greater than your agreed budget, Quiting purchase process..."
//     );
//     return false;
//   }
//   if (car.price <= goodPrice) {
//     console.log("This car is within your budget...");
//   }
//   return true;
// }

// let redCar = {
//   condition: "new",
//   price: 90
// };
// let blueCar = {
//   condition: "old",
//   price: 100
// };

// let buy = buyCar(blueCar, 100);

// if (buy) {
//   console.log(
//     "Congratulations! this car meets your standards and is within your budget!"
//   );
//   let res = prompt("Enter 1 to buy Car");
//   let theRes = parseInt(res);
//   if (theRes === 1) {
//     console.log("Purchase Sucessful! Redirecting...");
//   } else {
//     console.log("Purchase Failed!");
//   }
// }
function makeCar() {
  let make = ["Toyota", "Honda", "Kia", "Benz", "Bentley"];
  let color = ["Black", "White", "Silver", "Blue", "Gold"];
  let model = ["Sport", "Deluxe"];

  let makeNo = Math.floor(Math.random() * make.length);
  let colorNo = Math.floor(Math.random() * color.length);
  let modelNo = Math.floor(Math.random() * model.length);

  let car = {
    make: make[makeNo],
    color: color[colorNo],
    model: model[modelNo],
    isOn: true,
    fuel: 1,
    name: color[colorNo] + " " + make[makeNo] + " " + model[modelNo]
  };
  return car;
}
function displayCar(car) {
  console.log("Congratulations! you won a " + car.name);
}

let theCar = makeCar();

function startCar(car) {
  if (car.fuel >= 1) {
    car.isOn = true;
    console.log("Car on!");
  } else {
    console.log(car.name + " cannot start because your fuel tank is empty");
  }
}
function stopCar(car) {
  car.isOn = false;
  console.log("Car turned off");
}
function addFuel(car, fuel) {
  car.fuel = car.fuel + fuel;
  if (fuel > 1) {
    console.log("You have added: " + fuel + " litres to your tank.");
  }
  if (fuel === 1) {
    console.log("You have added: " + fuel + " litre to your tank.");
  }
  if (car.fuel > 1) {
    console.log("You now have " + car.fuel + " litres in your tank");
  }
  if (car.fuel === 1) {
    console.log("You now have " + car.fuel + " litre in your tank");
  }
}
function checkFuel(car) {
  if (car.fuel > 1) {
    console.log("You have: " + car.fuel + " litres of fuel");
  } else {
    console.log("You have: " + car.fuel + " litre of fuel");
  }
}
function moveCar(car) {
  if (car.isOn) {
    console.log("Vroom vroom...");
    car.fuel = car.fuel - 1;
    if (car.fuel <= 1) {
      console.log("Fuel low...");
    }
    if (car.fuel === 0) {
      console.log("Vroom vroom...");
      console.log("Tank empty, turning engine off");
      stopCar(car);
    }
  } else {
    console.log("Turn the car on before attempting to move it");
  }
}
