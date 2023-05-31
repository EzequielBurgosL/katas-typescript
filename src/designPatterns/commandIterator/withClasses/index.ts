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

export class OrderByNameAscCommand implements OrderCommand {
  execute(users: UserCollection): UserCollection {
    const iterator = users.getIterator();
    const sortedUserCollection: UserCollection = new UserCollection();
    let currentNode: User = iterator.next();

    while (iterator.hasNext()) {
      let nextNode: User = iterator.next();

      while (currentNode?.name) {
        if (currentNode.name.localeCompare(nextNode.name) > 0) {
          const tempNode = currentNode;
          currentNode = nextNode;
          nextNode = tempNode;
        }

        nextNode = iterator.next();
      }

      sortedUserCollection.addUser(currentNode);
      currentNode = iterator.next();
    }

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
