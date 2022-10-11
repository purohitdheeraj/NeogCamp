export function fakeFetch(msg, shouldReject) {
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
