import { User } from '..';

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class UserIterator implements Iterator<User> {
  private collection: UserCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: UserCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public next(): User {
    const item = this.collection.getUsers()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public hasNext(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

interface Aggregator {
  getIterator(): Iterator<User>;
}

export class UserCollection implements Aggregator {
  private users: User[] = [];

  public getUsers(): User[] {
    return this.users;
  }

  public getCount(): number {
    return this.users.length;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public getIterator(): Iterator<User> {
    return new UserIterator(this);
  }

  public getReverseIterator(): Iterator<User> {
    return new UserIterator(this, true);
  }
}
