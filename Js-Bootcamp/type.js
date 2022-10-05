// type of

// instance of

const Car = function (make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
};

const auto = new Car("Maruti Suzuki", "Swift", 2008);

// ** auto is an object it contains an reference to Prototype of Car
// ** also every entity in Js is an instance of Object Type(God Father) through prototype chaining

console.log(auto instanceof Car);
console.log(auto instanceof Object);
