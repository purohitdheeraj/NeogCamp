// import { fakeFetch } from "./promise";

/**
  live ex13: chaining#
challenge#
Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.

Note: Instead of returning the response from the server this should return the length.

Hint: It will return in a promise.

understanding#
Whatever you return from .then() also becomes a promise. And this is how the chain propagates.

 */

function fakeFetch(msg, shouldReject) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldReject) {
				reject(`error from server: ${msg}`);
			} else {
				resolve(`from server: ${msg}`);
			}
		}, 3000);
	});
}

const getServerResponseLength = (msg) => {
	let result = fakeFetch(msg, false).then(
		(res) => res.length
	);
	return result;
};

const result = getServerResponseLength("Shree Ram");

result.then((res) => console.log(res));
