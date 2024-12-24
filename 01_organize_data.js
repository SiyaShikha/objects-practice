const person1 = {
  name: "Rahul",
  age: 30,
  city: "Pune",
  hobbies: [
    { name: "chess", specifics: [] },
    { name: "gardening", specifics: [] },
  ],
  education: ["Computer Science"],
  isEmployed: true,
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
  hobbies: [{ name: "cooking", specifics: ["Italian recipes"] }],
  education: ["Computer Science", "graphic design"],
  isEmployed: false,
  ownsCar: false,
  pets: [
    {
      species: "bird",
      breed: "parrot",
      age: 3,
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
  hobbies: [
    { name: "gardening", specifics: ["rose"] },
    { name: "reading", specifics: ["historical fiction"] },
  ],
  education: [],
  isEmployed: true,
  ownsCar: false,
  pets: [
    {
      species: "cat",
      breed: "Persian",
      name: "Bella",
      age: 3,
      isVaccinated: true,
      favouriteActivity: ["lounging in the sun"],
    },
    {
      species: "cat",
      breed: "Persian",
      name: "Leo",
      age: 3,
      isVaccinated: true,
      favouriteActivity: ["lounging in the sun"],
    },
  ],
};

const person4 = {
  name: "Kavya",
  age: 28,
  city: "Chennai",
  hobbies: [
    { name: "reading", specifics: ["modern fantasy novels"] },
    { name: "watching", specifics: ["sci-fi shows"] },
  ],
  education: [],
  isEmployed: false,
  ownsCar: false,
  pets: [
    {
      species: "rabbit",
      breed: "rescue",
      name: "Snowy",
      age: 2,
      isVaccinated: true,
      favouriteActivity: ["hopping around backyard", "nibbling on carrots"],
    },
  ],
};

const people = [person1, person2, person3, person4];

// 1. How many individuals are currently employed?
const employedPeople = (people) => people.filter((person) => person.isEmployed);

console.log(
  "Num of people currently employed :",
  employedPeople(people).length
);

// 2. How many people own a car?
const carOwners = (people) => people.filter((person) => person.ownsCar);

console.log("Number of car owners :", carOwners(people).length);

// 3. How many pets are fully vaccinated?
const vaccinatedPets = (people) =>
  people.flatMap((person) => person.pets).filter((pet) => pet.isVaccinated);

console.log("Number of vaccinated pets :", vaccinatedPets(people).length);

// 4. What are the names of all the pets, and what type of animal is each?
const petsInformation = (people) =>
  people
    .flatMap((person) => person.pets)
    .map((pet) => ({ name: pet.name, specis: pet.species }));

console.log("Names and types of all pets :", petsInformation(people));

// 5. Which cities do the individuals live in?
const cities = (people) => people.map((person) => person.city);

console.log("Cities of people :", cities(people));

// 6. How many hobbies are shared across the group? What are they?
const sharedHobbies = (people) =>
  people
    .flatMap((person) => person.hobbies)
    .map((hobby) => hobby.name)
    .reduce((uniqueElements, element) => {
      uniqueElements[element] = true;
      return uniqueElements;
    }, {});

console.log(
  "Number of shared hobbies :",
  Object.keys(sharedHobbies(people)).length
);

console.log("Shared hobbies are :", Object.keys(sharedHobbies(people)));

// 7. How many pets belong to people who are currently unemployed?
const petsOfUnemployedPeople = (people) =>
  people.filter((person) => !person.isEmployed).map((person) => person.pets);

console.log(
  "Number of pets belonging to unemployed people :",
  petsOfUnemployedPeople(people).length
);

// 8. What is the average age of the individuals mentioned in the passage?
const averageAge = (people) =>
  people.reduce((sum, person) => sum + person.age, 0) / people.length;

console.log("Average age of people :", averageAge(people));

// 9. How many individuals have studied computer science, and how many of them have pets?
const compSciPeople = (people) =>
  people.filter((person) => person.education.includes("Computer Science"));

const compSciPeopleWithPets = (people) =>
  compSciPeople(people).filter((person) => person.pets.length > 0);

console.log("Number of people studied CS :", compSciPeople(people).length);
console.log(
  "Number of CS people who have pets :",
  compSciPeopleWithPets(people).length
);

// 10. How many individuals own more than one pet?
const multiplePetsPeople = (people) =>
  people.filter((person) => person.pets.length > 1);

console.log(
  "Number of people with more than 1 pet :",
  multiplePetsPeople(people).length
);

// 11. Which pets are associated with specific favorite activities?
const petsWithSpecificActivities = (people) =>
  people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.favouriteActivity.length > 0)
    .map((pet) => ({
      name: pet.name,
      favouriteActivity: pet.favouriteActivity,
    }));

console.log(
  "Pets with some specific activities :",
  petsWithSpecificActivities(people)
);

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const petsOfPeopleFromBangaloreOrChennai = (people) =>
  people
    .filter(
      (person) => person.city === "Bangalore" || person.city === "Chennai"
    )
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);

