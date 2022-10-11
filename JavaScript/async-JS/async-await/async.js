// live ex15: use async-await with fakeFetch#
// challenge#
// Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.

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

const printSomeAsyncData = async () => {
	const result = await fakeFetch("Hare Krishna");
	console.log(result);
  result
};

printSomeAsyncData();
