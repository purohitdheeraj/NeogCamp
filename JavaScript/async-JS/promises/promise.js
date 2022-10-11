import { fakeFetch } from "./fakeFetch";

const result = fakeFetch("hare krishna", true);

result
	.then((res) => console.log(res))
	.catch((error) => console.log(error));

export { fakeFetch };
