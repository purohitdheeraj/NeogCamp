const printAfterDelay = (msg, delay) => {
	setInterval(() => console.log(msg), delay);
};

// printAfterDelay("Hare Krishna", 2000);

const countDown = (num) => {
  let countId = setInterval(() => {
    console.log(num)
		num--;
    if (num === 0) {
			console.log("Bang Bang");
			clearInterval(countId);
		}
	}, 2000);
};

countDown(5);
