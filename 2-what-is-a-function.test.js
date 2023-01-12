/**
 * Get the tests to pass by changing what they expect
 * NOT what the functions do, by looking at what the 
 * functions actually do.
 * (NOT just looking at the errors and copying and pasting!!)
 */

//don't change these
function myFunction() {
    return "run myFunction";
}

let firstFunction = myFunction
// console.log({firstFunction})
let secondFunction = function() {
    return "run secondFunction"
}

let arrowFunction = () => {
    return "run arrow function";
}

let anotherArrowFunction = x => {
    return "run another arrow function with parameter value: " + x;
}
/*
//fill in the correct string argument passed to toEquals()
test("myFunction", () => {expect(myFunction()).toEqual("run myFunction")});
test("firstFunction", () => {expect(firstFunction()).toEqual("run myFunction")});
test("secondFunction", () => {expect(secondFunction()).toEqual("run secondFunction")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("run arrow function")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("run another arrow function with parameter value: arg 1")});
*/
// Once you have those working, uncomment this section and get the second
// set of tests to run

//don't change this
//now mess things up!
let spare = myFunction;
myFunction = secondFunction;
secondFunction = arrowFunction;
arrowFunction = anotherArrowFunction;
anotherArrowFunction = spare; 

//fill in the correct string argument passed to toEquals()
test("myFunction2", () => {expect(myFunction()).toEqual("run secondFunction")});
test("firstFunction2", () => {expect(firstFunction()).toEqual("run myFunction")});
test("secondFunction2", () => {expect(secondFunction()).toEqual("run arrow function")});
test("arrowFunction2", () => {expect(arrowFunction()).toEqual("run another arrow function with parameter value: undefined")});
test("anotherArrowFunction2", () => {expect(anotherArrowFunction("arg 1")).toEqual("run myFunction")});

