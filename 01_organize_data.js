const person1 = {
  name: "Rahul",
  age: 30,
  city: "Pune",
  hobbies: ["chess", "gardening"],
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
  hobbies: ["cooking"],
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
  hobbies: ["gardening", "reading"],
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
  hobbies: ["reading", "watching sci-fi shows"],
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

const allHobbies = people.flatMap((person) => person.hobbies);
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

const peopleWithMultiplePets = people.filter(
  (person) => person.pets.length > 1
);

console.log(
  "Number of people with more than 1 pet :",
  peopleWithMultiplePets.length
);

// *****************************************************************************
// 11. Which pets are associated with specific favorite activities?
// Expected :

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
// Expected :

// *****************************************************************************
// 15. How many individuals have more than two hobbies?
// Expected : 3
const peopleWithMultipleHobbies = people.filter(
  (person) => person.hobbies.length > 1
);

console.log(
  "Number of people with more than two hobbies :",
  peopleWithMultipleHobbies.length
);
