/**
 * Get the tests to pass by changing what they expect
 * NOT what the functions do, by looking at the functions
 * (NOT just looking at the errors and copying and pasting!!)
 */

//dont't change these
function myFunction() {
    return "ran myFunction";
}

let firstFunction = myFunction

let secondFunction = function() {
    return "ran secondFunction"
}

let arrowFunction = () => {
    return "ran arrow function";
}

let anotherArrowFunction = x => {
    return "ran another arrow function with parameter value: " + x;
}

//change the argument passed to toEquals()
test("myFunction", () => {expect(myFunction()).toEqual("")});
test("firstFunction", () => {expect(firstFunction()).toEqual("")});
test("secondFunction", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});

//don't change this
//now mess things up!
let spare = myFunction;
myFunction = secondFunction;
secondFunction = arrowFunction;
arrowFunction = anotherArrowFunction;
anotherArrowFunction = spare; 

//change the argument passed to toEquals()
test("myFunction", () => {expect(myFunction()).toEqual("")});
test("firstFunction", () => {expect(firstFunction()).toEqual("")});
test("secondFunction", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});
