var name = 'Jack';              // global scope

function message() {
    var msg = 'Hey Jack!'       //function scope
}

message()

console.log(msg);   