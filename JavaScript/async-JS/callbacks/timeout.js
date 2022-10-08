/*ex4: use setTimeOut()#
challenge#
Learn how to use setTimeout()
Now, write a function that takes a message and a delay and print that message after the delay.
understanding#
setTimeout() places the callback function on the event queue after the given time.

remember#
It doesn't guarantee time
setTimeout(fn, 0) is used to do calculation when callstack is empty. Therefore not blocking the render. */

const printAfterDelay = (msg, delay) => {
	return setTimeout(() => console.log(msg), delay);
};

a = printAfterDelay("Radhe Radhe", 2000);

