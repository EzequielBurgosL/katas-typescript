import { UserCollection } from './iterator';

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
  execute(users: UserCollection): UserCollection;
}

export class OrderByAgeAscCommand implements OrderCommand {
  execute(users: UserCollection): UserCollection {
    const sortedUserCollection: UserCollection = new UserCollection();
    const iterator = users.getIterator();
    const sortedUsers: User[] = [];

    while (iterator.hasNext()) {
      sortedUsers.push(iterator.next());
    }

    const sortedUserArray = sortedUsers.sort((a, b) => a.age - b.age);

    sortedUserArray.forEach(user => {
      sortedUserCollection.addUser(user);
    });

    return sortedUserCollection;
  }
}

export class OrderByNameAscCommand implements OrderCommand {
  execute(users: UserCollection): UserCollection {
    const sortedUserCollection: UserCollection = new UserCollection();
    const iterator = users.getIterator();
    const sortedUsers: User[] = [];

    while (iterator.hasNext()) {
      sortedUsers.push(iterator.next());
    }

    const sortedUserArray = sortedUsers.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    sortedUserArray.forEach(user => {
      sortedUserCollection.addUser(user);
    });

    return sortedUserCollection;
  }
}

export class App {
  users: UserCollection;

  constructor(users: UserCollection) {
    this.users = users;
  }

  sortUsers(command: OrderCommand): UserCollection {
    this.users = command.execute(this.users);

    return this.users;
  }
}
