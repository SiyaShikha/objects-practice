const person1 = {
  name: "Rahul",
  age: 30,
  city: "Pune",
  // hobbies: ["chess", "gardening"],
  hobbies: { chess: null, gardening: null },
  education: ["Computer Science"],
  isEmployed: true,
  // profession: "Software Engineer",
  ownsCar: true,
  pets: [
    {
      species: "dog",
      breed: "golden retriever",
      name: "Max",
      age: 4,
      isVaccinated: true,
      favouriteActivity: ["playing fetch in the park"],
    },
  ],
};

const person2 = {
  name: "Ananya",
  age: 30,
  city: "Bangalore",
  // hobbies: ["cooking"],
  hobbies: { cooking: "Italian recipes" },
  education: ["Computer Science", "graphic design"],
  isEmployed: false,
  //profession : null;
  ownsCar: false,
  pets: [
    {
      species: "bird",
      breed: "parrot",
      age: null,
      name: "Kiwi",
      isVaccinated: true,
      favouriteActivity: ["mimics voice"],
    },
  ],
};

const person3 = {
  name: "Ramesh",
  age: 45,
  city: "Jaipur",
  // hobbies: ["gardening", "reading"],
  hobbies: { gardening: "rose", reading: "historical fiction" },
  education: [],
  isEmployed: true,
  // profession: "Business Owner",
  ownsCar: false,
  pets: [
    {
      species: "cat",
      breed: "Persian",
      name: "Bella",
      age: 3,
      isVaccinated: true,
      favouriteActivity: "lounging in the sun",
    },
    {
      species: "cat",
      breed: "Persian",
      name: "Leo",
      age: 3,
      isVaccinated: true,
      favouriteActivity: "lounging in the sun",
    },
  ],
};

const person4 = {
  name: "Kavya",
  age: 28,
  city: "Chennai",
  // hobbies: ["reading", "watching sci-fi shows"],
  hobbies: { reading: "modern fantasy novels", watching: "sci-fi shows" },
  education: [],
  isEmployed: false,
  // profession: "dancer",
  ownsCar: false,
  pets: [
    {
      species: "rabbit",
      breed: null,
      name: "Snowy",
      age: 2,
      isVaccinated: true,
      favouriteActivity: ["hopping around backyard", "nibbling on carrots"],
    },
  ],
};

const people = [person1, person2, person3, person4];

// *****************************************************************************
// 1. How many individuals are currently employed?
// Expected : 2

const employedPeople = people.filter((person) => person.isEmployed);

console.log("Num of people currently employed :", employedPeople.length);

// *****************************************************************************
// 2. How many people own a car?
// Expected : 1

const carOwners = people.filter((person) => person.ownsCar);

console.log("Number of car owners :", carOwners.length);

// *****************************************************************************
// 3. How many pets are fully vaccinated?
// Expected : 5

const vaccinatedPets = people
  .flatMap((person) => person.pets)
  .filter((pet) => pet.isVaccinated);

console.log("Number of vaccinated pets :", vaccinatedPets.length);

// *****************************************************************************
// 4. What are the names of all the pets, and what type of animal is each?
// expected :
// [
//   { name: "Max", specis: "dog" },
//   { name: "Kiwi", specis: "bird" },
//   { name: "Bella", specis: "cat" },
//   { name: "Leo", specis: "cat" },
//   { name: "Snowy", specis: "rabbit" }
// ]

const petsInformation = people
  .flatMap((person) => person.pets)
  .map((pet) => ({ name: pet.name, specis: pet.species }));

console.log("Names and types of all pets :", petsInformation);

// *****************************************************************************
// 5. Which cities do the individuals live in?
// Expected : [ "Pune", "Bangalore", "Jaipur", "Chennai" ]

const cities = people.map((person) => person.city);

console.log("Cities of people :", cities);

// *****************************************************************************
// 6. How many hobbies are shared across the group? What are they?
// Expected : [ "chess", "gardening", "cooking", "reading", "watching sci-fi shows" ]

const addIfUnique = (uniqueElements, element) => {
  if (!uniqueElements.includes(element)) {
    uniqueElements.push(element);
  }

  return uniqueElements;
};

const removeDuplicates = (array) => {
  return array.reduce(addIfUnique, []);
};

const allHobbies = people.flatMap((person) => Object.keys(person.hobbies));
const sharedHobbies = removeDuplicates(allHobbies);

console.log("Number of shared hobbies :", sharedHobbies.length);
console.log("Shared hobbies are :", sharedHobbies);

