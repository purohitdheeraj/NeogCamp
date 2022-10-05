// ? Replace fun exp with arrow fun

/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); 

*/

// * callback ko call kiya hai yaha pe
const ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
};

ask(
	"Do you Agree?",
	() => alert("You agreed"),
	() => alert("You Disagreed")
);
