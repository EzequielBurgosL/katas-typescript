export class User {
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

export interface OrderCommand {
  execute(people: User[]): User[];
}

export class OrderByNameAscCommand implements OrderCommand {
  execute(people: User[]): User[] {
    return people.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}

export class OrderByNameDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
}

export class OrderByAgeAscCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => a.age - b.age);
  }
}

export class OrderByAgeDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.age - a.age);
  }
}

export class OrderByChildrenAscCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => a.children - b.children);
  }
}

export class OrderByChildrenDescCommand implements OrderCommand {
  execute(users: User[]): User[] {
    return users.slice().sort((a, b) => b.children - a.children);
  }
}

export class App {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  sortUsers(command: OrderCommand): User[] {
    this.users = command.execute(this.users);

    return this.users;
  }
}

const users: User[] = [
  new User('Juan', 'Perez', 30, 2),
  new User('Ana', 'Gomez', 25, 1),
  new User('Carlos', 'Lopez', 40, 3),
];

const app = new App(users);

const orderByNameAscCommand = new OrderByNameAscCommand();
const orderByNameDescCommand = new OrderByNameDescCommand();
const orderByAgeAscCommand = new OrderByAgeAscCommand();
const orderByAgeDescCommand = new OrderByAgeDescCommand();
const orderByChildrenAscCommand = new OrderByChildrenAscCommand();
const orderByChildrenDescCommand = new OrderByChildrenDescCommand();

app.sortUsers(orderByNameAscCommand);

app.sortUsers(orderByAgeDescCommand);
