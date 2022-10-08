const strLength = (name, cb) => {
	let nameLength = name.length;
	return cb(nameLength);
};

const msgCb = (nameLength) =>
	`OMG! my name is ${nameLength} char long!`;

a = strLength("Jagannath", msgCb);
console.log(a);
