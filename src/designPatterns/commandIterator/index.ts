// Definition of the Person class
class Person {
  name: string;
  surname: string;
  age: number;
  children: number;

  constructor(name: string, surname: string, age: number, children: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.children = children;
  }
}

// Definition of the sorting command
interface OrderCommand {
  execute(people: Person[]): Person[];
}

// Sorting command for ascending name
class OrderByNameAscCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}

// Sorting command for descending name
class OrderByNameDescCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
}

// Sorting command for ascending age
class OrderByAgeAscCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => a.age - b.age);
  }
}

// Sorting command for descending age
class OrderByAgeDescCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => b.age - a.age);
  }
}

// Sorting command for ascending number of children
class OrderByChildrenAscCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => a.children - b.children);
  }
}

// Sorting command for descending number of children
class OrderByChildrenDescCommand implements OrderCommand {
  execute(people: Person[]): Person[] {
    return people.slice().sort((a, b) => b.children - a.children);
  }
}

// Class representing the application
class App {
  people: Person[];

  constructor(people: Person[]) {
    this.people = people;
  }

  sort(command: OrderCommand): void {
    this.people = command.execute(this.people);
    this.displayPeople();
  }

  displayPeople(): void {
    // For (const person of this.people) {
    //   console.log(${ person.name } ${ person.surname } - Age: ${ person.age } - Children: ${ person.children });
    // }
  }
}

// Create some example people
const people: Person[] = [
  new Person('Juan', 'Perez', 30, 2),
  new Person('Ana', 'Gomez', 25, 1),
  new Person('Carlos', 'Lopez', 40, 3),
];

// Create the application
const app = new App(people);

// Example usage of sorting commands
const orderByNameAscCommand = new OrderByNameAscCommand();
const orderByNameDescCommand = new OrderByNameDescCommand();
const orderByAgeAscCommand = new OrderByAgeAscCommand();
const orderByAgeDescCommand = new OrderByAgeDescCommand();
const orderByChildrenAscCommand = new OrderByChildrenAscCommand();
const orderByChildrenDescCommand = new OrderByChildrenDescCommand();

// Sort by ascending name
app.sort(orderByNameAscCommand);

// Sort by descending age
app.sort(orderByAgeDescCommand);
