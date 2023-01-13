/**
 * Read the following code and decide whether the test will pass or fail
 * From the project root
 * Run `npm install` 
 * Run `npm run test`
 * Did it do what you expect? If not follow the steps in 
 * https://docs.google.com/document/d/1MENAmlQ2nCvsLEg4nV0YL2D5rD5se1_ke2fjAIX5HEQ/edit?usp=sharing
 * to help you understand why. 
 */

let dog = "Burt The Dog";
let cat = "Alfred The Cat"

function petNames(dog, cat) {
  return `my dog is called ${dog} and my cat is called ${cat}`
}

test("are my pets well named?", () => {
  expect(petNames(dog, cat)).toEqual("my dog is called Burt The Dog and my cat is called Alfred The Cat");
});