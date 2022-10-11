// live ex16: use async-await to do waterfall#
// challenge#
// Do question number 14 with async-await this time.

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

async function waterfallData(msg1, msg2) {
	try {
		const result1 = await fakeFetch(msg1);
		const result2 = await fakeFetch(msg2);
		console.log(result1, result2);
	} catch (error) {
		console.log(error);
	}
}

waterfallData("hare krishna", "Shree Radhe");