// *****************************************************************************
// 7. How many pets belong to people who are currently unemployed?
// Expected : 2

const petsOfUnemployedPeople = people
  .filter((person) => !person.isEmployed)
  .map((person) => person.pets);

console.log(
  "Number of pets belonging to unemployed people :",
  petsOfUnemployedPeople.length
);

// *****************************************************************************
// 8. What is the average age of the individuals mentioned in the passage?
// Expected : 33.25

const averageAge =
  people.reduce((sum, person) => sum + person.age, 0) / people.length;

console.log("Average age of people :", averageAge);

// *****************************************************************************
// 9. How many individuals have studied computer science, and how many of them have pets?
// Expected : 2,2

const compSciPeople = people.filter((person) =>
  person.education.includes("Computer Science")
);

const compSciPeopleWithPets = compSciPeople.filter(
  (person) => person.pets.length > 0
);

console.log("Number of people studied CS :", compSciPeople.length);
console.log(
  "Number of CS people who have pets :",
  compSciPeopleWithPets.length
);

// *****************************************************************************
// 10. How many individuals own more than one pet?
// Expected : 1

const multiplePetsPeople = people.filter((person) => person.pets.length > 1);

console.log(
  "Number of people with more than 1 pet :",
  multiplePetsPeople.length
);

// *****************************************************************************
// 11. Which pets are associated with specific favorite activities?
// Expected

// *****************************************************************************
// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
// Expected : [ "Kiwi", "Snowy" ]

const petsOfPeopleFromBangaloreOrChennai = people
  .filter((person) => person.city === "Bangalore" || person.city === "Chennai")
  .flatMap((person) => person.pets)
  .map((pet) => pet.name);

console.log(
  "Names of pets of people from Bangalore or Chennai :",
  petsOfPeopleFromBangaloreOrChennai
);

// *****************************************************************************
// 13. How many vaccinated pets belong to people who do not own a car?
// Expected : 4

const vaccinatedPetsOfNonCarOwners = people
  .filter((person) => !person.ownsCar)
  .flatMap((person) => person.pets)
  .filter((pet) => pet.isVaccinated);

console.log(
  "Number of vaccinated pets of non car owners",
  vaccinatedPetsOfNonCarOwners.length
);

// *****************************************************************************
//14. What is the most common type of pet among the group?
// Expected

// *****************************************************************************
// 15. How many individuals have more than two hobbies?
// Expected : 3
const multipleHobbiesPeople = people.filter(
  (person) => Object.keys(person.hobbies).length > 1
);

console.log(
  "Number of people with more than two hobbies :",
  multipleHobbiesPeople.length
);

// *****************************************************************************
// 16. How many individuals share at least one hobby with Ramesh?
// Expected : 2

const rameshHobbies = people.find((person) => person.name === "Ramesh").hobbies;

const similarHobbiesPeople = people.filter((person) =>
  Object.keys(person.hobbies).some(
    (hobby) =>
      Object.keys(rameshHobbies).includes(hobby) && person.name !== "Ramesh"
  )
);

console.log(
  "Number of people with some similar hobbies with Ramesh :",
  similarHobbiesPeople.length
);

// *****************************************************************************
// 17. Which pet is the youngest, and what is its name?
// Expected : rabbit, snowy

const youngestPet = people
  .flatMap((person) => person.pets)
  .reduce((youngestPet, pet) => {
    if (pet.age < youngestPet.age || !youngestPet.age) {
      return pet;
    }
    return youngestPet;
  });

console.log(
  "Youngest pet is",
  youngestPet.species,
  "and its name is",
  youngestPet.name
);

// *****************************************************************************
// 18. What types of books are mentioned as interests, and who reads them?
// Expected : [ "historical fiction", "modern fantasy novels" ]

const typesOfBooks = people
  .map((person) => [person.name, person.hobbies])
  .filter(([name, hobbies]) => hobbies.reading)
  .map(([name, hobbies]) => ({ name: name, bookType: hobbies.reading }));

console.log("Types of books people read :", typesOfBooks);

// *****************************************************************************
// 19. How many individuals live in cities starting with the letter "B"?
// Expected : 1

const peopleInBCities = people.filter((person) => person.city.at(0) === "B");

console.log(
  "Number of people living in cities starting with letter 'B' :",
  peopleInBCities.length
);

// *****************************************************************************
// 20. Which individuals do not own any pets?
// Expected : []

const peopleWithoutPets = people
  .filter((person) => person.pets.length === 0)
  .map((person) => person.name);

console.log("People with no pets :", peopleWithoutPets);
