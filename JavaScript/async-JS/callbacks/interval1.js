const printAfterDelay = (msg, msgDelay, timeoutCb) => {
	let intervalId = setInterval(
		() => console.log(msg),
		msgDelay
	);
	timeoutCb(intervalId);
};

const timeoutCb = (id) =>
	setTimeout(() => clearInterval(id), 8000);

printAfterDelay("radhe shyam", 1000, timeoutCb);