console.log(
  "Names of pets of people from Bangalore or Chennai :",
  petsOfPeopleFromBangaloreOrChennai(people)
);

// 13. How many vaccinated pets belong to people who do not own a car?
const vaccinatedPetsOfNonCarOwners = (people) =>
  people
    .filter((person) => !person.ownsCar)
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isVaccinated);

console.log(
  "Number of vaccinated pets of non car owners",
  vaccinatedPetsOfNonCarOwners(people).length
);

//14. What is the most common type of pet among the group?
const mostCommonPet = (people) =>
  people.flatMap((person) => person.pets).map((pet) => pet.species);

console.log("Most common pet is :", mostCommonPet(people));

// 15. How many individuals have more than two hobbies?
const multipleHobbiesPeople = (people) =>
  people.filter((person) => Object.keys(person.hobbies).length > 1);

console.log(
  "Number of people with more than two hobbies :",
  multipleHobbiesPeople(people).length
);

// 16. How many individuals share at least one hobby with Ramesh?
const rameshHobbies = (people) =>
  people
    .find((person) => person.name === "Ramesh")
    .hobbies.map((hobby) => hobby.name);

const similarHobbiesPeople = (people) =>
  people.filter((person) =>
    person.hobbies
      .map((hobby) => hobby.name)
      .some((hobby) => rameshHobbies(people).includes(hobby))
  );

console.log(
  "Number of people with some similar hobbies with Ramesh :",
  similarHobbiesPeople(people).length - 1
);

// 17. Which pet is the youngest, and what is its name?
const youngestPet = (people) =>
  people
    .flatMap((person) => person.pets)
    .reduce((youngestPet, pet) => {
      return pet.age < youngestPet.age ? pet : youngestPet;
    });

console.log(
  "Youngest pet is",
  youngestPet(people).species,
  "and its name is",
  youngestPet(people).name
);

// 18. What types of books are mentioned as interests, and who reads them?
const typesOfBooks = (people) =>
  people
    .map((person) => [person.name, person.hobbies])
    .filter(([a, hobbies]) => hobbies.some((h) => h.name === "reading"))
    .map(([name, hobbies]) => ({
      name: name,
      bookType: hobbies.find((h) => h.name === "reading").specifics.join(""),
    }));

console.log("Types of books people read :", typesOfBooks(people));

// 19. How many individuals live in cities starting with the letter "B"?
const peopleInBCities = (people) =>
  people.filter((person) => person.city.at(0) === "B");

console.log(
  "Number of people living in cities starting with letter 'B' :",
  peopleInBCities(people).length
);

// 20. Which individuals do not own any pets?
const peopleWithoutPets = (people) =>
  people
    .filter((person) => person.pets.length === 0)
    .map((person) => person.name);

console.log("People with no pets :", peopleWithoutPets(people));
