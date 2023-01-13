/**
 * Get the tests to pass by changing what they expect
 * NOT what the functions do, by looking at what the 
 * functions ACTUALLY do.
 * This is about reading code. You can read it an understand it,
 * that's what it is for!
 * (NOT just looking at the errors and copying and pasting!!)
 */

//don't change these
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

//fill in the correct string argument passed to toEquals()
test("myFunction", () => {expect(myFunction()).toEqual("YOUR ANSWER HERE")});
test("firstFunction", () => {expect(firstFunction()).toEqual("YOUR ANSWER HERE")});
test("secondFunction", () => {expect(secondFunction()).toEqual("YOUR ANSWER HERE")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("YOUR ANSWER HERE")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("YOUR ANSWER HERE")});

/* Once you have those working, uncomment this section and get the second
set of tests to run

//don't change this
//now mess things up!
let spare = myFunction;
myFunction = secondFunction;
secondFunction = arrowFunction;
arrowFunction = anotherArrowFunction;
anotherArrowFunction = spare; 

//fill in the correct string argument passed to toEquals()
test("myFunction2", () => {expect(myFunction()).toEqual("YOUR ANSWER HERE")});
test("firstFunction2", () => {expect(firstFunction()).toEqual("YOUR ANSWER HERE")});
test("secondFunction2", () => {expect(secondFunction()).toEqual("YOUR ANSWER HERE")});
test("arrowFunction2", () => {expect(arrowFunction()).toEqual("YOUR ANSWER HERE")});
test("anotherArrowFunction2", () => {expect(anotherArrowFunction("arg 1")).toEqual("YOUR ANSWER HERE")});
*/
