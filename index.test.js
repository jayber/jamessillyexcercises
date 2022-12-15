let dog = "Burt The Dog";
let cat = "Alfred The Cat"

function petNames(dog, cat) {
  return `my dog is called ${dog} and my cat is called ${cat}`
}

test("are my pets well named?", () => {
    expect(petNames(cat, dog)).toEqual("my dog is called Burt The Dog and my cat is called Alfred The Cat");
  });