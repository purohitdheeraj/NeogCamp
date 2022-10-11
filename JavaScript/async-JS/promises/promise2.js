/*live ex14: waterfall data#
challenge#
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.*/

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

const syncCallsToServer = (msg1, msg2) => {
	fakeFetch(msg1).then((res1) => {
		console.log(`result 1`, res1);
		fakeFetch(msg2).then((res2) =>
			console.log(`result 2`, res2)
		);
	});
};

syncCallsToServer("hare krishna", "radhe radhe");
